<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <button @click="selectedComponent = 'appNew'">New</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <component :is="selectedComponent"></component>
        <!-- <appQuote>
          <h2 slot="slotTitle">The Quote</h2>
          <p slot="slotContent">Here's my awesome quote.</p>
        </appQuote> -->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue';
import Author from './components/Author.vue';
import New from './components/New.vue';

export default {
  data: function() {
    return {
      selectedComponent: 'appQuote'
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
}
</script>

<style>

</style>
