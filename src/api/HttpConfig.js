import NProgress from 'nprogress'
import axios from 'axios'
import 'nprogress/nprogress.css'

// const BASE_URL = 'https://api.zhoutao123.com';
const BASE_URL = 'http://localhost:8080';


axios.defaults.timeout = 5000;
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


const config = {
    menu: {
        list: '/menu',
        category: '/category',
        categoryList: '/category/list'
    },
    blog: {
        list: '/blog',
        simpleList: '/blog/list',
        detail: '/blog/detail',
        updateOrCreate: '/blog'
    },
    comment: {
        add: '/comment',
        listByArticleId: '/comment'
    },
    github: {
        repos: '/github/repos'
    }, tag: {
        list: '/tag',
        update: '/tag'
    }, file: {
        upload: '/file/upload'
    }
};

export default config;
