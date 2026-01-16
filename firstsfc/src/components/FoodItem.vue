<template>
  <div class="chicken">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      name: 'Chicken Spaghetti, Large Coke Zero, Large Fries',
      message: 'I love ordering these in Jollibee'
    }
  }
};
</script>
 
<style> 
 .santol {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: rgba(180, 22, 22, 0.38);
  }
</style>

