<template>
  <main role="main" aria-labelledby="Dad joke helper">
    <div class="container container--main">
      <div v-if="showInstructions">
        <h1>Dad Joke Helper</h1>
        <p class="subheading">
          Help dad tell the best jokes mankind has ever heard
        </p>
      </div>
      <card
        v-if="!gameRunning"
        v-model="allowedGuesses"
        @startGame="handleStartGame"
      >
        <slot>
          <section
            v-if="showInstructions"
            role="region"
            aria-labelledby="instructions"
            aria-live="polite"
            class="text-entrance"
          >
            <h2 id="instructions">How to play</h2>
            <p>
              You will recieve a sentence where all the letters have been
              replaced with blank spaces. Guess the correct letters in the joke
              by using your keyboard. You win by guessing all the letters before
              running out of wrong guesses.
            </p>
          </section>

          <div v-else aria-live="assertive">
            <h2>
              {{ gameDetails.userWon ? "Yaaay! You won!" : "Oh no, you lost!" }}
            </h2>
            <p v-if="gameDetails.userWon">Dad's so proud of you. You're like, his favourite child.</p>
            <div id="highlighted">
              <h3 id="joke">Dad's joke:</h3>
              <p aria-labelledby="joke">{{ gameDetails.joke }}</p>
            </div>
          </div>
        </slot>
      </card>
      <img
        class="image--wrapper"
        loading="lazy"
        src="../assets/normalDad.png"
        alt="A picture of a smiling dad with a coffee cup"
        style="transform: scale(-1,1)"
      />
    </div>
    <game v-if="gameRunning"
      v-model="gameDetails"
      :allowed-guesses="allowedGuesses"/>
  </main>
</template>

<script>
import { ref, watch } from "vue";
import Card from "./Card";
import Game from "./Game"

export default {
  components: { Card, Game },
  setup() {
    const allowedGuesses = ref(5);
    const gameRunning = ref(false);
    const showInstructions = ref(true);
    const gameDetails = ref({})

    function handleStartGame () {
      gameRunning.value = true
      showInstructions.value = false
    }

    watch(gameDetails, () => {
      if (gameDetails.value) gameRunning.value = false
    });


    return {
      allowedGuesses,
      gameRunning,
      gameDetails,
      handleStartGame,
      showInstructions
    };
  },
};
</script>

<style>
.subheading {
  font-size: calc(1.2em * var(--text-multiplier));
  color: var(--text-white);
  font-weight: bold;
  text-shadow: 0.2rem 0.2rem 0 var(--text-grey);
}

#highlighted {
  border: solid 0.3rem rgba(49, 242, 172, 0.4);
  padding: 1rem;
  border-radius: 0.5rem;
}

.container--horizontal {
  flex-direction: row;
  width: 90%;
}

.image--wrapper {
  position: fixed;
  bottom: -2rem;
  right: 0;
  width: 14rem;
  height: 18rem;
}

.text-entrance {
  -webkit-animation: fade-in 1s ease-in-out 1.2s both;
  animation: fade-in 1s ease-in-out 1.2s both;
}

.fade-in {
  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 1.2s both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (min-width: 25rem) {
  .image--wrapper {
   width: 16rem;
    height: 20rem;
  }
}

@media screen and (min-width: 45rem) {
  .image--wrapper {
    width: 17rem;
    height: 21rem;
  }
}

@media screen and (min-width: 75rem) {
  .image--wrapper {
    width: 20rem;
    height: 24rem;
  }
}
</style>
