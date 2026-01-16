<template>
  <div class="sinigang">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Sinigang and Tilapia',
      message: 'I like sinigang, tilapia every Sunday'
    }
  }
};
</script>

<style>
  .sinigang {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: rgba(212, 170, 78, 0.38);
  }

</style>
