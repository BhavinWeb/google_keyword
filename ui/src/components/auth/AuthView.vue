<template>
	<div>
		<div class="w-screen h-screen">
			<section class="h-screen ">
				<div class="px-6 h-full text-gray-800">
					<div
						class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
					>
						<div
							class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
						>
							<img
								src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
								class="w-full"
								alt="Sample image"
							/>
						</div>
						<div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
							<form>
								<div class="flex flex-row items-center justify-center">
									<button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
										<svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
											<path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
										</svg>
										Sign in with Google
									</button>
								</div>

								<div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
									<p class="text-center font-semibold mx-4 mb-0">Or</p>
								</div>

								<!-- Email input -->
								<div class="mb-6">
									<input
										v-model="username" type="text"
										class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										id="exampleFormControlInput2"
										placeholder="Email address"
									/>
								</div>

								<!-- Password input -->
								<div class="mb-6">
									<input
										v-model="password" type="password"
										class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										id="exampleFormControlInput2"
										placeholder="Password"
									/>
								</div>

								<div class="flex justify-between items-center mb-6">
									<div class="flex items-start">
										<div class="flex items-center h-5">
											<input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50  cursor-pointer focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
										</div>
										<label for="remember" class="ml-2 text-sm form-check-label inline-block text-gray-800  cursor-pointer">Remember me</label>
									</div>
									<a href="javascript:void(0)" class="text-gray-800">Forgot password?</a>
								</div>

								<div class="text-center lg:text-left">
									<button type="button" @click="doLogin" class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Login</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import {userStore} from "@/store/auth";

export default {
	name: "AuthView",
	// setup() {
	// 	const userStores = userStore();
	// 	return userStores;
	// },
	data() {
		return {
			username: '',
			password: '',
			userStores: userStore()
		}
	},
	methods: {
		async doLogin() {
			if (this.username !== '' && this.password !== '') {
				await this.userStores.signIn(this.$baseURL + "/login", this.username, this.password);
				if (this.userStores.isLoggedIn) {
					this.$router.push({name: 'DatabaseSearchGoogle'})
				}
			} else {
				alert('please provide credentials')
			}
		}
	}
}
</script>

<style scoped>

</style>