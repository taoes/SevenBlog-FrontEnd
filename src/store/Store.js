import Vuex from 'vuex'
import Vue from 'vue'

import SideStore from './SizeStore'
import MenuStore from './MenuStore'
import TokenStore from "./TokenStore";
import AdminMenuStore from './AdminMenuStore'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user: SideStore,
        token: TokenStore,
        blogMenu: MenuStore,
        adminMenu: AdminMenuStore
    }
});

export default store;
