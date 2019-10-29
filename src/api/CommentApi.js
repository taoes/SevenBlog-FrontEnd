import axios from "axios";
import apiConfig from './HttpConfig'

const commentApi = {
    addNewComment: function (param, respFunc, errorFunc) {
        return axios.post(apiConfig.comment.add, param).then((resp) => {
            respFunc(resp);
        }).catch(error => {
            if (errorFunc) {
                errorFunc(error);
            }
        });
    }, getComment: function (articleIndex, respFunc, errorFunc) {
        let param = {
            articleId: articleIndex
        };


        return axios.get(apiConfig.comment.add, {params: param}).then((resp) => {
            respFunc(resp);
        }).catch(error => {
            if (errorFunc) {
                errorFunc(error);
            }
        });

    }

};

export default commentApi;
