import VueRouter from "vue-router";
import BaiKe from "@/components/BaiKe";

import BlogList from "@/components/BlogList";
import DengYing from "@/components/DengYing";
import Camera from "@/components/camera/Camera";
import ArticleDetail from "@/components/blog/ArticleDetail";
import Note from "@/components/note/Note";
import AdminLogin from "@/components/backstage/AdminLogin";
import adminRouter from "./AdminRouter";
import Index from "../components/index/Index";

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
};


export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/book',
            component: Note
        },
        {
            path: '/user',
            component: BaiKe
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogList,
        },
        {
            name: 'article',
            path: '/blog/article/:id',
            component: ArticleDetail
        }
        ,
        {
            path: '/ying',
            component: DengYing
        }, {
            path: '/camera',
            component: Camera
        },
        {
            name: 'login',
            path: '/login',
            component: AdminLogin
        },
        adminRouter
    ]
});

