# Dad Joke Helper
Ever wanted to be surrounded by lame dad jokes all day long? Now you can!

The **Dad Joke Helper** is a simple game where the you need to guess which joke dad is trying to tell you. Simply set the number of maximum attempts and then use your keyboard to guess the letters in each word.

## FAQ

#### Why Dad Joke Helper? 

I wanted to do a small project for testing out Vue 3. I also love stupid jokes. So this was a match made in heaven.

#### How do you play?

You set the difficulty by selecting the maximum number of allowed guesses. Once the game has started, lines are displayed for each letter in the joke. You use your keyboard to guess the letters. You win once you've guessed all the letters. Unless you run out of guesses. Then you lose and disappoint dad.

#### Is it only letters? 

Mostly letters but there could be digits hidden in there as well! Other symbols (such as question marks and commas) are visible by default.

#### Can I play on mobile? 
Not yet but hopefully soon! ❤️

## Screenshots
<img width="1767" alt="Screenshot 2021-06-20 at 17 04 24" src="https://user-images.githubusercontent.com/33524936/122680506-c5272d00-d1ef-11eb-96bd-1f3b67926c1d.png">
<img width="1770" alt="Screenshot 2021-06-20 at 17 04 07" src="https://user-images.githubusercontent.com/33524936/122680509-c6f0f080-d1ef-11eb-8be1-63e488bd7702.png">
<img width="1757" alt="Screenshot 2021-06-20 at 17 03 41" src="https://user-images.githubusercontent.com/33524936/122680512-c8bab400-d1ef-11eb-9ddd-50325dba5ee6.png">


## Lessons learned & future improvements 

The aim of the project was to test out Vue 3 and its new composition API. There are a few things significantly different compared to Vue 2's options API, which made the project fun to explore.
This includes: 
- **Refs**: Using refs to trigger reactivity for data not being reactive by default.
- **Watchers**: The game relies on watchers to signal whether the user has won or lost the game. Watching for nested arrays required a deep copy of the property.
- **Composables**: Using composable methods for separating specific logic, particularly reusable logic. An example is the api call logic which was move out of the game component and into a separate file. The getters and setters to dynamically update model values across components were also moved to a dedicate file.   
  
### Improvements
- **Mobile**: I still need to improve the functionality on mobile devices. Until I get to that, I've placed a warning for users with small screen sizes instead of the start game menu. 
- **Composables**: It could be interesting to explore the further use of compsables in the game.


## Acknowledgements
The app relies on the wonderful I can haz dad joke API which has more horrible dad jokes than you could ever think of. No API key is needed:
 - [icanhazdadjoke](https://icanhazdadjoke.com/)
 
The dad illustration is provided by Open Peeps. Open Peeps is an illustration library which allows you to mix and match elements to create your own characters:   
 - [Open Peeps](https://www.openpeeps.com/)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
