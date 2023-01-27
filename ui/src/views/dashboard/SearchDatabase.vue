<template>
	<div class="w-full h-screen py-4 px-4 overflow-x-hidden">

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
		<div class="w-full flex flex-col gap-4  border-2 rounded border-blue-300 py-5 px-10">

			<div class="flex items-center justify-between gap-4">
				<div class="font-semibold text-xl leading-snug uppercase text-blue-700">
					Google Keyword Research
				</div>
			</div>

			<div class="flex w-full flex-col space-y-4 ">
				<div class="font-semibold text-sm flex justify-between">
					<div class="">
						Filters
					</div>
				</div>
				<div class="flex h-full w-full items-center space-x-8">
					<div class="flex flex-col h-full w-1/3 space-y-4">

						<div class="flex-flex-col w-full space-y-1">
							<label class="text-sm font-semibold text-primary-600" for="countrySelector">Select
								Country/Region</label>

<!--							<multiselect id="countrySelector" v-model="countrySelected" :options="provinceList"
										 :select-label="''" label="name" placeholder="Select Province" track-by="name" :close-on-select="true">
								<span slot="noResult">Oops! No Provinces Found</span>
							</multiselect>-->
							<select id="countrySelector" v-model="countrySelected" class="form-select form-select-sm appearance-none block w-full px-4 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									@change="getProvinces">
								<option disabled selected value="0">Select Country/Regions</option>
								<optgroup label="Country/Regions">
									<option v-for="(country, index) in countryList" :key="index"
											:value="country"
											v-bind:selected="{ true : country.country_code === defaultCountryCode }">{{ country.name }}
									</option>
								</optgroup>
							</select>
						</div>

						<div class="flex-flex-col w-full space-y-1">
							<label class="text-sm font-semibold text-primary-600" for="provinceSelector">Select
								State</label>
							<multiselect id="provinceSelector" v-model="provinceSelected" :options="provinceList"
										 :select-label="''" label="name" placeholder="Select State" track-by="name" :close-on-select="true">
								<span slot="noResult">Oops! No State Found</span>
							</multiselect>
<!--							<select id="provinceSelector" v-model="provinceSelected" class="form-select form-select-sm appearance-none block w-full px-4 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"-->
<!--									@change="getCities">-->
<!--								<option disabled selected value="0">Select Province</option>-->
<!--								<optgroup label="Provinces">-->
<!--									<option v-for="(province, index) in provinceList" :key="index"-->
<!--											:value="province.criteria_id">{{ province.name }}-->
<!--									</option>-->
<!--								</optgroup>-->
<!--							</select>-->
						</div>

						<div class="flex-flex-col w-full space-y-1">
							<label class="text-sm font-semibold text-primary-600" for="citySelector">Select City</label>
							<multiselect id="provinceSelector"  v-model="citySelected" :options="cityList"
										 :select-label="''" label="name" placeholder="Select City"
										 track-by="name" :close-on-select="true">
								<template slot="noResult">Oops! No Cities Found</template>
							</multiselect>
