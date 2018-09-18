<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <server-instance
            v-for="server in servers"
            :glorp="server">
          </server-instance>
        </ul>
    </div>
</template>

<script>
import ServerInstance from './ServerInstance.vue';

  export default {
    components: {
      'server-instance': ServerInstance
    },
    data: function() {
      return {
        servers: [
          { id: 1, status: 'Normal'},
          { id: 2, status: 'Critical'},
          { id: 3, status: 'Unknown'},
          { id: 4, status: 'Normal'},
        ]
      }
    }
  }
</script>

<style>

</style>
