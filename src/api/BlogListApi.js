import axios from "axios";
import apiConfig from './HttpConfig'

const blogList = {
    getBlogList: function (pageNumber, pageSize, blogType, respFunc, errorFunc) {
        let param = {
            pageNumber,
            pageSize,
            blogType: blogType || ""
        };
        return axios.get(apiConfig.blog.list, {params: param}).then((resp) => {
            respFunc(resp);
        }).catch(error => {
            errorFunc(error)
        });
    },
    getBlogSimpleList: function (respFunc, errorFunc) {
        axios.get(apiConfig.blog.simpleList).then((resp) => {
            respFunc(resp)
        })
            .catch((error) => {
                if (errorFunc) {
                    respFunc(error)
                }
            });
    },
    getBlogDetail: function (blogId, respFunc, errorFunc) {
        return axios.get(apiConfig.blog.detail + "/" + blogId).then((resp) => {
            respFunc(resp);
        }).catch(error => {
            if (errorFunc) {
                errorFunc(error)
            }
        });
    },
    updateOrCreate: function (param, respFunc, errorFunc) {
        return axios.post(apiConfig.blog.updateOrCreate, param).then((resp) => {
            respFunc(resp);
        }).catch(error => {
            errorFunc(error)
        });
    }, getTypeCount(respFunc) {
        return axios.get(apiConfig.blog.count).then((resp) => {
            respFunc(resp);
        });
    }

};

export default blogList;
