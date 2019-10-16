import axios from "axios";
import apiConfig from './HttpConfig'

var menuApi = {

    getBlogList: function (pageNumber, pageSize, respFunc, errorFunc) {

        var param = {
            pageNumber: pageNumber,
            pageSize: pageSize
        };
        return axios.get(apiConfig.blog.list, {params: param}).then((resp) => {
            respFunc(resp);
        }).catch(error => {
            errorFunc(error)
        });
    },
    getBlogDetail: function (blogId, respFunc, errorFunc) {
        return axios.get(apiConfig.blog.detail).then((resp) => {
            respFunc(resp);
        }).catch(error => {
            errorFunc(error)
        });
    }

}

export default menuApi;