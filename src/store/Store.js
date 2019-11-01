import Vuex from 'vuex'
import Vue from 'vue'

import SideStore from './SizeStore'
import MenuStore from './MenuStore'
import TokenStore from "./TokenStore";
import AdminMenuStore from './AdminMenuStore'
import MarkdownStore from "./MarkdownStore";
import HomeStore from "./HomeStore";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user: SideStore,
        token: TokenStore,
        menu: MenuStore,
        home:HomeStore,
        adminMenu: AdminMenuStore,
        markdown: MarkdownStore
    }
});

export default store;
