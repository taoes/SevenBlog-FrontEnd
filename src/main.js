import Vue from 'vue'
import App from './App.vue'
import store from './store/Store.js'
import router from './router/Router'
import VueRouter from 'vue-router'
import VCharts from 'v-charts'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor);
Vue.use(ElementUI);
Vue.use(VCharts);

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Viewer)

new Vue({
    render: h => h(App),
    router: router,
    store,
}).$mount('#app');
