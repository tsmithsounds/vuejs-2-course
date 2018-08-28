<template>
    <div class="container">
      <my-header></my-header>
        <hr>
      <div class="row">
        <my-servers></my-servers>
        <my-server-status></my-server-status>
      </div>
        <hr>
      <my-footer></my-footer>
    </div>
</template>

<script>
  import Header from './Header.vue'
  import Footer from './Footer.vue'
  import Servers from './Servers.vue'
  import ServerStatus from './ServerStatus.vue'

  export default {
    components: {
        'my-header': Header,
        'my-footer': Footer,
        'my-servers': Servers,
        'my-server-status': ServerStatus
    }
  }
</script>

<style>

</style>
