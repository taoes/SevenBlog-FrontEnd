import axios from "axios";
import apiConfig from '@/api/HttpConfig'

var reposApi = {

    getAllRepos: function (respFunc, errorFunc) {
        return axios.get(apiConfig.github.repos+"?page=1&per_page=5").then((resp) => {
            respFunc(resp);
        }).catch(error => {
            errorFunc(error)
        });
    }

}

export default reposApi;