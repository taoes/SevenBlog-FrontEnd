import axios from "axios";
import config from "../api/HttpConfig";
import da from "element-ui/src/locale/lang/da";

let {github, blog, access} = config;

export default {
    state: {
        githubRepoList: null,
        blogCategoryRate: null,
        accessInfo: null
    },
    getters: {
        getRepoList: function (state) {
            return state.githubRepoList;
        },
        getAccessInfo: function (state) {
            if (!state.accessInfo) {
                return null
            }
            return {columns: ['name', 'value'], rows: state.accessInfo}
        },
        getBlogCategoryRate: function (state) {
            if (!state.blogCategoryRate) {
                return null
            }
            return {columns: ['name', 'value'], rows: state.blogCategoryRate}
        }
    },
    actions: {
        // 访问github仓库数据
        updateGithubRepoList: function (context, size) {
            let params = size;
            let handle = (resp) => context.commit('setRepoList', resp.data);
            axios.get(github.repos, {params}).then(handle);
        },
        // 更新博客分类数据
        updateBlogCategoryList: function (context) {
            let handle = (resp) => context.commit('set1BlogCategoryList', resp.data);
            axios.get(blog.count).then(handle);
        }, // 更新博客访问速度
        updateAccessInfo: function (context) {
            let handle = (resp) => context.commit('setAccessInfoList', resp.data);
            axios.get(access.count).then(handle);
        }

    },
    mutations: {
        changeType(state, param) {
            state.params = param.params;
        },
        changeCollapse(state) {
            state.collapse = !state.collapse;
        }, changeAdminMenuActive: function (state, active) {
            state.active = active
        },
        // 更新Github仓库列表
        setRepoList: function (state, githubRepoList) {
            state.githubRepoList = githubRepoList;
        },
        // 更新目录比例数据
        set1BlogCategoryList: function (state, data) {
            state.blogCategoryRate = data;
        },// 设置访问者信息
        setAccessInfoList: function (state, data) {
            state.accessInfo = data;
        }
    }
}


