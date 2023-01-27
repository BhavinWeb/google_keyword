<template>
	<div>
<!--		<button @click="doGLogin">Login</button>-->
		<GoogleLogin :callback="callback" prompt/>
	</div>
</template>

<script>
// import {googleSdkLoaded} from "vue3-google-login";
import { decodeCredential } from 'vue3-google-login'

export default {
	name: "GLogin",
	methods: {
		doGLogin() {
			// googleSdkLoaded((google) => {
			// 	google.accounts.oauth2.initCodeClient({
			// 		client_id: '449219610142-5msb0dblb47vbhogu7k6fhld9cm1ui3m.apps.googleusercontent.com',
			// 		scope: 'email profile openid',
			// 		callback: (response) => {
			// 			console.log("Handle the response", response)
			// 		}
			// 	}).requestCode()
			// })
		},
		callback (response) {
			console.log("Handle the response", response)
			const userData = decodeCredential(response.credential)
			console.log("Handle the userData", userData)
		}
	}
// 	 secret = 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
// 	1//0glDShvOw0bUqCgYIARAAGBASNwF-L9Ir37ZRfyt-xQCw44kDI206R42VL88FxLTadKBx6LVbgaQpAmCxSWOnHdkyM0whPffhMBY
}
</script>

<style scoped>

</style>