import it from "element-ui/src/locale/lang/it";


export const TOKEN_NAME = 'token';


export default {
    state: {
        value: null
    },
    getters: {},
    actions: {},
    mutations: {
        signOut: function (state) {
            state.value = null;
            localStorage.removeItem(TOKEN_NAME);
            console.log("清除token后的数据：", localStorage.getItem(TOKEN_NAME))
        },
        setToken(state, token) {
            state.value = token;
            localStorage.setItem(TOKEN_NAME, token)
        },
        cleanToken(state) {
            state = null;
            localStorage.removeItem(TOKEN_NAME);
        }, getToken: function () {
            return localStorage.getItem(TOKEN_NAME);
        }, existToken: function () {
            let token = localStorage.getItem(TOKEN_NAME);
            if (token !== null && token !== undefined && token !== '') {
                return true;
            }
            return false;
        }
    }
};


