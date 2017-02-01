import Vue from 'vue'
//import App from './App'
import IcNavMenu from './components/ic-nav-menu'
import IcHome from './components/ic-home'
import IcCounter from './components/ic-counter'
import IcFetchData from './components/ic-fetch-data'
import IcFoo from './components/ic-foo'
import IcBar from './components/ic-bar'

import VueRouter from 'vue-router'
//import VueResource from 'vue-resource'

// We want to apply VueResource and VueRouter
// to our Vue instance
//Vue.use(VueResource);
Vue.use(VueRouter);

// 1. Define route components.
// These can be imported from other files
//const Foo = { template: '<div>foo</div>' };
//const Bar = { template: '<div>bar</div>' };

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [ 
	{ path: '/', component: IcHome },
	{ path: '/home', component: IcHome },
	{ path: '/counter', component: IcCounter },
	{ path: '/fetch-data', component: IcFetchData },
    { path: '/foo', component: IcFoo },
	{ path: '/bar', component: IcBar }
];
// { path: '/', component: App }
// { path: '/', component: App },
// { path: '/hello', component: Hello },
// { path: '*', redirect: '/hello'},
// { path: '/foo', component: Foo },
// { path: '/bar', component: Bar }

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.

/* eslint-disable no-new */
const app = new Vue({
    router: router, 
    components: {
        // <my-component> will only be available in parent's template
        'ic-nav-menu': IcNavMenu
    }
}).$mount('#app');

