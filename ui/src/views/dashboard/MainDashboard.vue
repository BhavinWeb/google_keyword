<template>
	<div class="h-full w-full mt-12">
		<div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
			<div class="w-full px-4 py-5 bg-white rounded-lg shadow">
				<div class="text-sm font-medium text-gray-500 truncate">
					Total users
				</div>
				<div class="mt-1 text-3xl font-semibold text-gray-900">
					12,00
				</div>
			</div>
			<div class="w-full px-4 py-5 bg-white rounded-lg shadow">
				<div class="text-sm font-medium text-gray-500 truncate">
					Total Profit
				</div>
				<div class="mt-1 text-3xl font-semibold text-gray-900">
					$ 450k
				</div>
			</div>
			<div class="w-full px-4 py-5 bg-white rounded-lg shadow">
				<div class="text-sm font-medium text-gray-500 truncate">
					Total Keywords
				</div>
				<div class="mt-1 text-3xl font-semibold text-gray-900">
					20k
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MainDashboard",
	data() {
		return {
			isOpen: true
		}
	},
}
</script>

<style scoped>

</style>