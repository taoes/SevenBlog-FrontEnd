import Vue from 'vue'
import App from './App.vue'
import store from './store/Store.js'
import router from './router/Router'
import VueRouter from 'vue-router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

Vue.config.productionTip = false;
Vue.use(VueRouter);


new Vue({
    render: h => h(App),
    router: router,
    store,
}).$mount('#app');
