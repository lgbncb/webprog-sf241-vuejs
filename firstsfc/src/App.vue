<template>
  <personal-profile />

  <div class="paboritos-container">
    <h1 class="paboritos-title">MGA PABORITOS</h1>
    <div class="food-items-flex">
      <food-item />
      <food-item2 />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
}

/* Styles for the Paboritos section */
.paboritos-container {
  padding: 50px;
  background-color: #fff; 
  text-align: center;
}

.paboritos-title {
  font-family: 'Verdana', sans-serif;
  font-size: 36px;
  margin-bottom: 30px;
  color: #111;
}

.food-items-flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
</style>