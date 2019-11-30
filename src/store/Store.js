import Vuex from 'vuex'
import Vue from 'vue'

import SideStore from './SizeStore'
import MenuStore from './MenuStore'
import TokenStore from "./TokenStore";
import AdminMenuStore from './AdminMenuStore'
import MarkdownStore from "./MarkdownStore";
import HomeStore from "./HomeStore";
import AccessStore from "./AccessStore";
import ArticleStore from "./ArticleStore";
import UserStore from "./UserStore";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user: SideStore,
        token: TokenStore,
        menu: MenuStore,
        home: HomeStore,
        access: AccessStore,
        blog: ArticleStore,
        adminMenu: AdminMenuStore,
        markdown: MarkdownStore,
        userStore: UserStore
    }
});

export default store;
