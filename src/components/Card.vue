<template>
  <div class="card card--speak-bubble fade-in-bottom">
    <slot></slot>
    <form
      role="form"
      aria-label="settings"
      aria-live="polite"
      class="container container--main text-entrance"
    >
      <div>
        <label for="guesses"> Maximum wrong guesses:</label>
        <div id="guesses" class="container container--horizontal">
          <button
            class=button--icon
            type="button"
            aria-label="decrease allowed guesses"
            :disabled="!allowedGuesses"
            @click="allowedGuesses--"
          >
            -
          </button>
          <p aria-label="allowed guesses">{{ allowedGuesses }}</p>
          <button
            class="button--icon"
            type="button"
            aria-label="increase allowed guesses"
            @click="allowedGuesses++"
          >
            +
          </button>
        </div>
      </div>
      <button type="button" aria-label="start game" @click="$emit('startGame')">
        New game
      </button>
    </form>
  </div>
</template>
<script>
import { usePropsWrapper } from "../utilities/propsWrapper";

export default {
  props: {
    modelValue: {
      type: Number,
      required: false,
    },
  },

  setup(props, { emit }) {
    const allowedGuesses = usePropsWrapper(props, emit, "modelValue");
    return { allowedGuesses };
  },
};
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  background-color: white;
  border-radius: 2%;
  color: var(--text-blue);
  padding: 1.5rem;
  box-shadow: 0.4rem 0.4rem 0.4rem 0.4rem rgb(6 59 179 / 35%);
}

.card--speak-bubble {
  width: 85%;
  min-height: 18rem;
}

.card--speak-bubble::before {
  content: "";
  position: absolute;
  border-radius: 2%;
  bottom: -3rem;
  right: 0;
  height: 5%;
  width: 25%;
  background-color: white;
  box-shadow: 0.4rem 0.4rem 0.4rem 0.4rem rgb(6 59 179 / 35%);
}
.card--speak-bubble::after {
  content: "";
  position: absolute;
  border-radius: 2%;
  bottom: -6rem;
  right: 0;
  height: 5%;
  width: 5%;
  background-color: white;
  box-shadow: 0.4rem 0.4rem 0.4rem 0.4rem rgb(6 59 179 / 35%);
}

.button--icon {
  width: 2rem;
  height: 2rem;
  color: var(--text-blue);
  border-style: none;
  border-radius: 50%;
  padding: 0.5em 0.9em;
}

.button--icon:hover {
  border: solid var(--text-blue) 0.15rem;
}

.fade-in-bottom {
  -webkit-animation: fade-in-bottom 1.2s cubic-bezier(0.39, 0.575, 0.565, 1)
    0.5s both;
  animation: fade-in-bottom 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 0.5s both;
}

@-webkit-keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateX(50px) translateY(50px);
    transform: translateX(50px) translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-bottom {
  0% {
    opacity: 0;
    -webkit-transform: translateX(50px) translateY(50px);
    transform: translateX(50px) translateY(50px);
  }
  100% {
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
}

@media screen and (min-width: 25rem) {

  .card--speak-bubble {
    width: 75%;
  }
}

@media screen and (min-width: 45rem) {

  .card--speak-bubble {
    width: 60%;
  }
}

@media screen and (min-width: 75rem) {

  .card--speak-bubble {
    width: 50%;
  }
}
</style>
