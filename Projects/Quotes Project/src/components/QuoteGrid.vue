<template>
  <div class="row">
    <app-quote v-for="(quote, qIndex) in quotes" @click.native="deleteQuote(qIndex)">{{ quote }} </app-quote>
  </div>
</template>

<script>
  import Quote from './Quote.vue';

  export default {
    components: {
      "appQuote": Quote
    },
    props: ['quotes'],
    methods: {
      deleteQuote(qIndex) {
        this.$emit('quoteDeleted', qIndex);
      }
    }
  }

</script>

<style scoped>
</style>
