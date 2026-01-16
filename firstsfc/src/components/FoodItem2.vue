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
      name: 'Sinigang, Fried Tilapia, Coke Zero',
      message: 'Favorite Sunday Lunch Meal'
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
    background-color: lightgreen;
  } 
</style>