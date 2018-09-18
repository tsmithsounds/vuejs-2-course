<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!blub">Select a server to update.</p>
        <p v-else>{{ blub.id }} // {{ blub.status }}</p>
        <button @click="resetStatus">Reset Server</button>
    </div>

</template>

<script>
import { serverBus } from '../../main.js';

  export default {
    data: function() {
      return {
        blub: null
      }
    },
    created() {
      serverBus.$on('serverSelection', (bleep) => {
        this.blub = bleep
      })
    },
    methods: {
      resetStatus() {
        this.blub.status = 'Normal'
      }
    }
  }
</script>

<style>

</style>
