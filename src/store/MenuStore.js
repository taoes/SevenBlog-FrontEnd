import axios from "axios";
import config from "../api/HttpConfig";


let {menu} = config;

export default {
    state: {
        params: '',
        collapse: false,
        blogMenu: null,
        defaultActive: ['back'],
        appMenu: null,

    },
    getters: {
        getAppMenu: function (state) {
            return state.appMenu;
        }, getBlogMenu: function (state) {
            return state.blogMenu;
        }
    },
    actions: {
        // 异步获取菜单
        updateAppMenu: function (context) {
            let handle = (resp) => context.commit('setAppMenu', resp.data);
            axios.get(menu.list).then(handle);
        },
        // 异步获取博客菜单
        updateBlogMenu: function (context) {
            let handle = (resp) => context.commit('setBlogMenu', resp.data);
            axios.get(menu.category).then(handle);
        }
    },
    mutations: {
        changeType: function (state, param) {
            state.params = param.params;
        }, changeCollapse: function (state) {
            state.collapse = !state.collapse;
        },
        // 更新APP的菜单列表
        setAppMenu: function (state, appMenu) {
            state.appMenu = appMenu;
        },
        // 更新Blog菜单列表
        setBlogMenu: function (state, blogMenu) {
            state.blogMenu = blogMenu;
        }
    }
};


