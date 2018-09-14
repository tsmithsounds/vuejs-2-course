<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>
          User Name: {{ name }}
        </p>
        <p>User Age: {{ age }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>

import { eventBus } from '../main.js';

  export default {
    props: {
      name: String,
      age: Number
    },
    methods: {
      resetName() {
        this.name = 'Tony';
        this.$emit('nameWasReset', this.name);
      }
    },
    created() {
      eventBus.$on('ageWasChanged', (age) => {
        this.age = age
      })
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