<!--							<select id="citySelector" v-model="citySelected"
									class="form-select form-select-sm appearance-none block w-full px-4 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
								<option disabled selected value="0">Select City</option>
								<optgroup label="Cities">
									<option v-for="(city, index) in cityList" :key="index" :value="city.criteria_id">
										{{ `${city.name} - ${city.canonical_name}` }}
									</option>
								</optgroup>
							</select>-->
						</div>

					</div>

					<div class="flex flex-col h-full w-1/3 space-y-4">
						<div class="flex flex-col w-full space-y-1">
							<div class="font-semibold text-sm">Search Volume</div>
							<div class="flex w-full space-x-2">
								<input
									id="min" v-model="svMin" class="form-control w-full block px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" min="0" placeholder="min"
									step="100"
									type="number"
									v-bind:max="(svMax - 100) || 9900"
								/>
								<input
									id="max" v-model="svMax" class="form-control w-full block px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" max="10000"
									placeholder="max"
									step="100"
									type="number"
									v-bind:min="(svMin + 100) || 100"
								/>
							</div>
						</div>
						<div class="flex flex-col w-full space-y-1">
							<div class="font-semibold text-sm">Cost Per Click</div>
							<div class="flex w-full space-x-2">
								<input
									id="min" v-model="cpcMin" class="form-control w-full block px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" min="0" placeholder="min"
									step="1"
									type="number"
									v-bind:max="(cpcMax + 1)|| 99"
								/>
								<input
									id="max" v-model="cpcMax" class="form-control w-full block px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" max="100" placeholder="max"
									step="1"
									type="number"
									v-bind:min="(cpcMin + 1) || 1"
								/>
							</div>
						</div>
						<div class="flex flex-col w-full space-y-1">
							<div class="font-semibold text-sm">Competition</div>
							<div class="flex w-full space-x-2">
								<input
									id="min" v-model="compMin" class="form-control w-full block px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" min="0"
									placeholder="min"
									step="0.1"
									type="number"
									v-bind:max="(compMax - 0.1) || 0.9"
								/>
								<input
									id="max" v-model="compMax" class="form-control w-full block px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" max="1"
									placeholder="max"
									step="0.1"
									type="number"
									v-bind:min="(compMin + 0.1)|| 0.1"
								/>
							</div>
						</div>
					</div>

					<div class="flex flex-col h-full items-center space-y-4 w-1/3">
						<div class="flex w-full items-center space-x-2">
							<div
								class="relative inline-block w-16 align-middle select-none transition duration-200 ease-in">
								<input id="toggle" v-model="templateOption" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" name="toggle"
									   type="checkbox"/>
								<label class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
									   for="toggle"></label>
							</div>
							<label class="text-md text-gray-700" for="toggle">{{
									templateOption ? 'Select Template' : 'Manual Input'
								}}</label>
						</div>
						<div v-show="templateOption" class="flex-flex-col w-full space-y-1">
							<label class="text-sm font-semibold text-primary-600" for="templateSelector">Select
								Template</label>
							<select id="templateSelector" v-model="templateSelected"
									class="form-select form-select-sm appearance-none block w-full px-4 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
								<option disabled selected value="0">Select Template</option>
								<option v-for="(template, index) in templateList" :key="index"
										:value="template.name">{{ template.name }}
								</option>
							</select>
						</div>

						<div v-show="!templateOption" class="flex-flex-col w-full space-y-1">
							<label class="text-sm font-semibold text-primary-800" for="keywords">Enter
								Keyword(s)</label>
							<input
								id="keywords"
								v-model="keywords"
								class="form-control block w-full px-4 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								placeholder="Enter Keyword(s)"
								type="text"
							/>
							<small class="text-red-brand">Add Multiple Keywords using "<b>,</b>" between each keywords</small>
						</div>

						<button class="h-12 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
								@click="searchKeyword">
							Search
						</button>
					</div>

				</div>
			</div>
		</div>

		<div class="flex flex-col overflow-x-hidden overflow-y-hidden">
			<div class="overflow-x-auto overflow-y-auto">

				<div class="p-1.5 w-full inline-block align-middle">
					<!--					:formula="indexFormula"  -->
					<GoogleKeywordTable v-if="!hideTable"
										:keyword-set="keywordSet" :searched-keys="searchedKeywords"
										:selected="selectedKeyword" :template-list="templateList"
										@addToTemplate="addKeywordsToTemplate" @displayResult="changeResultTable"></GoogleKeywordTable>
					</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import GoogleKeywordTable from "@/components/keywordResearch/GoogleKeywordTable.vue";
import AhKeywordTable from "@/components/keywordResearch/AhKeywordTable.vue";
import Multiselect from 'vue-multiselect'
// import SelectDropdown from "@/components/SelectDropdown.vue";

