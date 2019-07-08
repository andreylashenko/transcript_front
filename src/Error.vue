<template>
  <div class="mt-5 notFound">

  <h1 >404 Not Found</h1>
    <router-link
      class="btn btn-info"
      tag="button"
      :to="{name: 'contact-table'}">
      <span>На главную</span>
    </router-link>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  .notFound {
    color: red;
    text-align: center;
  }
</style>
