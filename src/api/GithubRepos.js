import axios from "axios";
import apiConfig from '@/api/HttpConfig'

var reposApi = {

    getAllRepos: function (size, respFunc, errorFunc) {
        return axios.get(apiConfig.github.repos, {params: {size: size}}).then((resp) => {
            respFunc(resp);
        }).catch(error => {
            errorFunc(error)
        });
    }

}

export default reposApi;
