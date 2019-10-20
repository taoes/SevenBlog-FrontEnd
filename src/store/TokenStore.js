export default {
    state: {
        value: null
    },
    getters: {},
    actions: {},
    mutations: {
        signOut: function (state) {
            state.value = null
        },
        setToken(state, token) {
            state.value = token;
        },
        cleanToken(state) {
            state = null;
        }
    }
};


