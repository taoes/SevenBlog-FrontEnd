import axios from "axios";
import config from "../api/HttpConfig";


let {pictureGroup, list, update} = config.picture;

export default {
    state: {
        pictureList: null,
        pictureGroup: null
    },
    getters: {
        getPictureList: function (state) {
            return state.pictureList;
        },
        getPictureGroup: function (state) {
            return state.pictureGroup;
        }
    },
    actions: {
        updateDatePictureList: (context, page) => {
            let handle = (resp) => context.commit('setPictureList', resp.data);
            axios.get(list, {params: page}).then((resp) => handle(resp));
        },
        updatePictureGroup: function (context) {
            let handle = (resp) => context.commit('setPictureGroup', resp.data);
            axios.get(pictureGroup).then((resp) => handle(resp));
        },
        updateFileInfo: function (context, payload) {
            axios.patch(update + "/" + payload.fileId,payload);
        }


    },
    mutations: {
        setPictureList: (state, payload) => {
            state.pictureList = payload;
        },
        setPictureGroup: (state, payload) => {
            state.pictureGroup = payload;
        }
    }
}
;


