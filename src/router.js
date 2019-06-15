import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
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
        {
            path: '/cryptofolio',
            name: 'portfolio',
            component: () => import('./components/Portfolio')
        },
    ],
});
