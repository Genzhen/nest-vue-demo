import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router.js';
import App from './App.vue';

Vue.use(VueRouter);

new Vue({
    template: '<App/>',
    router,
    components: { App }
}).$mount('#app');
