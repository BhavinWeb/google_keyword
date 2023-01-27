<template>
	<div class="h-screen w-screen overflow-x-hidden">
		<div class="flex gap-x-4">
			<!--	Sidebar		-->

			<aside v-if="displayLayout" aria-label="Sidebar" class="w-64 overflow-y-hidden fixed">
				<div class="px-3 py-4 overflow-y-auto h-screen flex flex-col bg-gray-50 dark:bg-gray-800">
					<ul class="space-y-2">
						<li>
							<router-link :to="{name: 'NicheManage'}"
										 class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" :class="{'bg-gray-700': $route.name == 'NicheManage'}">
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
									 xmlns="http://www.w3.org/2000/svg">
									<path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" stroke-linecap="round" stroke-linejoin="round"
										  stroke-width="2"></path>
								</svg>
								<span class="ml-3">Niche</span>
							</router-link>
						</li>
						<li>
							<router-link :to="{name: 'TemplateManage'}"
										 class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"  :class="{'bg-gray-700': $route.name == 'TemplateManage'}">
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
									 xmlns="http://www.w3.org/2000/svg">
									<path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" stroke-linecap="round" stroke-linejoin="round"
										  stroke-width="2"></path>
								</svg>
								<span class="ml-3">Keyword Templates</span>
							</router-link>
						</li>
						<li>
							<router-link :to="{name: 'DatabaseSearchGoogle'}"
										 class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"  :class="{'bg-gray-700': $route.name == 'DatabaseSearchGoogle'}">
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
									 xmlns="http://www.w3.org/2000/svg">
									<path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" stroke-linecap="round" stroke-linejoin="round"
										  stroke-width="2"></path>
								</svg>
								<span class="ml-3">Google Keyword Research</span>
							</router-link>
						</li>
						<li>
							<router-link :to="{name: 'DatabaseSearchAhref'}"
										 class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"  :class="{'bg-gray-700': $route.name == 'DatabaseSearchAhref'}">
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
									 xmlns="http://www.w3.org/2000/svg">
									<path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" stroke-linecap="round" stroke-linejoin="round"
										  stroke-width="2"></path>
								</svg>
								<span class="ml-3">Ahref Keyword Research</span>
							</router-link>
						</li>
						<li>
							<router-link :to="{name: 'CitySearch'}"
										 class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"  :class="{'bg-gray-700': $route.name == 'CitySearch'}">
								<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5"
									 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round"
										  stroke-linejoin="round"></path>
									<path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" stroke-linecap="round"
										  stroke-linejoin="round"></path>
								</svg>
								<span class="ml-3">City Wise Search Result</span>
							</router-link>
						</li>

					</ul>
					<ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
						<li>
							<a class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
							   href="#" @click="userStores.logOut()">
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
									 xmlns="http://www.w3.org/2000/svg">
									<path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" stroke-linecap="round" stroke-linejoin="round"
										  stroke-width="2"></path>
								</svg>
								<span class="flex-1 ml-3 whitespace-nowrap">Log out</span>
							</a>
						</li>
					</ul>
					<div class="flex-grow"></div>
					<div id="dropdown-cta" class="p-4 mt-6 hidden rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
						<div class="flex items-center mb-3">
							<span
								class="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
							<button aria-label="Close"
									class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
									data-collapse-toggle="dropdown-cta" type="button">
								<span class="sr-only">Close</span>
								<svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
									 xmlns="http://www.w3.org/2000/svg">
									<path clip-rule="evenodd"
										  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										  fill-rule="evenodd"></path>
								</svg>
							</button>
						</div>
						<p class="mb-3 text-sm text-blue-900 dark:text-blue-400">
							<!--							Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.-->
							View Beta Futures
						</p>
						<a class="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
						   href="#">Turn Beta Futures Off<!--Turn new navigation off--></a>
					</div>
				</div>
			</aside>

			<!--	Content		-->
			<div class="w-full h-full mx-auto overflow-x-hidden" v-bind:class="{'ml-64 ' : displayLayout}">

				<router-view/>

			</div>
		</div>
	</div>
</template>

<script>
// Refresh Token: 1//0glDShvOw0bUqCgYIARAAGBASNwF-L9Ir37ZRfyt-xQCw44kDI206R42VL88FxLTadKBx6LVbgaQpAmCxSWOnHdkyM0whPffhMBY

import {userStore} from "@/store/auth";

export default {
	name: 'App',
	data() {
		return {
			displayLayout: true,
			isLoading: this.$isLoadingScreen,
			userStores: userStore()
		}
	},
	watch: {
		$route(to, from) {
			if (to.name == 'Auth' || to.name == 'false') {
				this.displayLayout = false;
			} else {
				if (!this.userStores.isLoggedIn) {
					this.$router.push({name: 'Auth'})
				}
				this.displayLayout = true;
			}
			if (from == '') {
				// this.$router.push({name: ''})
				console.log('a');
			}
		}
	},
	updated() {
		const recaptchaScript = document.createElement("script");
		recaptchaScript.setAttribute(
			"src",
			"https://unpkg.com/flowbite@1.6.0/dist/flowbite.min.js"
		);
		document.head.appendChild(recaptchaScript);
	},
	mounted() {

		const recaptchaScript = document.createElement("script");
		recaptchaScript.setAttribute(
			"src",
			"https://unpkg.com/flowbite@1.6.0/dist/flowbite.min.js"
		);
		document.head.appendChild(recaptchaScript);
	},
}
</script>

<style>
/*#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	//margin-top: 60px;
}*/
</style>
