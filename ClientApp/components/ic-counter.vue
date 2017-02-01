<template>
    <div>
        <h2>Counter</h2>
        <p>This is a simple example of a Vue.js 2 component.</p>
        <p>Current count: <strong>{{ currentCount }}</strong></p>
        <button @click="incrementCounter()">Increment</button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            // note: changing this line won't causes changes
            // with hot-reload because the reloaded component
            // preserves its current state and we are modifying
            // its initial state.
            currentCount: 0
        }
    },
    methods: {
        incrementCounter() {
            this.currentCount++;
        }
    }
}
</script>
