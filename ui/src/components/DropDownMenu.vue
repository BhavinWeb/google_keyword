<template>
	<div>
		<button aria-controls="dropdown-example" class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
				data-collapse-toggle="dropdown-example"
				type="button" @click="isOpen = !isOpen">
			<slot name="listIcon"></slot>
			<span class="flex-1 ml-3 text-left whitespace-nowrap"><slot name="listTitle"></slot></span>
			<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<path clip-rule="evenodd"
					  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					  fill-rule="evenodd"></path>
			</svg>
		</button>
		<div class="hidden" v-bind:class="{'block' : isOpen}">
			<slot name="listContent"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "DropDownMenu",
	data() {
		return {
			isOpen: true,
		}
	},
	props: {
		title: {
			type: String,
			default: '',
		}
	}
}
</script>

<style scoped>

</style>