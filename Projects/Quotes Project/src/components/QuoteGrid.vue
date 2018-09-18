<template>
  <div class="row">
    <appQuote v-for="quote in quotes">{{ quote }}</appQuote>
  </div>
</template>

<script>
  import Quote from './Quote.vue';

  export default {
    components: {
      "appQuote": Quote
    },
    props: ['quotes']
  }

</script>

<style scoped>
</style>
