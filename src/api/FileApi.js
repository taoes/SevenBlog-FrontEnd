import axios from "axios";
import config from "./HttpConfig";

const addFileApi = {
    upload: function (formData, respFunc, errorFunc) {
        return axios({
            url: config.file.upload,
            method: 'post',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'},
        }).then((url) => {
            respFunc(url);
        }).catch((error) => {
            if (errorFunc) {
                errorFunc(error);
            }
        })
    }

};

export default addFileApi;
