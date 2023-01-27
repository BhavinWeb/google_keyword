import {defineStore} from "pinia";
import axios from "axios";

export const userStore = defineStore("user", {
    state: () => ({
        user: null,
        isLoggedIn: false,
    }),
    persist: true,

    actions: {
        async signIn(loginUrl, username, password) {
            await axios.post(loginUrl, {
                username: username,
                password: password
            }).then(response => {
                var data = response.data
                this.isLoggedIn = data.isLogin
                if (data.isLogin) {
                    this.user = data.data
                } else {
                    alert(data.message)
                }
            }).catch(e => {
                console.log(e);
            }).then(() => {
            })
        },
        async logOut() {
            this.user = null;
            this.isLoggedIn = false;
        }
    },
});