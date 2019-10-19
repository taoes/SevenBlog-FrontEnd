import Vuex from 'vuex'
import Vue from 'vue'

import SideStore from './SizeStore'
import MenuStore from './MenuStore'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user: SideStore,
        blogMenu: MenuStore
    }
});

export default store;
