export default {
    state: {
        params: '',
        collapse: false,
        defaultActive: ['back']
    },
    getters: {},
    actions: {},
    mutations: {
        changeType(state, param) {
            state.params = param.params;
        }, changeCollapse(state) {
            state.collapse = !state.collapse;
        }
    }
};


