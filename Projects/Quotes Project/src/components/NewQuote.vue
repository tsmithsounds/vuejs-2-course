<template>
  <div class="row">
    <div class="col">
      <form>
        <div class="form-group">
          <label>Quote</label>
          <textarea class="form-control" rows="3" v-model="quote"></textarea>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" @click.prevent="createNewQuote">Add Quote</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      quote: ''
    }
  },
  methods: {
    createNewQuote() {
      this.$emit('quoteAdded', this.quote);
      this.quote = '';
    }
  }
}
</script>

<style scoped>
</style>
