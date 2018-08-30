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
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Servers from './components/Servers.vue'
  import ServerStatus from './components/ServerStatus.vue'

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
