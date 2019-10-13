import VueRouter from "vue-router";
import User from "@/components/User";
import Content from "@/components/Content";

var router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: Content
        },
        {
            path: '/user',
            component: User
        },
    ]
});

export default router;