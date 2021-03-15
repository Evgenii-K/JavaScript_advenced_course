import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: {},
        itemsOnPage: [],
        itemInCart: {},
        keyItemCart: [],
    },
    mutations: {
        setData(state, payload) {
            state.data = payload.newData;
            state.itemsOnPage = Object.keys(payload.newData);
        },
        setToCart(state, payload) {
            if (!state.itemInCart[payload]) {
                state.itemInCart[payload] = { "id": payload, "count": 1 };
              } else {
                state.itemInCart[payload].count++;
              }
            state.keyItemCart = Object.keys(state.itemInCart);
        },
        reduceInCart(state, payload) {
            if (state.itemInCart[payload].count > 1) {
                state.itemInCart[payload].count--;
            }
        },
        removeFromCart(state, payload) {
            delete state.itemInCart[payload];
        },
    },
    getters: {
        getData: state => state.data,
        getItemOfPage: state => state.itemsOnPage,
        getFullPrice: state => {
            const keys = state.itemsOnPage;
            return keys.reduce((res, cur) => res + state.data[cur].price,0);
        },
        getKeyItemCart: state => state.keyItemCart,
        getItemInCart: state => state.itemInCart,
    },
    actions: {
        requestData ({ commit }, page) {
            fetch(`/database/data${page}.json`)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    commit('setData', { newData: res });
                });
        },
        addToCart ({commit}, id) {
            commit('setToCart', id);
        },
        reduceCart ({commit}, id) {
            commit('reduceInCart', id);
        },
        removeCart ({commit}, id) {
            commit('removeFromCart', id)
        }
    },
});