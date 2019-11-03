import axios from "axios";
import config from "../api/HttpConfig";


let {access} = config;

export default {
    state: {},
    getters: {},
    actions: {
        // 异步获取菜单
        addAccessInfo: function (context, payLoad) {
            axios.post(access.add, payLoad).then(r => {
            });
        }
    },
    mutations: {}
};


