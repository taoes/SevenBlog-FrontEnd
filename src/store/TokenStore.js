

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
        }
    }
};


