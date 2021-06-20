<template>
  <div>
    <div class="container--cards">
      <section class="card card--game flip-in-left">
        <label for="remaining attempts" class="pr-2">
          Wrong guesses remaining:
        </label>
        <div id="remaining attempts">{{ attemptsLeft }}</div>
      </section>
      <section class="card card--game flip-in-left">
        <label for="guessed letters">
          Guessed letters:
        </label>
        <div class="container container--letters" id="guessed letters">
          <div
            v-for="letter in wrongGuesses || []"
            class="container--letter boxed"
            :key="letter">
            <span>{{ letter }}</span>
          </div>
        </div>
      </section>
    </div>
    <div class="grid" aria-live="polite">
      <div
        v-for="(word, index) in words"
        :key="index"
        v-bind:style="computedWordClass(word)"
        >
        <div
          v-for="(character, index) in word"
          :key="index"
          :class="character.specialCharacter ? 'container--letter' : 'container--letter underlined'">
          <div v-if="character.guessed" class="flip-in-left">
              {{ character.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from "vue";
import cloneDeep from "lodash/cloneDeep";
import fetchJoke from "../use/fetchJoke";

export default {
  props: {
    allowedGuesses: {
      type: Number,
      default: 5
    },
    gameInfo: {
      type: Object,
      default: () => ({})
    }
  },

  setup(props, { emit }) {
    const attempts = ref(0);
    const wrongGuesses = ref([]);
    const loading = ref(false)
    const joke = ref(null);
    const words = ref({});

     onMounted(() => {
      window.addEventListener("keydown", (e) => {
        handleLetterInput(String.fromCharCode(e.keyCode));
      });
      startNewGame()

    });

    async function startNewGame() {
      loading.value = true;
      await fetchJoke().then((res) => {
        words.value = res.results;
        joke.value = res.joke;
        loading.value = false;
        console.log(
          `#######################################################
          \n\nDon't you dare go cheat and check out that network tab\n*** DISSAPOINTED DAD FACE 😞😞😞 ***
          \n\n#######################################################`
        );
      });
    }

     function handleLetterInput(letterInput) {
      if (!validInput(letterInput)) return;
      let foundValue = false;
      words.value.forEach((word) => {
        word.forEach((letter) => {
          if (letter.value.toUpperCase() === letterInput) {
            letter.guessed = true;
            if (!foundValue) foundValue = true;
          }
        });
      });
      if (!foundValue) addToWrongGuesses(letterInput);

    }

    function validInput(letterInput) {
      const validLetters = /[a-zA-Z0-9]/;
      return validLetters.test(letterInput);
    }

    function addToWrongGuesses(letterInput) {
      if (wrongGuesses.value.includes(letterInput)) return;
      wrongGuesses.value.push(letterInput);
      attempts.value++
    }

    const attemptsLeft = computed(() => {
      return props.allowedGuesses - attempts.value;
    })

    function computedWordClass(letter) {
      return { "grid-column": `span ${letter.length}`, display: "flex" };
    }

    // END GAME

    watch(attempts, () => {
      if (attempts.value >= props.allowedGuesses) endGame(false)
    });

    watch(
      () => cloneDeep(words.value),
      (val) => {
        if (val.every((word) => word.every((letter) => letter.guessed))) endGame(true)
      }
    );

    function endGame(userWon) {
      emit('update:modelValue', { userWon: userWon, joke: joke.value })
    }

    return { attemptsLeft, computedWordClass, wrongGuesses, words }
  }
}
</script>

<style>

.grid {
  margin: 6rem 2rem;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(10, 6ch);
  grid-gap: 1rem 2rem;
  grid-auto-rows: 80%;
  place-content: start;
  width: 80%;
}

.container--letters {
  flex-direction: row;
}

.container--cards {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}

.container--letter {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3ch;
  height: 3ch;
  text-transform: uppercase;
  font-weight: bold;
}

.card--game {
  width: 50%;
  height: 5rem;
  margin: 0 2rem;
}

.underlined {
  border-bottom: solid var(--text-blue) 0.15rem;
  margin: 0 0.15rem;
}

.boxed {
  border: solid var(--text-blue) 0.1rem;
  -webkit-animation: flip-in-ver-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: flip-in-ver-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  margin-right: 0.2rem;
}

.flip-in-left {
  -webkit-animation: flip-in-ver-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: flip-in-ver-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes flip-in-ver-left {
  0% {
    -webkit-transform: rotateY(80deg);
    transform: rotateY(80deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
    opacity: 1;
  }
}
@keyframes flip-in-ver-left {
  0% {
    -webkit-transform: rotateY(80deg);
    transform: rotateY(80deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
    opacity: 1;
  }
}

@media screen and (min-width: 25rem) {
  .grid {
    margin: 3rem 2rem;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(13, 6ch);
    grid-gap: 0.3rem 1rem;
    grid-auto-rows: 90%;
  }
}

@media screen and (min-width: 45rem) {
  .container--cards {
    flex-direction: row;
    width: 90%;
  }
}

@media screen and (min-width: 75rem) {
  .grid {
    grid-template-columns: repeat(18, 1fr);
  }
}
</style>
