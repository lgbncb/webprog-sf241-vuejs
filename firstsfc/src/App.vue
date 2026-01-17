<template>
  <div id="main-app">
    <personal-profile />

    <footer class="paboritos-section">
      <h1 class="paboritos-title">MGA PABORITOS</h1>
      <div class="food-container">
        <food-item />
        <food-item2 />
      </div>
      <p class="midterm-footer">© 2026 WEBPROG Midterm Project | Lance Buncab - SF241</p>
    </footer>
  </div>
</template>

<style>
/* Global resets to fix the "big" appearance */
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

#main-app {
  width: 100%;
}

.paboritos-section {
  padding: 80px 20px;
  background-color: #ffffff;
  text-align: center;
  border-top: 5px solid #E50914;
}

.paboritos-title {
  font-family: 'Verdana', sans-serif;
  font-size: 48px;
  color: #111;
  margin-bottom: 40px;
}

.food-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.midterm-footer {
  margin-top: 50px;
  color: #777;
  font-size: 14px;
}
</style>