import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },

    getters: {
        doubleCounter(state) {
            return state.counter * 2;
        }
    },

    mutations: {
        increment(state, payload = 1) {
            state.counter += payload;
        },
        decrement(state) {
            state.counter--;
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
            context.commit('increment', payload);
        }
    }
});