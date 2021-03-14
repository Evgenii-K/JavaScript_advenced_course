import "../sass/style.scss";
import Vue from 'vue';
import App from '../Vue/App.vue';

import store from '../Vue/store/index.js';

new Vue ({
    el: 'main',
    template: '<App />',
    components: {
        App
    },
    store,
});