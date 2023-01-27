<template>
	<div class="w-full h-full mt-4 px-4 overflow-hidden">
		<div class="flex flex-col overflow-x-hidden overflow-y-hidden space-y-4">
			<!-- eslint-disable  -->
			<div class="flex items-center justify-between gap-4">
				<div class="font-semibold text-xl leading-snug uppercase text-blue-700">
					Manage Niche
				</div>
				<button class="h-10 px-7 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						@click="toggleModal">
					add Niche
				</button>
			</div>

			<div class="overflow-x-auto overflow-y-auto">
				<div class="p-1.5 w-full inline-block align-middle">
					<NicheList v-if="showTable" :niche-list="nicheList"/>
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
						<div class="flex flex-col">
							<div class="flex-flex-col w-full space-y-1">
								<label class="text-sm font-semibold text-primary-800" for="keywords">Enter Niche
									Name</label>
								<input id="niche" v-model="niche"
									   class="form-control block w-full px-4 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									   placeholder="Enter Niche Name" type="text"/>
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
								@click="addNewNiche" v-on:click="toggleModal()">
							Save Changes
						</button>
					</div>
				</div>
			</div>
		</div>
		<div v-if="showAddModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
	</div>
</template>

<script>
import NicheList from "@/components/niche/NicheList.vue";
import axios from "axios";
/* eslint-disable */
export default {
	name: "ManageNiche",
	components: {NicheList},
	data() {
		return {
			nicheList: [],
			showTable: false,
			niche: '',
			showAddModal: false
		}
	},
	mounted() {
		this.getNicheList()
	},
	methods: {
		toggleModal: function () {
			this.showAddModal = !this.showAddModal;
		},
		async getNicheList() {
			this.showTable = false;
			try {
				await axios.post(this.$baseURL + '/getNiches').then(response => {
					console.log(response.data);
					this.nicheList = response.data.data;

				}).catch(e => {
					console.log(e);
				}).then(() => {
					this.showTable = true;
					// this.hideTable = false;
				})
			} catch (e) {
				console.log('error', e)
			}
		},
		async addNewNiche() {
			// this.showTable = false;
			try {
				await axios.post(this.$baseURL + '/addNiche', {
					nicheName: this.niche
				}).then(response => {
					console.log(response.data);
				}).catch(e => {
					console.log(e);
				}).then(() => {
					this.showAddModal = false;
					this.niche = '';
					this.getNicheList();
					// this.showTable = true;
					// this.hideTable = false;
				})
			} catch (e) {
				console.log('error', e)
			}
		}
	}
}
</script>

<style scoped>

</style>