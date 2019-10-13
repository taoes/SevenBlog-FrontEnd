export default {
    state: {
        sideWith: 200,
        collapse: false, name: 'BN'
    },
    getters: {},
    actions: {},
    mutations: {
        toggleCollapse(state) {
            state.collapse = !state.collapse
            if (state.collapse) {
                state.sideWith = 60
            } else {
                state.sideWith = 200
            }
        }
    }
};


