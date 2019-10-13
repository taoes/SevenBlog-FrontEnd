import axios from "axios";
import apiConfig from './HttpConfig'

var menuApi = {

    getBlogList: function (pageNumber, respFunc, errorFunc) {

        var param = {
            pageNumber: pageNumber,
            pageSize: 10
        }
        return axios.get(apiConfig.blog.list, {params: param}).then((resp) => {
            respFunc(resp);
        }).catch(error => {
            errorFunc(error)
        });
    }

}

export default menuApi;