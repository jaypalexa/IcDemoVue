<template>
    <div>
        <img class="logo" src="./../assets/logo.png" />
        <div class="bar">
            <h1>{{ msg }}</h1>
        </div>
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
          msg: 'Bar!'
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        color: #42b983;
    }
</style>
