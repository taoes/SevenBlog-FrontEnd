import Admin from "@/components/backstage/admin/Admin";
import Article from "@/components/backstage/blog/article/Article";
import ArticleEdit from "../components/backstage/blog/article/ArticleEdit";
import Category from '../components/backstage/blog/category/Category';
import TagList from "../components/backstage/blog/tag/TagList";
import System from "../components/backstage/system/System";
import Home from "../components/home/Home";
import Picture from "../components/backstage/picture/Picture";


let adminRouter = {

    path: '/admin',
    component: Admin,
    children:
        [
            {
                name: 'index',
                path: 'index',
                component: Home
            },
            {
                name: 'article',
                path: 'article',
                component: Article
            },
            {
                name: 'articleEdit',
                path: 'article/edit/:id',
                component: ArticleEdit
            },
            {
                name: 'Category',
                path: 'category',
                component: Category
            },
            {
                path: 'tag',
                name: 'tagManagement',
                component: TagList
            },
            {
                path: 'system',
                component: System
            },
            {
                path: 'picture',
                component: Picture
            }
        ]

};

export default adminRouter;
