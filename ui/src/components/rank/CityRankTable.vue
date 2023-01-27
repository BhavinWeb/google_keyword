<template>
	<div class="flex flex-col gap-2 border border-gray w-full ">
		<!-- eslint-disable  -->
		<div class="flex flex-row gap-w w-full border border-gray">
			<div class="w-full border-x px-2 py-1">{{ rank.searchName }}</div>
			<div class="w-full border-x px-2 py-1">{{ rank.status }}</div>
			<div class="w-full border-x px-2 py-1">{{ rank.date }}</div>
			<div class="w-20 border-x px-2 py-1" v-if="rank.statusCode == 1" @click="getStateWiseRankList(rank.searchName, rank.stateName)">
				<button class="btn bg-green px-4 py-2 text-sm rounded border-green-200 text-white">View</button>
			</div>
		</div>
		<div class="px-4">
			<div v-if="isOpen" class="flex flex-col gap-4">
				<div class="flex w-full flex-row font-lg font-semibold border border-gray">
					<div class="w-3/12 border-x px-2 py-1">State</div>
					<div class="w-full border-x px-2 py-1">City</div>
					<div class="w-3/12 border-x px-2 py-1">Rank</div>
					<div class="border-x px-2 py-1"><span class="sr-only">Action</span></div>
				</div>
				<div class="flex flex-col gap-2 font-sm  w-full" v-for="city in keyResult">
					<StateCityRankTable :rank="city" :state="rank.stateName" :sname="rank.searchName" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import StateCityRankTable from "@/components/rank/StateCityRankTable.vue";

export default {
	name: "CityRankTable",
	components: {StateCityRankTable},
	props: {
		rank: {
			type: Object,
			default: () => {
			}
		}
	},
	data() {
		return {
			isOpen: false,
			keyResult: [],
		}
	},
	methods: {
		async getStateWiseRankList(sName, state) {
			this.isLoading = true;
			try {
				await axios.post(this.$baseURL + '/getStateCityRank', {
					searchName: sName,
					stateName: state,
				}).then(response => {
					console.log(response.data);
					this.keyResult = response.data.data;

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