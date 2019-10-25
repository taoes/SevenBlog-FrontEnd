export default {
    state: {
        active: 'article'
    },
    getters: {},
    actions: {},
    mutations: {
        changeType(state, param) {
            state.params = param.params;
        },
        changeCollapse(state) {
            state.collapse = !state.collapse;

        },changeAdminMenuActive(stete,active){
            stete.active =active
        }
    }
};


