import VueRouter from "vue-router";
import BaiKe from "@/components/BaiKe";

import BlogList from "@/components/BlogList";
import DengYing from "@/components/DengYing";
import Home from "@/components/home/Home";
import Camera from "@/components/Camera";
import ArticleDetail from "@/components/blog/ArticleDetail";
import Note from "@/components/note/Note";


var router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
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
            component: BlogList
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
        }
    ]
});


router.afterEach((to, from) => {
    console.log("路由：" + from.path + " => " + to.path)
});

export default router;