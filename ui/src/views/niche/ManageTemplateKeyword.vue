<template>
	<div class="w-full h-full mt-4 px-4 overflow-hidden">
		<div class="flex flex-col overflow-x-hidden overflow-y-hidden space-y-4">
			<!-- eslint-disable  -->
			<div class="flex items-center justify-between gap-4">
				<div class="font-semibold text-xl leading-snug uppercase   text-blue-600">
					Manage Keywords - Template <span class="underline text-blue-700"> {{
						template ? template.name : ''
					}}</span>
				</div>
				<button class="h-10 px-7 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						@click="toggleModal">
					Add Keywords
				</button>
			</div>

			<div class="overflow-x-auto overflow-y-auto">
				<div class="p-1.5 w-full inline-block align-middle">
					<TemplateKeyword v-if="showTable" :keyword-list="keywordList"/>
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
							Add Keyword
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
							<div class="flex-flex-col w-full space-y-1">
								<label class="text-sm font-semibold text-primary-600" for="keyword">Enter Keyword
									Name</label>
								<input id="keyword" v-model="keyword"
									   class="form-control block w-full px-4 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									   placeholder="Enter Keyword Name" type="text"/>
							</div>
						</div>
					</div>
					<!--footer-->
					<div
						class="flex items-center gap-4 justify-end p-6 border-t border-solid border-slate-200 rounded-b">
						<button
							class="text-blue-600 bg-transparent border border-solid border-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-600 font-bold uppercase w-full text-sm px-6 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
							type="button" v-on:click="toggleModal()">
							Close
						</button>
						<button class="text-white bg-blue-600 background-transparent font-bold uppercase w-full px-6 py-3 text-sm outline-none focus:outline-noneease-linear transition-all duration-150"
								type="button"
								@click="addNewTemplate" v-on:click="toggleModal()">
							Add
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
import TemplateKeyword from "@/components/keywordTemplates/TemplateKeyword.vue";
/* eslint-disable */
export default {
	name: "ManageTemplateKeyword",
	components: {TemplateKeyword},
	data() {
		return {
			keywordList: [],
			showTable: false,
			template: {},
			keyword: '',
			showAddModal: false
		}
	},
	mounted() {
		// this.getTemplateList()
		// this.getNicheList()
		this.getKeywordList()
	},
	methods: {
		toggleModal: function () {
			this.showAddModal = !this.showAddModal;
		},

		async getKeywordList() {
			this.showTable = false;
			try {
				await axios.post(this.$baseURL + '/getTemplateKeywordList', {
					template: this.$route.params.id
				}).then(response => {
					console.log(response.data);
					this.keywordList = response.data.data;
					this.template = response.data.template[0]

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
			try {
				await axios.post(this.$baseURL + '/addTemplateKeyword', {
					template: this.template.name,
					niche: this.template.niche,
					keyword: this.keyword
				}).then(response => {
					console.log(response.data);
				}).catch(e => {
					console.log(e);
				}).then(() => {
					this.showAddModal = false;
					this.keyword = '';
					this.getKeywordList();
					// this.showTable = true;
					// this.hideTable = false;
				})
			} catch (e) {
				console.log('erroe', e)
			}
		}
	}
}
</script>

<style scoped>

</style>