import axios from "axios";
import config from "../api/HttpConfig";


let {blog} = config;

export default {
    state: {
        recommendArticle: null,
    },
    getters: {
        getRecommendArticle: function (state) {
            return state.recommendArticle;
        }
    },
    actions: {
        updateRecommendArticle: function (context) {
            let handle = (resp) => context.commit('setRecommendArticle', resp.data);
            axios.get(blog.list).then((resp) => handle(resp));
        }
    },
    mutations: {
        setRecommendArticle: function (state, payload) {
            state.recommendArticle = payload;
        }
    }
};


