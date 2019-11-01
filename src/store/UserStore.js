import axios from "axios";
import config from "../api/HttpConfig";


let {github, blog} = config;

export default {
    state: {
        username: null,
        password: null,
        userInfo: null
    },
    getters: {
        getInfo: function (state) {
            return state.userInfo;
        }
    },
    actions: {
        // 访问github仓库数据
        userLogin: function (context, payload) {
            context.commit('login', payload)
        },
        // 更新博客分类数据
        updateBlogCategoryList: function (context) {
            let handle = (resp) => context.commit('set1BlogCategoryList', resp.data);
            axios.get(blog.count).then(handle);
        }

    },
    mutations: {
        login(state, {username, password}) {
            if (username === "zhoutao" && password === '123456') {
                state.userInfo = username;
            }
        }
    }
}


