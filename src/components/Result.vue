<template>
    <div>
        <!-- Direct getting data from store -->
        <p>Counter is: {{ $store.state.counter }}</p>
        <!-- Using getter -->
        <p>Counter*2 is: {{ doubleCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        // creating map getters
        computed: {
            ...mapGetters([
                    'doubleCounter'
            ])
        }
    }
</script>