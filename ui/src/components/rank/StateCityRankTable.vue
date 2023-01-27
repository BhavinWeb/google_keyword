<template>
		<!-- eslint-disable  -->
		<div class="flex flex-col gap-2 w-full ">
			<div class="flex flex-row w-full text-red gap-4 border-b">
				<div class="text-sm  w-3/12 font-semibold   flex items-center justify-center">
					{{ state }}
				</div>
				<div class="text-sm w-full  flex items-center justify-center font-semibold ">
					{{ rank.cityName }}
				</div>
				<div class="text-sm  w-3/12 flex items-center justify-center font-semibold ">
					{{ rank.cityRank }}
				</div>
				<div class="text-sm  w-3/12 flex items-center justify-center font-semibold ">
					<div class="w-10 border-x px-2 py-1"  @click="getStateCityRankList(state, rank.cityName)">
						<button class="btn bg-green px-4 py-2 text-sm rounded border-green-200 text-white">View</button>
					</div>
				</div>
			</div>
			<div v-if="isOpen" class="flex flex-col">
				<div class="flex flex-row text-blue py-2">
					<div class="text-sm w-full  flex items-center font-semibold">
						Keyword
					</div>
					<div class="text-sm  w-3/12 flex items-center justify-center font-semibold ">
						CPC
					</div>
					<div class="text-sm  w-3/12 flex items-center justify-center font-semibold ">
						Search Volume
					</div>
					<div class="text-sm  w-3/12 flex items-center justify-center font-semibold ">
						Competition
					</div>
					<div class="text-sm  w-3/12 flex items-center justify-center font-bold ">
						Rank
					</div>
				</div>
				<div v-for="keyword in cityRanks"
					 class="flex flex-row text-gray-900 w-full gap-4 border-b border-green-100 py-1">
					<div class="text-sm w-full font-semibold">
						{{ keyword.keyword }}
					</div>
					<div class="text-sm  w-3/12 flex items-center justify-center font-semibold ">
						{{ keyword.avgCPC }}
					</div>
					<div class="text-sm  w-3/12 flex items-center justify-center font-semibold ">
						{{ keyword.searchVolume }}
					</div>
					<div class="text-sm  w-3/12 flex items-center justify-center font-semibold ">
						{{ keyword.competition }}
					</div>
					<div class="text-sm  w-3/12 flex items-center justify-center font-bold ">
						{{ keyword.keywordRank }}
					</div>
				</div>
			</div>
		</div>
</template>

<script>
import axios from "axios";

export default {
	name: "StateCityRankTable",
	props: {
		rank: {
			type: Object,
			default: () => {
			}
		},
		state: {
			type: String,
			default: ""
		},
		sname: {
			type: String,
			default: ""
		}
	},
	data() {
		return {
			isOpen: false,
			cityRanks: [],
		}
	},
	methods: {
		async getStateCityRankList(state, city) {
			this.isLoading = true;
			try {
				await axios.post(this.$baseURL + '/getStateCityRankList', {
					searchName: this.sname,
					stateName: state,
					city: city
				}).then(response => {
					console.log(response.data);
					this.cityRanks = response.data.data;

				}).catch(e => {
					console.log(e);
				}).then(() => {
					this.hideTable = false;
					this.isLoading = false;
					this.isOpen = true;
				})


			} catch (e) {
				console.log(e)
			}
		},
	}
}
</script>

<style scoped>

</style>