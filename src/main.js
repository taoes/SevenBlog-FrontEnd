import Vue from 'vue'
import App from './App.vue'
import store from './store/Store.js'
import router from './router/Router'
import VueRouter from 'vue-router'
import ViewUI from 'view-design';
import VCharts from 'v-charts'
import 'view-design/dist/styles/iview.css';


import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor);
Vue.use(ViewUI);
Vue.use(VCharts);

Vue.config.productionTip = false;
Vue.use(VueRouter);


new Vue({
    render: h => h(App),
    router: router,
    store,
}).$mount('#app');
