<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>User Age: {{ age }}</p>
        <button @click="changeAge">Edit Age</button>
    </div>
</template>

<script>

import { eventBus } from '../main.js'

  export default {
    props: ['age'],
    methods: {
      changeAge() {
        this.age = 31;
        // this.$emit('ageWasChanged', this.age);
        // eventBus.$emit('ageWasChanged', this.age);
        eventBus.changeAge(this.age);
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
