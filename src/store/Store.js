import Vuex from 'vuex'
import Vue from 'vue'

import SideStore from './SizeStore'
import MenuStore from './MenuStore'
import TokenStore from "./TokenStore";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user: SideStore,
        token: TokenStore,
        blogMenu: MenuStore
    }
});

export default store;
