<template>
	<div class="w-full flex flex-col h-screen px-4 py-4 overflow-x-hidden overflow-y-hidden ">

		<div v-if="isLoading"
			 class="h-screen w-screen fixed" style="background-color: rgba(255,255,255,0.7) !important; z-index: 99999 !important;">

			<div class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/3" role="status">
				<svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
					 fill="none" viewBox="0 0 100 101" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
						fill="currentColor"/>
					<path
						d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
						fill="currentFill"/>
				</svg>
				<span class="sr-only">Loading...</span>
			</div>
		</div>

		<!-- eslint-disable  -->
		<div class="w-full flex flex-col gap-4 border-y-2 border-x-2 rounded border-blue-100 py-5 px-10 mb-5">

			<div class="flex items-center justify-between gap-4">
				<div class="font-semibold text-xl leading-snug uppercase text-blue-700">
					City Wise Search Result Generator
				</div>
			</div>

			<div class="flex w-full h-full flex-col space-y-4 hidden">
<!--				<div class="font-semibold text-sm flex justify-between">-->
<!--					<div class="">-->
<!--						Filters-->
<!--					</div>-->
<!--				</div>-->

				<div class="flex h-full w-full items-center space-x-8">
					<div class="flex flex-col h-full w-1/4 space-y-4">

						<div class="flex-flex-col w-full space-y-1">
							<label class="text-sm font-semibold text-primary-600" for="templateSelector">Search Name
								<span class="text-red-brand font-normal text-xs">Required *</span></label>
							<input
								id="keywords"
								v-model="searchName"
								class="form-control block w-full px-4 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								placeholder="Enter Search Name"
								type="text"
							/>
						</div>

					</div>

					<div class="flex flex-col h-full w-1/4 space-y-4">

						<div class="flex-flex-col w-full space-y-1">
							<label class="text-sm font-semibold text-primary-600" for="templateSelector">Select Template
								<span class="text-red-brand font-normal text-xs">Required *</span></label>
							<multiselect id="templateSelector" v-model="templateSelected" :options="templateList"
										 :select-label="''" label="name" placeholder="Select Template"
										 track-by="name"></multiselect>
						</div>

					</div>

					<div class="flex flex-col h-full w-1/4 space-y-1">
						<label class="text-sm font-semibold text-primary-600" for="citySelector">Select State (US Only)
							<span class="text-red-brand font-normal text-xs">Required *</span></label>
						<multiselect id="citySelector" v-model="provinceSelected" :hide-selected="false"
									 :multiple="false" :options="provinceList" :select-label="''" label="name"
									 placeholder="Select State" :close-on-select="true" track-by="name">
						</multiselect>
<!--						<multiselect id="citySelector" v-model="citySelected" :hide-selected="false"-->
<!--									 :multiple="true" :options="cityList" :select-label="''" label="name"-->
<!--									 placeholder="Select Cities" :close-on-select="false" track-by="name">-->
<!--						</multiselect>-->
					</div>

					<div class="flex flex-col h-full items-center space-y-4 w-1/4">

						<button class="h-12 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
								@click="searchStateKeyword">
							Generate Result
						</button>
					</div>

				</div>
			</div>
		</div>

		<div class="w-full flex flex-col flex-grow border-2 rounded border-blue-50 py-5 px-10 overflow-y-scroll">

			<!--			<LocationSearchList :city-results="cityResults" v-if="!hideTable"></LocationSearchList>-->
<!--			<div class="flex h-full overflow-y-scroll flex-col gap-4 w-full ">-->

				<div class="flex flex-col">
					<div class="flex flex-row gap-2 font-sm font-semibold border border-gray">
						<div class="w-full border-x px-2 py-1">Search</div>
						<div class="w-full border-x px-2 py-1">Status</div>
						<div class="w-full border-x px-2 py-1">Date</div>
						<div class="w-20 border-x px-2 py-1">Action</div>
					</div>
					<div class="flex flex-col gap-2 font-sm  w-full" v-for="rank in rankResult">
						<CityRankTable :rank="rank" />
					</div>
				</div>



		</div>

	</div>
</template>

<script>
import axios from "axios";
import Multiselect from 'vue-multiselect'
import LocationSearchList from "@/components/keywordResearch/LocationSearchList.vue";
import AccordionDesign from "@/components/mini/AccordionDesign.vue";
import CityRankTable from "@/components/rank/CityRankTable.vue";

