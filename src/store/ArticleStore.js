import axios from "axios";
import config from "../api/HttpConfig";


let {blog} = config;

export default {
    state: {
        recommendArticle: null,
        hotArticle: []
    },
    getters: {
        getRecommendArticle: function (state) {
            return state.recommendArticle;
        },
        getHotArticle: function (state) {
            return state.hotArticle;
        }
    },
    actions: {
        updateRecommendArticle: function (context) {
            let handle = (resp) => context.commit('setRecommendArticle', resp.data);
            axios.get(blog.list).then((resp) => handle(resp));
        },
        updateHotArticle: function (context) {
            let handle = (resp) => context.commit('setHotArticle', resp.data);
            axios.get(blog.hot).then((resp) => handle(resp));
        }
    },
    mutations: {
        setRecommendArticle: function (state, payload) {
            state.recommendArticle = payload;
        }, setHotArticle: function (state, payload) {
            console.log(payload)
            state.hotArticle = payload;
        }
    }
};


