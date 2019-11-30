import axios from "axios";
import config from "../api/HttpConfig";
import da from "element-ui/src/locale/lang/da";


let {admin, blog} = config;

export default {
    state: {
        username: null,
        password: null,
        userInfo: null,
        error: {times: 0, info: null}
    },
    getters: {
        getInfo: function (state) {
            return state.userInfo;
        }, getError: function (stete) {
            return stete.error;
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
        },
        adminLogin: function (context, payload) {

            let {username, password} = payload;

            let {successFunc, errorFunc} = payload;

            let handle = (resp) => context.commit('login', {data: resp.data, successFunc});


            axios.post(admin.login, {username, password}).then(handle).catch((resp) => {
                errorFunc(resp);
            });
        }

    },
    mutations: {
        login(state, {data, successFunc}) {
            localStorage.setItem("token", data);
            successFunc()
        }
    }
}


