import axios from "axios";

export default async function fetchJoke() {
  const DAD_JOKE_API_URL = `https://icanhazdadjoke.com/`;
  let results = [];
  let joke

  function createLetterDetails(words) {
    const specialCharacterRegex = /[?!.\-,":’']/g;
    let results = [];
    words.forEach((word) => {
      const wordWithDetails = [];
      word.split("").forEach((char) => {
        const detailedLetter = {
          value: char,
          guessed: specialCharacterRegex.test(char) ? true : false, // Special characters are set to true because they will never be guessed by the user
          specialCharacter: specialCharacterRegex.test(char) ? true : false, // Special character are defined so they can be styled differently
        };
        wordWithDetails.push(detailedLetter);
      });
      results.push(wordWithDetails);
    });
    return results;
  }

  try {
    await axios
      .get(DAD_JOKE_API_URL, {
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      })
      .then(function(response) {
        results = createLetterDetails(response.data.joke.split(" "))
        joke = response.data.joke
      });
  } catch (err) {
    console.error(err);
  }
  return { results, joke }
}
