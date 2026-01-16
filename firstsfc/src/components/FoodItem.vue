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
      name: 'Chicken, Spaghetti, and Coke',
      message: 'My Jollibee favorites'
    }
  }
};
</script>

<style>
.chicken {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: rgba(199, 29, 29, 0.38);
  }

</style>