import VueRouter from "vue-router";
import BaiKe from "@/components/BaiKe";

import BlogList from "@/components/BlogList";
import DengYing from "@/components/DengYing";
import Home from "@/components/home/Home";
import Camera from "@/components/camera/Camera";
import ArticleDetail from "@/components/blog/ArticleDetail";
import Note from "@/components/note/Note";
import AdminLogin from "@/components/backstage/AdminLogin";
import Admin from "@/components/backstage/admin/Admin";
import Article from "@/components/backstage/blog/article/Article";
import Category from "@/components/backstage/blog/category/Category";

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
};


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
        , {
            path: '/admin',
            component: Admin,
            children: [
                {
                    path: 'article',
                    component: Article
                }, {
                    path: 'category',
                    component: Category
                }
            ]
        }
        , {
            path: '/admin/login',
            component: AdminLogin
        }
    ]
});


router.afterEach((to, from) => {
    // console.log("路由：" + from.path + " => " + to.path)
});

export default router;
