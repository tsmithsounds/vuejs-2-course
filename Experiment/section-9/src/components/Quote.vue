<template>
  <div>
    <div class="title">
      <slot name="slotTitle">Title</slot>
    </div>
    <div class="content">
      <slot name="slotContent"></slot>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  div {
    padding: 50px;
    margin: 50px;
    border: 1px solid #ccc;
    text-align: center;
  }
  .title {
    text-decoration: underline;
  }
  .content {
    color: brown;
  }
</style>
