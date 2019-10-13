import Vuex from 'vuex'
import Vue from 'vue'

import SideStore from './SizeStore'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user: SideStore
    }
});

export default store;
