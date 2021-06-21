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
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap");

:root {
  --text-white: #f0f0f0;
  --bg-green-primary: rgb(86, 251, 152);
  --text-shadow-blue: #3b82f5;
  --text-grey: rgba(0, 0, 0, 0.2);
  --text-blue: #145acc;
  --text-multiplier: 1;
}

body {
  background: linear-gradient(90deg, var(--bg-green-primary) 0% ,rgba(49, 242, 172, 1) 20%, rgba(31, 175, 255, 1) 68%, rgba(43, 76, 255, 1) 99%) fixed;
  position: relative;
}

main {
  width: 100vw;
}

p {
  font-size: calc(0.6rem * var(--text-multiplier));
  letter-spacing: 0.1rem;
  line-height: 1.6;
}

h1 {
  font-size: calc(2rem * var(--text-multiplier));
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: -0.4rem 0.4rem 0 var(--text-shadow-blue);
  color: var(--text-white);
}

h2 {
  font-size: calc(1.2rem * var(--text-multiplier));
  font-weight: bold;
}

h3 {
  font-size: calc(0.9rem * var(--text-multiplier));
  margin-bottom: 0.1rem;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 20ch;
  color: var(--text-blue);
  padding: 0.5rem 1.5rem;
  border-radius: 5%;
  border-style: none;
  border: solid var(--text-blue) 0.1rem;
}

button:hover {
  font-weight: bold;
  border: solid var(--text-blue) 0.15rem;
}

#app {
  height: 100vh;
  width: 100vw;
  padding: 2rem;
  font-family: "Rubik", sans-serif;
  color: var(--text-blue);

}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
}

.container--main {
  flex-direction: column;
}

@media screen and (min-width: 25rem) {
  :root {
    --text-multiplier: 1;
  }

  #app {
    padding: 0.4rem;
    height: 100vh;
  }
}

@media screen and (min-width: 45rem) {
  :root {
    --text-multiplier: 1.2;
  }
}

@media screen and (min-width: 75rem) {
  :root {
    --text-multiplier: 1.4;
  }
}

@media screen and (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
</style>
