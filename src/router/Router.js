import VueRouter from "vue-router";
import User from "@/components/User";
import Content from "@/components/Content";
import BlogList from "@/components/BlogList";
import DengYing from "@/components/DengYing";
import Home from "@/components/Home";


var router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Content
        },
        {
            path: '/user',
            component: User
        },
        {
            path: '/blog',
            component: BlogList
        }, {
            path: '/deng_ying',
            component: DengYing
        },
    ]
});

export default router;