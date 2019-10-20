export default {
    state: {
        params: '',
        defaultActive: 'back'
    },
    getters: {},
    actions: {},
    mutations: {
        changeType(state, param) {
            state.params = param.params;
        }
    }
};


