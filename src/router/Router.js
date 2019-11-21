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


const router = new VueRouter({
    routes: [
        {
            path: '/',
            meta: {
                title: '首页'
            },
            component: Index
        },
        {
            path: '/book',
            meta: {
                title: '学习笔记'
            },
            component: Note
        },
        {
            path: '/user',
            meta: {
                title: '百科'
            },
            component: BaiKe
        },
        {
            path: '/blog',
            name: 'blog',
            meta: {
                title: '技术博客'
            },
            component: BlogList,
        },
        {
            name: 'article',
            meta: {
                title: '博文详情'
            },
            path: '/blog/article/:id',
            component: ArticleDetail
        }
        ,
        {
            path: '/ying',
            meta: {
                title: '影子不长'
            },
            component: DengYing
        }, {
            path: '/camera',
            meta: {
                title: '时光流影'
            },
            component: Camera
        },
        {
            name: 'login',
            path: '/login',
            meta: {
                title: '登录后台'
            },
            component: AdminLogin
        },
        adminRouter
    ]
});


router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? to.meta.title + " ☘️ 燕归来兮" : "燕归来兮";
    next()
});
export default router;

