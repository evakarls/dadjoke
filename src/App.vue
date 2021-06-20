<template>
  <DadJoke />
</template>

<script>
import DadJoke from "./components/DadJoke.vue";

export default {
  name: "App",
  components: {
    DadJoke,
  },
};
</script>

<style>
:root {
  --text-white: #f0f0f0;
  --bg-green-primary: rgb(86, 251, 152);
  --text-shadow-blue: #3b82f5;
  --text-grey: rgba(0, 0, 0, 0.2);
  --text-blue: #145acc;
  --text-multiplier: 1;
}

#app {
  height: 100vh;
  width: 100vw;
  padding: 2rem;
  font-family: "Rubik", sans-serif;
}

body {
  background: linear-gradient(
      90deg,
      var(--bg-green-primary) 0%,
      rgba(49, 242, 172, 1) 20%,
      rgba(31, 175, 255, 1) 68%,
      rgba(43, 76, 255, 1) 99%
    )
    fixed;
  position: relative;
}

main {
  width: 100vw;
}

h1 {
  font-size: calc(2em * var(--text-multiplier));
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: -0.4rem 0.4rem 0 var(--text-shadow-blue);
  color: var(--text-white);
}

p {
  font-size: calc(0.8em * var(--text-multiplier));
  color: var(--text-blue);
}

p,
label {
  font-size: calc(0.8em * var(--text-multiplier));
  letter-spacing: 0.1rem;
  line-height: 1.6;
}

h3 {
  font-size: calc(1em * var(--text-multiplier));
  color: var(--text-blue);
  margin-bottom: 1.2rem;
}

h2 {
  font-size: calc(1.2em * var(--text-multiplier));
  color: var(--text-blue);
  font-weight: bold;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
/*
@media screen and (min-width: 75em) {
  :root {
    --text-multiplier: 1.8;
  }
}

@media screen and (min-width: 48em) {
  :root {
    --text-multiplier: 1.4;
  }
}

@media screen and (max-width: 20em) {
  :root {
    --text-multiplier: 1;
  }
} */
</style>
