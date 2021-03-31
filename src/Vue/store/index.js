import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: {},
        itemsOnPage: [],
        itemInCart: {},
        keyItemCart: [],
        buttonShow: true,
    },
    mutations: {
        setData(state, payload) {
            state.data = { ...state.data, ...payload.newData };
            state.itemsOnPage.push(...Object.keys(payload.newData));
        },
        loadCart(state, payload) {
            state.itemInCart = payload;
            state.keyItemCart = Object.keys(state.itemInCart);
        },
        setToCart(state, id) {
            if (!state.itemInCart[id]) {
                const name = state.data[id].name,
                      price = state.data[id].price;
                state.itemInCart[id] = { "id": id, "name": name, "price": price, "count": 1 };
              } else {
                state.itemInCart[id].count++;
              }
            state.keyItemCart = Object.keys(state.itemInCart);
        },
        reduceInCart(state, payload) {
            if (state.itemInCart[payload].count > 1) {
                state.itemInCart[payload].count--;
            }
            state.keyItemCart = Object.keys(state.itemInCart);
        },
        removeFromCart(state, payload) {
            delete state.itemInCart[payload];
            state.keyItemCart = Object.keys(state.itemInCart);
        },
        removeButtonShowMore(state) {
            state.buttonShow = false;
        }
    },
    getters: {
        getData: state => state.data,
        getItemOfPage: state => state.itemsOnPage,
        getFullPrice: state => {
            const keys = state.keyItemCart;
            return keys.reduce((res, cur) => res + (state.itemInCart[cur].price * state.itemInCart[cur].count),0);
        },
        getKeyItemCart: state => state.keyItemCart,
        getItemInCart: state => state.itemInCart,
        getButtonShow: state => state.buttonShow,
    },
    actions: {
        requestData ({ commit }, page) {
            fetch(`/database/${page}`, {
                method: "GET",
            }) 
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    commit('setData', { newData: res });
                })
                .catch( err => {
                    if (err) {
                        commit('removeButtonShowMore');
                    }
                });
        },
        addToCart ({commit, dispatch}, id) {
            commit('setToCart', id);
            dispatch('updateCartList');
        },
        reduceCart ({commit, dispatch}, id) {
            commit('reduceInCart', id);
            dispatch('updateCartList');
        },
        removeCart ({commit, dispatch}, id) {
            commit('removeFromCart', id);
            dispatch('updateCartList');
        },
        updateCartList({state}) {
            const data = state.itemInCart;
            fetch('/cartlist', {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        },
        requestCartList({commit}) {
            fetch('/cartlist', {
                method: "GET",
            }) 
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    commit('loadCart', res);
                });
        },
    },
});