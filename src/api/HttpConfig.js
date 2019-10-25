import NProgress from 'nprogress'
import axios from 'axios'
import 'nprogress/nprogress.css'

// const BASE_URL = "https://api.zhoutao123.com";
const BASE_URL = "http://localhost:8080";
const GITHUB_BASE_URL = "https://api.github.com/users/zhou-seven";


axios.defaults.timeout = 5000
axios.defaults.withCredentials = true;
axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use((config) => {
    // 请求开始，蓝色过渡滚动条开始出现
    NProgress.start();
    return config;
}, (error) => {
    return Promise.reject(error);
});


axios.interceptors.response.use((response) => {
    // 请求结束，蓝色过渡滚动条消失
    setTimeout(() => NProgress.done(), 2000);
    return response;
}, (error) => {
    NProgress.done();
    return Promise.reject(error);
});


var config = {
    menu: {
        list: "/menu"
    },
    blog: {
        list: "/blog",
        detail: "/blog/detail"
    },
    github: {
        repos: "/github/repos"
    }, tag: {
        list: "/tag",
        update: "/tag"
    }
};

export default config;
