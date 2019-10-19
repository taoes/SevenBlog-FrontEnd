import axios from "axios";
import apiConfig from './HttpConfig'

var menuApi = {

    getBlogList: function (pageNumber, pageSize, blogType, respFunc, errorFunc) {

        var param = {
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
    getBlogDetail: function (blogId, respFunc, errorFunc) {
        console.log("查询blogId=" + blogId + "\t的文章详情");


        return axios.get(apiConfig.blog.detail + "/" + blogId).then((resp) => {
            respFunc(resp);
        }).catch(error => {
            errorFunc(error)
        });
    }

};

export default menuApi;
