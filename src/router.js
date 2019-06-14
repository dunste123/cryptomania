import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: '/',
    linkExactActiveClass: 'active',
    // watch: (to, from) => {},
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/current-prices',
            name: 'current',
            component: () => import('./components/CurrentPrices')
        },
        {
            path: '/news',
            name: 'news',
            component: () => import('./components/CryptoNews')
        },
    ],
});
