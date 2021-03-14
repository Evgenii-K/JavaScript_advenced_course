import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: {},
        itemsOnPage: [],
    },
    mutations: {
        setData(state, payload) {
            state.data = payload.newData;
            state.itemsOnPage = Object.keys(payload.newData);
        },
    },
    getters: {
        getData: state => state.data,
        getFullPrice: state => {
            const keys = state.itemsOnPage;
            return keys.reduce((res, cur) => res + state.data[cur].price,0);
        }
    },
    actions: {},
});