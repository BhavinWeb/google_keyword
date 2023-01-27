<template>
	<div class="flex h-full flex-col gap-4 w-full overflow-y-scroll">

		<div v-for="(cityData, index) in cityResults" :key="index" class=" bg-green-50 border border-gray-200 rounded">
			<SearchBoxComponent :city-data="cityData"/>

		</div>

	</div>
</template>

<script>
import SearchBoxComponent from "@/components/mini/SearchBoxComponent.vue";
import AccordionDesign from "@/components/mini/AccordionDesign.vue";

export default {
	name: "LocationSearchList",
	components: {AccordionDesign, SearchBoxComponent},
	props: {
		cityResults: {
			type: Array,
			default: () => []
		},
	}
}
</script>

<style scoped>

</style>