export default {
	name: "CitySearch",
	components: {
		CityRankTable,
		AccordionDesign,
		LocationSearchList,
		Multiselect
	},
	data() {
		return {
			isLoading: true,
			hideTable: true,
			templateList: [],
			templateSelected: null,
			searchName: '',
			provinceList: [],
			provinceSelected: null,
			// cityList: [
			// 	{
			// 		name: "New York Mills",
			// 		criteria_id: 21156,
			// 		location: "New York Mills,Minnesota,United States"
			// 	},
			// 	{
			// 		name: "Dallas",
			// 		locationId: 1015318,
			// 		location: "Dallas,Georgia,United States"
			// 	},
			// 	{
			// 		name: "Chicago",
			// 		locationId: 1016367,
			// 		location: "Chicago,Illinois,United States"
			// 	},
			// 	{
			// 		name: "Huntsville",
			// 		locationId: 1020398,
			// 		location: "Huntsville,Missouri,United States"
			// 	},
			// 	{
			// 		name: "Seattle",
			// 		locationId: 1027744,
			// 		location: "Seattle,Washington,United States"
			// 	},
			// 	{
			// 		name: "Birmingham",
			// 		locationId: 1022034,
			// 		location: "Birmingham,New Jersey,United States"
			// 	},
			// 	{
			// 		name: "Phoenix",
			// 		locationId: 1023262,
			// 		location: "Phoenix,New York,United States"
			// 	},
			// 	{
			// 		name: "Mesa",
			// 		locationId: 1013445,
			// 		location: "Mesa,Arizona,United States"
			// 	},
			// ],
			// citySelected: null,
			// cityResults: [],
			// cityRanks: [],
			rankResult: [],
			rankCityResult: [],
			isSearchGenerated: false,
			searchError: false,
		}
	},
	mounted() {
		// $("#keywordTable").DataTable();
		this.$isLoadingScreen = false;
		this.isLoading = false;
		// this.getTemplateList();
		this.getStateRankList();
		// this.getCityRankList();
		// this.getCityUSList();
		// this.getGeoProvinces();
	},
	// watch: {
	// 	templateSelected(value) {
	// 		this.provinceSelected = null;
	// 	}
	// },
	methods: {
		async getTemplateList() {
			try {
				await axios.post(this.$baseURL + '/getTemplates').then(response => {
					console.log(response.data);
					this.templateList = response.data.data;

				}).catch(e => {
					console.log(e);
				}).then(() => {
					// this.hideTable = false;
				})
			} catch (e) {
				console.log('error', e)
			}
		},
		async getCityUSList() {
			try {
				await axios.post(this.$baseURL + '/getCityList').then(response => {
					console.log(response.data);
					this.cityList = response.data.data;

				}).catch(e => {
					console.log(e);
				}).then(() => {
					// this.hideTable = false;
				})
			} catch (e) {
				console.log('error', e)
			}
		},
		// async getCityRankList() {
		// 	this.isLoading = true;
		// 	this.hideTable = true;
		// 	try {
		// 		await axios.post(this.$baseURL + '/getCityRanks').then(response => {
		// 			console.log(response.data);
		// 			this.cityResults = response.data.data;
		//
		// 		}).catch(e => {
		// 			console.log(e);
		// 		}).then(() => {
		// 			this.hideTable = false;
		// 			this.isLoading = false;
		// 		})
		// 	} catch (e) {
		// 		console.log('error', e)
		// 	}
		// },
		async getStateRankList() {
			this.isLoading = true;
			this.hideTable = true;
			try {
				await axios.post(this.$baseURL + '/getStateRankList').then(response => {
					console.log(response.data);
					this.rankResult = response.data.data;

				}).catch(e => {
					console.log(e);
				}).then(() => {
					this.hideTable = false;
					this.isLoading = false;
				})
			} catch (e) {
				console.log('error', e)
			}
		},


		async getGeoProvinces() {
			await axios.post(this.$baseURL + '/getGeoProvinceList').then(response => {
				var locations = response.data.data;
				this.provinceList = locations.sort(function (a, b) {
					var textA = a.name.toUpperCase();
					var textB = b.name.toUpperCase();
					return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
				});

			}).catch(e => {
				console.log(e);
			}).then(() => {
				// console.log('this is the locations')
				// this.hideTable = false;
			})
		},
		validateSearch() {
			if (this.templateSelected == null || this.provinceSelected == null || this.searchName == '') {
				alert('Please Provide Required Input(s)');
				return false;
			}
			return true;
		},
		async searchStateKeyword() {
			if (await this.validateSearch()) {
				this.isLoading = true;
				this.isSearchGenerated = true;
				this.searchError = false;

				this.isLoading = false;
				var data = {
					state: this.provinceSelected,
					template: this.templateSelected,
					searchName: this.searchName,
					refresh_token: "1//0gzm7thono3LqCgYIARAAGBASNwF-L9IrsOcp1oFjFmu-8Ch0sGyh0aulI1QWZaizY4K6NPvZtrvjd2bWR8n3W3O36XJE6XUbxHc",
					customer_id: 3319541497,
				}
				await axios.post(this.$baseURL + '/searchStateKeyword', data).then(response => {
					console.log(response.data.data);
					var kData = response.data.data;
					console.log(kData);
					console.log(typeof kData);
					// this.cityResults = kData;
					// this.keywordSet = kData;
					// this.searchedKeywords = response.data.searchedKeys

					this.rankResult = kData;

				}).catch(e => {
					console.log(e);
					this.searchError = true;
				}).then(() => {
					this.searchError = false;
					// this.provinceSelected = null
					// this.templateSelected = null
					// this.getCityRankList();
				})
			}
		},
		async searchCityKeyword() {
			// alert('Request Processing');
			// this.citySelected = null

			if (await this.validateSearch()) {
				this.isLoading = true;
				var data = {
					cities: this.citySelected,
					template: this.templateSelected,
					refresh_token: "1//0gzm7thono3LqCgYIARAAGBASNwF-L9IrsOcp1oFjFmu-8Ch0sGyh0aulI1QWZaizY4K6NPvZtrvjd2bWR8n3W3O36XJE6XUbxHc",
					customer_id: 3319541497,
				}
				await axios.post(this.$baseURL + '/searchCityKeyword', data).then(response => {
					console.log(response.data.data);
					var kData = response.data.data;
					console.log(kData);
					console.log(typeof kData);
					// this.cityResults = kData;
					// this.keywordSet = kData;
					// this.searchedKeywords = response.data.searchedKeys

				}).catch(e => {
					console.log(e);
				}).then(() => {
					this.isLoading = false;
					this.citySelected = null
					this.templateSelected = null
					this.getCityRankList();
				})
			}

		}
	}
}
</script>

<style scoped>
@import "vue-multiselect/dist/vue-multiselect.css";
</style>