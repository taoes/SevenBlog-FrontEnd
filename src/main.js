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


import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(solid);
fontawesome.library.add(regular);
fontawesome.library.add(brands);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(mavonEditor);
Vue.use(ElementUI);
Vue.use(VCharts);
// 引入

// 全局注入
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Viewer);

import SlideOut from '@hyjiacan/vue-slideout'
import '@hyjiacan/vue-slideout/lib/slideout.css'

// 引入 SlideOut 组件，并设置组件默认值
Vue.use(SlideOut, {
    title: "燕归来兮",
    // 在此处填写默认的属性值
    dock:'right'
});

new Vue({
    render: h => h(App),
    router: router,
    store,
}).$mount('#app');
