import axios from "axios";
import config from "../api/HttpConfig";

let {link} = config;

export default {
    state: {
        linkList: [{id:1},{id:2}]
    },
    getters: {
        getLinkList: function (state) {
            return state.linkList;
        }
    },
    actions: {
        // 访问github仓库数据
        updateLinkList: function (context) {
            let handle = (resp) => context.commit('setLinkList', resp.data);
            axios.get(link.list).then(handle);
        }

    },
    mutations: {
        setLinkList(state, payload) {
            state.linkList = payload;

        }
    }
}


