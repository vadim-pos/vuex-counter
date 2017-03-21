import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },

    getters: {
        counter(state) {
            return state.counter;
        },
        doubleCounter(state) {
            return state.counter * 2;
        }
    },

    mutations: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        incrementBy(state, payload) {
            state.counter += payload;
        },
        setCounter(state, payload) {
            state.counter = payload;
        }
    },

    actions: {
        asyncIncrement(context) {
            setTimeout(() => {
                context.commit('increment');
            }, 1000);
        },
        asyncDecrement(context) {
            setTimeout(() => {
                context.commit('decrement');
            }, 1000);
        },
        incrementBy(context, payload) {
            context.commit('incrementBy', payload);
        },
        setCounter({ commit }, payload) {
            commit('setCounter', payload);
        }
    }
});