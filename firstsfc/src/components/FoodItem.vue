<template>
  <div class="Chicken">
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
  .Chicken {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: light red;
  }
</style>

<template>
  <div class="Sinigang">
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
  .Sinigang { 
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: light yellow;
  }
</style>