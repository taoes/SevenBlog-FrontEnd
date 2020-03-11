import axios from "axios";
import config from "../api/HttpConfig";


let {github} = config;

export default {
    state: {
        githubAddress: 'https://github.com/taoes',
        docAddress: 'https://www.yuque.com/tao_book',
        githubRepos: []
    },
    getters: {
        getGithubRepos: function (state) {
            return state.githubRepos;
        }, getGithubAddress: function (state) {
            return state.githubAddress;
        }, getDocAddress: function (state) {
            return state.docAddress;
        }
    },
    actions: {
        updateGithubRepos: function (context, param) {
            let handle = (resp) => context.commit('setGithubRepos', resp.data);
            axios.get(github.repos, {params: {size: 6}}).then((resp) => handle(resp));
        }
    },
    mutations: {
        setGithubRepos: function (state, payload) {
            state.githubRepos = payload;
        }
    }
};


