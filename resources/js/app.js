/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

////Import Component
import Users from './components/Users.vue';
import Food from './components/Food.vue';
import Home from './components/Home.vue';

require('./bootstrap');

window.Vue = require('vue');

const routes =[
	{ path: '/users', component: Users},
	{ path: '/food', component: Food},
	{ path: '/', component: Home},
];


const router = new VueRouter({
	routes
});
Vue.use(VueRouter);


	

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */



const app = new Vue({
	router,
    el: '#app',
});
