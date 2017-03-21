<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
        <hr>

        <!-- using actions -->
        <button class="btn btn-primary" @click="asyncIncrement">Async Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement">Async Decrement</button>
        <hr>
        
        <!-- using actions with parameters -->
        <button class="btn btn-primary" @click="incrementBy(10)">Increment By 10</button>
        <hr>

        <!-- Using two-way binding -->
        <label>Set Counter value:</label>
        <input v-model="counter">

    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
    /* --- Direct manipulation with store --- */

        // methods: {
        //     increment() {
        //         this.$store.state.counter++;
        //     },
        //     decrement() {
        //         this.$store.state.counter--;
        //     }
        // }
        
    /* --- Using mutations for manipulating with store --- */

        // Direct calls
        // methods: {
        //     increment() {
        //         this.$store.commit('increment');
        //     },
        //     decrement() {
        //         this.$store.commit('decrement');
        //     }
        // }

        // Using mapMutations and mapActions
        methods: {
            ...mapMutations(['increment', 'decrement']),
            ...mapActions(['asyncIncrement', 'asyncDecrement', 'incrementBy'])
        },

    /* --- Using Two-Way-Binding v-model --- */

        computed: {
            counter: {
                get() {
                    return this.$store.getters.counter;
                },
                set(value) {
                    this.$store.dispatch('setCounter', value);
                }
            }
        }
        
    }
</script>