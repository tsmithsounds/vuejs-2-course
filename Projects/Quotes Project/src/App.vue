<template>
    <div class="container">
      <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
      <new-quote @quoteAdded="newQuote"></new-quote>
      <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
      <div class="row">
        <div class="col text-center">
          <div class="alert alert-info">
            Click on a quote to delete it
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid.vue';
  import NewQuote from './components/NewQuote.vue';
  import Header from './components/Header.vue';

  export default {
    components: {
      "appQuoteGrid": QuoteGrid,
      "newQuote": NewQuote,
      "appHeader": Header
    },
    data: function() {
      return {
        quotes: [
          'Test quote'
        ],
        maxQuotes: 10,
      }
    },
    methods: {
      newQuote(quote) {
        if (this.quotes.length >= this.maxQuotes) {
          return alert('Delete quotes first!');
        }
        this.quotes.push(quote);
      },
      deleteQuote(qIndex) {
        this.quotes.splice(qIndex, 1);
      }
    }
    }
</script>

<style>
</style>
