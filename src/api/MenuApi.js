import axios from "axios";
import apiConfig from './HttpConfig'

var blogApiListApi = {

    // 获取菜单列表
    getMenuList: function (respFunc, errorFunc) {
        return axios.get(apiConfig.menu.list).then((resp) => {
            respFunc(resp);
        }).catch(error => {
            errorFunc(error)
        });
    }, getCategory: function (respFunc, errorFunc) {
        return axios.get(apiConfig.menu.category).then((resp) => {
            respFunc(resp);
        }).catch(error => {
            if (error) {
                errorFunc(error)
            }
        });
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
