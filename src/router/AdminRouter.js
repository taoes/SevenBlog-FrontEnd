import Admin from "@/components/backstage/admin/Admin";
import Article from "@/components/backstage/blog/article/Article";
import ArticleEdit from "../components/backstage/blog/article/ArticleEdit";
import Category from '../components/backstage/blog/category/Category';
import TagList from "../components/backstage/blog/tag/TagList";
import Home from "../components/home/Home";


let adminRouter = {

    path: '/admin',
    component: Home,
    children:
        [
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
            }
        ]

};

export default adminRouter;
