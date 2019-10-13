import axios from "axios";
import apiConfig from './HttpConfig'

var blogApiListApi = {

    getMenuList: function (respFunc, errorFunc) {
        return axios.get(apiConfig.menu.list).then((resp) => {
            respFunc(resp);
        }).catch(error => {
            errorFunc(error)
        });
    }

}

export default blogApiListApi;