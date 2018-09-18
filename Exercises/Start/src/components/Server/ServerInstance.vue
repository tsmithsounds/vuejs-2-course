<template>
  <li
    @click="selectServer"
    class="list-group-item"
    style="cursor: pointer">
      Server #{{ glorp.id }} // Status: {{ glorp.status }}
  </li>
</template>

<script>
import { serverBus } from '../../main.js';

  export default {
    props: ['glorp'],
    methods: {
      selectServer() {
        serverBus.$emit('serverSelection', this.glorp)
      }
    }
  }
</script>

<style>

</style>
