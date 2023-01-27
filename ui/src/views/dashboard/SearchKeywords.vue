<template>
	<div class="w-full h-full mt-12">
		<div class="w-full">
			<div class="flex space-x-4 ">
				<input
					id="keyword"
					v-model="keyword"
					class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					placeholder="Keywords"
					type="text"
				/>
				<input
					id="location"
					v-model="locationId"
					class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					placeholder="Select Google Location"
					type="text"
				/>
				<button class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						@click="searchKeyword">
					Search
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "SearchKeywords",
	data() {
		return {
			keyword: '',
			locationId: ''
		}
	},
	methods: {
		searchKeyword() {
			console.log('keyword: ', this.keyword, ',location: ', this.locationId)
			axios.post(this.$baseURL + '/SearchKeyword', {
				keywords: this.keyword,
				locationId: this.locationId,
				refresh_token: '1//0glDShvOw0bUqCgYIARAAGBASNwF-L9Ir37ZRfyt-xQCw44kDI206R42VL88FxLTadKBx6LVbgaQpAmCxSWOnHdkyM0whPffhMBY',
				customer_id: 1672901050
			}, {
				headers: {
					'Content-type': 'application/json',
					"Access-Control-Allow-Origin": "*",
				}
			})
				.then(response => {
					// this.info = response.data
					console.log(response.data)
					console.log(response.data.error)
				})
				.catch(error => console.log(error))

		}
	}
}
</script>

<style scoped>

</style>