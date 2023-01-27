<template>
	<div class="w-full">
		<div class="flex justify-between px-5 gap-4 py-5 bg-green-50 border border-gray-200 rounded">
			<div class="flex gap-4 items-center w-64 h-10 " @click="isOpen = !isOpen">
				<div class="text-medium cursor-pointer font-bold text-green">
					{{ cityData.cityName }}
				</div>
				<div
					class="text-medium h-8 w-16 cursor-pointer flex items-center justify-center font-bold bg-green-50 border border-green-400 rounded text-green">
					{{ cityData.cityRank }}
				</div>
			</div>

			<div v-show="isOpen" class="flex flex-col gap-2 w-full ">
				<div class="flex flex-row w-full text-red gap-4 border-b">
					<div class="text-sm  w-full font-semibold">
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
					<div class="text-sm  w-3/12 flex items-center justify-center font-semibold ">
						Rank
					</div>
				</div>
				<div v-for="keyword in cityData.keyRanks"
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
	</div>
</template>

<script>
export default {
	name: "SearchBoxComponent",
	props: {
		cityData: {
			type: Object,
			default: () => {
			}
		}
	},
	data() {
		return {
			isOpen: false,
		}
	}
}
</script>

<style scoped>

</style>