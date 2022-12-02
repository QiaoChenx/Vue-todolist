import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import demo from './demo';
export default new Vuex.Store({
    modules: {
        demo
    }
})