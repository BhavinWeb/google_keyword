<template>
	<div class="w-full h-full mt-4 px-4 overflow-hidden">
		<div class="flex flex-col overflow-x-hidden overflow-y-hidden space-y-4">
			<!-- eslint-disable  -->
			<div class="flex items-center justify-between gap-4">
				<div class="font-semibold text-xl leading-snug uppercase text-blue-700">
					Manage Templates
				</div>
				<button class="h-10 px-7 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						@click="toggleModal">
					Add Templates
				</button>
			</div>

			<div class="overflow-x-auto overflow-y-auto">
				<div class="p-1.5 w-full inline-block align-middle">
					<TemplateList v-if="showTable" :template-list="templateList"/>
				</div>
			</div>
		</div>

		<div v-if="showAddModal"
			 class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
			<div class="relative w-auto my-6 mx-auto max-w-2xl">
				<!--content-->
				<div
					class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
					<!--header-->
					<div
						class="flex items-center justify-between px-4 py-2 border-b border-solid border-slate-200 rounded-t">
						<div class="text-1xl font-semibold">
							Add Niche
						</div>
						<div
							class="ml-auto bg-transparent border-0 text-black opacity-5 text-1xl leading-none font-semibold outline-none focus:outline-none"
							v-on:click="toggleModal()">
							  <span class="bg-transparent text-black text-2xl block outline-none focus:outline-none">
								×
							  </span>
						</div>
					</div>
					<!--body-->
					<div class="relative p-6 flex-auto">
						<div class="flex flex-col space-y-4">
							<div class="flex text-sm text-red-brand" v-if="errorCode && (!nicheSelected.length || template == '')">
								Please Fill all the required fields
							</div>
							<div class="flex-flex-col w-full space-y-1">
								<label class="text-sm font-semibold text-primary-600" for="nicheSelector">Select
									Select Niche <span class="text-red-brand font-normal text-xs">Required *</span></label>
								<select id="nicheSelector" v-model="nicheSelected"
										class="form-select form-select-sm appearance-none block w-full px-4 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
									<option disabled selected value="0">Select Niche</option>
									<option v-for="(niche, index) in nicheList" :key="index" :value="niche.name">
										{{ niche.name }}
									</option>
								</select>
							</div>
							<div class="flex-flex-col w-full space-y-1">
								<label class="text-sm font-semibold text-primary-600" for="template">Enter Template
									Name <span class="text-red-brand font-normal text-xs">Required *</span></label>
								<input id="template" v-model="template"
									   class="form-control block w-full px-4 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									   placeholder="Enter Template Name" type="text"/>
							</div>
							<div class="flex-flex-col w-full space-y-1">
								<label class="text-sm font-semibold text-primary-600" for="keywords">Enter
									Keywords</label>
								<input id="keywords" v-model="keywords"
									   class="form-control block w-full px-4 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									   placeholder="Enter Keywords Name" type="text"/>
								<small class="text-red-brand">Add Multiple Keywords using "<b>,</b>" between each keywords</small>
							</div>
						</div>
					</div>
					<!--footer-->
					<div
						class="flex items-center gap-4 justify-end p-6 border-t border-solid border-slate-200 rounded-b">
						<button
							class="text-blue-600 bg-transparent border border-solid border-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
							type="button" v-on:click="toggleModal()">
							Close
						</button>
						<button class="text-white bg-blue-600 background-transparent font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-noneease-linear transition-all duration-150"
								type="button"
								@click="addNewTemplate"  v-on:click="errorCode ? '' : toggleModal">
							Add Template
						</button>
					</div>
				</div>
			</div>
		</div>
		<div v-if="showAddModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
	</div>
</template>

<script>
import axios from "axios";
import TemplateList from "@/components/keywordTemplates/TemplateList.vue";
/* eslint-disable */
export default {
	name: "ManageTemplates",
	components: {TemplateList},
	data() {
		return {
			templateList: [],
			nicheList: [],
			nicheSelected: 0,
			showTable: false,
			template: '',
			keywords: '',
			showAddModal: false,
			errorCode: false,
		}
	},
	mounted() {
		this.getTemplateList()
		this.getNicheList()
	},
	methods: {
		toggleModal: function () {
			this.showAddModal = !this.showAddModal;
		},
		async getNicheList() {
			try {
				await axios.post(this.$baseURL + '/getNiches').then(response => {
					console.log(response.data);
					this.nicheList = response.data.data;

				}).catch(e => {
					console.log(e);
				}).then(() => {
					console.log('load');
				})
			} catch (e) {
				console.log('error', e)
			}
		},
		async getTemplateList() {
			this.showTable = false;
			try {
				await axios.post(this.$baseURL + '/getTemplates').then(response => {
					console.log(response.data);
					this.templateList = response.data.data;

				}).catch(e => {
					console.log(e);
				}).then(() => {
					this.showTable = true;
					// this.hideTable = false;
				})
			} catch (e) {
				console.log('erroe', e)
			}
		},
		async addNewTemplate() {
			// this.showTable = false;
			if(this.nicheSelected.length && this.template != '') {
				this.errorCode = false;
				this.toggleModal();
				try {
					await axios.post(this.$baseURL + '/addTemplate', {
						templateName: this.template,
						niche: this.nicheSelected,
						keyword: this.keywords
					}).then(response => {
						console.log(response.data);
					}).catch(e => {
						console.log(e);
					}).then(() => {
						this.showAddModal = false;
						this.template = '';
						this.keywords = '';
						this.nicheSelected = 0;
						this.getTemplateList();
						// this.showTable = true;
						// this.hideTable = false;
					})
				} catch (e) {
					console.log('error', e)
				}
			}else{
				this.errorCode = true;
			}
		}
	}
}
</script>

<style scoped>

</style>