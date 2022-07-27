<template>
  <div id="app">
    <h1>Calculadora</h1>
    <MainCalculator />
  </div>
</template>

<script>
import MainCalculator from "./main/MainCalculator.vue";
export default {
  name: "App",
  components: { MainCalculator },
};
</script>

<style>
@font-face {
  font-family: "Robotomono";
  src: url("./fonts/RobotoMono-Thin.ttf");
}

* {
  font-family: "RobotoMono", monospace;
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #fff;
  background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
}
</style>
