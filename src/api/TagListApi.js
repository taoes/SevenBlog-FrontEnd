import axios from "axios";
import apiConfig from './HttpConfig'

let tagApi = {
    tagList: function (respFunc, errorFunc) {
        return axios.get(apiConfig.tag.list).then((resp) => {
            respFunc(resp);
        }).catch(error => {
            errorFunc(error)
        });
    },
    update: function (param, respFunc, errorFunc) {
        let url = apiConfig.tag.update + "/" + param.id;
        return axios.patch(url, param).then((resp) => {
            respFunc(resp);
        }).catch(error => {
            errorFunc(error)
        });
    }
};

export default tagApi;
