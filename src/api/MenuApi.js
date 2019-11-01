import axios from "axios";
import apiConfig from './HttpConfig'

var blogApiListApi = {

    // 获取菜单列表
    getMenuList: function (respFunc, errorFunc) {
        axios.get(apiConfig.menu.list).then((resp) => {this.$store.commit('setAppMenu', resp.data);});
    }, getCategory: function (respFunc, errorFunc) {
        return axios.get(apiConfig.menu.category).then((resp) => {respFunc(resp);});
    }, getCategoryList: function (respFunc, errorFunc) {
        return axios.get(apiConfig.menu.categoryList).then((resp) => {
            respFunc(resp);
        }).catch(error => {
            if (error) {
                errorFunc(error)
            }
        });
    }
};

export default blogApiListApi;
