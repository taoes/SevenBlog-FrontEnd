import Admin from "@/components/backstage/admin/Admin";
import Article from "@/components/backstage/blog/article/Article";
import ArticleEdit from "../components/backstage/blog/article/ArticleEdit";
import Category from '../components/backstage/blog/category/Category';


let adminRouter = {

    path: '/admin',
    component: Admin,
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
                path: 'category',
                component: Category
            }
        ]

};

export default adminRouter;
