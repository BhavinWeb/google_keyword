import {createRouter, createWebHistory} from "vue-router"
// import AuthView from "@/components/auth/AuthView.vue";
import Auth from "@/views/auth/Auth.vue";
import SearchDatabase from "@/views/dashboard/SearchDatabase.vue";
import ManageNiche from "@/views/niche/ManageNiche.vue";
import ManageTemplates from "@/views/niche/ManageTemplates.vue";
import ManageTemplateKeyword from "@/views/niche/ManageTemplateKeyword.vue";
import CitySearch from "@/views/dashboard/CitySearch.vue";
import AhrefKeywordTemplate from "@/views/dashboard/AhrefKeywordTemplate.vue";

const routes = [
    // {
    //     path: '/',
    //     name: 'Dashboard',
    //     component: AuthView
    // },
    {
        path: '/auth',
        name: 'Auth',
        component: Auth
    },
    // {
    //     path: '/authLogin',
    //     name: 'AuthLogin',
    //     component: GLogin
    // },
    // {
    //     path: '/dashboard',
    //     name: 'Dashboard',
    //     component: MainDashboard
    // },
    // {
    //     path: '/keywords/search',
    //     name: 'KeywordsSearch',
    //     component: SearchKeywords
    // },
    {
        path: '/database/search/google',
        name: 'DatabaseSearchGoogle',
        component: SearchDatabase
    },
    {
        path: '/database/search/ahref',
        name: 'DatabaseSearchAhref',
        component: AhrefKeywordTemplate
    },
    {
        path: '/city/search',
        name: 'CitySearch',
        component: CitySearch
    },
    {
        path: '/manage/niche',
        name: 'NicheManage',
        component: ManageNiche
    },
    {
        path: '/manage/templates',
        name: 'TemplateManage',
        component: ManageTemplates
    },
    {
        path: '/template/:id',
        name: 'TemplateKeyword',
        component: ManageTemplateKeyword
    },

]

// Create Vue Router Object
const router = new createRouter({
    history: createWebHistory(),
    routes
    // base: process.env.BASE_URL,
})

// router.beforeEach(async (to) => {
//     // clear alert on route change
//     // redirect to login page if not logged in and trying to access a restricted page
//     const publicPages = ['login'];
//     const authRequired = !publicPages.includes(to.path);
//     const authStore = userStore();
//
//     if (authRequired && !authStore.isLoggedIn) {
//         authStore.returnUrl = to.fullPath;
//         return '/auth';
//     }
// });

export default router