<template>
  <aside :class="app">
    <router-view />
  </aside>
</template>

<script></script>

<style>
aside {
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
}

/* Responsive font and padding for smaller screens */
@media (max-width: 1300px) {
  #app {
    font-size: 15px;
    padding: 0 2vw;
  }
  aside {
    padding: 0;
  }
  nav {
    padding: 15px;
  }
}

body {
  background: none !important;
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.attendance-bg {
  min-height: 100vh;
  width: 100vw;
  background: url("https://i.pinimg.com/736x/5d/28/06/5d2806f9404075d2e8ad32cd7aab6767.jpg")
    no-repeat center center;
  background-size: cover;
}

.employment-view {
  min-height: 100vh;
  width: 100vw;
  height: 100%;
  background: url("https://i.pinimg.com/736x/36/93/34/369334c10e0f3b890c90859362d513bd.jpg")
    no-repeat center center;
  background-size: cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
