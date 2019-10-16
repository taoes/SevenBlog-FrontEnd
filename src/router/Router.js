import VueRouter from "vue-router";
import BaiKe from "@/components/BaiKe";
import Content from "@/components/Content";
import BlogList from "@/components/BlogList";
import DengYing from "@/components/DengYing";
import Home from "@/components/Home";
import Camera from "@/components/Camera";
import ArticleDetail from "@/components/blog/ArticleDetail";


var router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/book',
            component: Content
        },
        {
            path: '/user',
            component: BaiKe
        },
        {
            path: '/blog',
            component: BlogList
        }, {
            path: '/ying',
            component: DengYing
        }, {
            path: '/camera',
            component: Camera
        }, {
            path: '/article',
            component: ArticleDetail
        }
    ]
});

export default router;