export default {
	name: "SearchDatabase",
	components: {AhKeywordTable, GoogleKeywordTable, Multiselect},
	data() {
		return {
			keywords: '',
			locationId: 1006524,
			countryList: [],
			defaultCountryCode: 'US',
			countrySelected: 0,
			provinceList: [],
			provinceSelected: null,
			cityList: [],
			citySelected: null,
			location: 0,
			searchedKeywords: [],
			svMin: 10,
			svMax: 10000,
			cpcMin: 0,
			cpcMax: 100,
			compMin: 0,
			compMax: 1,
			keywordSet: [],
			hideTable: true,
			templateOption: false,
			templateList: [],
			templateSelected: 0,
			selected: {name: null, id: null},
			selectedKeyword: [],
			selectedKeywordAh: [],
			ahrefResult: [],
			isLoading: false,
			currentStatus: 1,
			loadAh: false,
			// indexFormula: '((BH - BL)/2)*( 3 * CPC + AV )/CI'
		}
	},
	mounted() {
		// $("#keywordTable").DataTable();
		this.$isLoadingScreen = false;
		this.getRegions();
		this.getTemplateList();
	},
	watch: {
		provinceSelected(value) {
			// this.getCities()
			this.getGeoCities()
		}
	},
	methods: {
		async getRegions() {
			this.provinceList.splice(0);
			this.provinceSelected = null;
			this.cityList.splice(0);
			this.citySelected = null;
			await axios.post(this.$baseURL + '/GetCountries').then(response => {
				var locations = response.data.data;
				this.countryList = locations.sort(function (a, b) {
					var textA = a.name.toUpperCase();
					var textB = b.name.toUpperCase();
					return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
				});

				if (this.countrySelected === 0) {
					this.countrySelected = locations.filter(obj => obj.country_code === this.defaultCountryCode).map(obj => obj)[0]
					// this.getProvinces();
					this.getGeoProvinces();
				}

			}).catch(e => {
				console.log(e);
			}).then(() => {
				// console.log('this is the locations')
				// this.hideTable = false;
			})
		},
		async getLocations() {
			await axios.post(this.$baseURL + '/GetLocationList', {country: 'United States'}).then(response => {
				console.log(response.data);
				var locations = response.data.data;
				console.log('locations: ', locations);
				console.log(typeof locations);
				var sortedLocations = locations.sort(function (a, b) {
					var textA = a.name.toUpperCase();
					var textB = b.name.toUpperCase();
					return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
				});
				this.locationList = sortedLocations;
				//
				// this.hideTable = true;

			}).catch(e => {
				console.log(e);
			}).then(() => {
				console.log('this is the locations')
				// this.hideTable = false;
			})
		},
		async getProvinces() {
			this.cityList.splice(0);
			this.citySelected = null;
			await axios.post(this.$baseURL + '/GetProvinces', {country_id: this.countrySelected}).then(response => {
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
		async getCities() {
			// this.cityList.splice(0);
			if(this.provinceSelected) {
				await axios.post(this.$baseURL + '/GetCities', {
					country_id: this.countrySelected,
					state_id: this.provinceSelected.criteria_id
				}).then(response => {
					var locations = response.data.data;
					this.cityList = locations.sort(function (a, b) {
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
			}
		},
		async getGeoProvinces() {
			this.cityList.splice(0);
			this.citySelected = null;
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
		async getGeoCities() {
			// this.cityList.splice(0);
			if(this.provinceSelected) {
				await axios.post(this.$baseURL + '/getGeoCityList', {
					country_id: this.countrySelected,
					state_id: this.provinceSelected.criteria_id
				}).then(response => {
					var locations = response.data.data;
					this.cityList = locations.sort(function (a, b) {
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
			}
		},
		async searchKeyword() {
			if((!this.templateOption && this.keywords != '') || (this.templateOption && this.templateSelected.length)){
				this.isLoading = true;
				this.hideTable = true;
				this.keywordSet = [];
				this.hideTable = false;
				var data = {
					location: this.citySelected === null ? (this.provinceSelected === 0 ? this.countrySelected : this.provinceSelected) : this.citySelected.criteria_id,
					city: this.citySelected,
					state: this.provinceSelected,
					country: this.countrySelected,
					keyword: this.keywords,
					isCity: this.citySelected !== null,
					isState: this.provinceSelected !== null,
					isCountry: this.countrySelected !== null,
					location_str: this.citySelected !== null ? this.cityList.filter(obj => obj.criteria_id === this.citySelected.criteria_id).map(obj => obj.canonical_name)[0] : '',
					refresh_token: "1//0gzm7thono3LqCgYIARAAGBASNwF-L9IrsOcp1oFjFmu-8Ch0sGyh0aulI1QWZaizY4K6NPvZtrvjd2bWR8n3W3O36XJE6XUbxHc",
					customer_id: 3319541497,
					minSV: this.svMin,
					minCPC: this.cpcMin,
					minCMP: this.compMin,
					maxSV: this.svMax,
					maxCPC: this.cpcMax,
					maxCMP: this.compMax,
					isTemplate: this.templateOption,
					template: this.templateSelected
				}
				await axios.post(this.$baseURL + '/generateSearchRank', data).then(response => {
					console.log(response.data.data);
					var kData = response.data.data;
					console.log(kData);
					console.log(typeof kData);
					this.keywordSet = kData;
					this.searchedKeywords = response.data.searchedKeys

					this.hideTable = true;

				}).catch(e => {
					console.log(e);
				}).then(() => {
					console.log('this is the value')
					this.hideTable = false;
					this.isLoading = false;
					// this.searchKeywordAhref()
				})
			}else{
				if(this.templateOption)
					alert('Please Select Keyword Template')
				else
					alert('Please Provide Keyword')
			}
		},
		/*async searchKeywordAhref() {
			// this.hideTable = true;
			this.ahrefResult = [];
			this.loadAh = false;
			this.isLoading = true;
			// this.hideTable = false;
			var data = {
				location: this.citySelected === null ? (this.provinceSelected === 0 ? this.countrySelected : this.provinceSelected.criteria_id) : this.citySelected.criteria_id,
				keyword: this.keywords,
				location_str: this.citySelected !== null ? this.cityList.filter(obj => obj.criteria_id === this.citySelected.criteria_id).map(obj => obj.canonical_name)[0] : '',
				refresh_token: "1//0gzm7thono3LqCgYIARAAGBASNwF-L9IrsOcp1oFjFmu-8Ch0sGyh0aulI1QWZaizY4K6NPvZtrvjd2bWR8n3W3O36XJE6XUbxHc",
				customer_id: 3319541497,
				minSV: this.svMin,
				minCPC: this.cpcMin,
				minCMP: this.compMin,
				maxSV: this.svMax,
				maxCPC: this.cpcMax,
				maxCMP: this.compMax,
				isTemplate: this.templateOption,
				template: this.templateSelected
			}
			await axios.post(this.$baseURL + '/searchKeywordAhref', data).then(response => {
				console.log(response.data.data);
				var kData = response.data.data;
				console.log(kData);
				console.log(typeof kData);
				this.ahrefResult = kData;

			}).catch(e => {
				console.log(e);
			}).then(() => {
				console.log('this is the Ahref')
				this.isLoading = false;
				this.loadAh = true;
				// this.hideTable = false;
			})
		},*/
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
		async addKeywordsToTemplate(event) {
			console.log(event)
			this.hideTable = false;

			var data = {
				template: event.template.name,
				niche: event.template.name,
				keyword: event.keywords
			}

			await axios.post(this.$baseURL + '/addTemplateKeyword', data).then(response => {
				console.log(response.data);
				alert('Added TO Template');
			}).catch(e => {
				console.log(e);
			}).then(() => {
				if (event.type === 'gk') {
					this.selectedKeyword.splice(0);
				} else {
					this.selectedKeywordAh.splice(0);
				}
				// this.showTable = true;
				this.hideTable = false;
			})

			// await axios.post
		},
		changeResultTable(event) {
			console.log(this.ahrefResult.length)
			if (this.currentStatus !== event.status && this.ahrefResult.length > 0) {
				this.currentStatus = event.status
			} else {
				this.currentStatus = 1
			}
		},
		validateSelection(selection) {
			this.selected = selection;
			console.log(selection.name + " has been selected");
		},
		getDropdownValues(keyword) {
			console.log("You could refresh options by querying the API with " + keyword);
		}
	}
}
</script>

<style scoped>
/* CHECKBOX TOGGLE SWITCH */
.toggle-checkbox:checked {
	@apply: right-0 border-green-400;
	right: 0;
	border-color: #68D391;
}

.toggle-checkbox:checked + .toggle-label {
	@apply: bg-green-400;
	background-color: #68D391;
}
</style>