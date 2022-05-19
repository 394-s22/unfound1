import '../App.css';
import React from 'react';
import { Button, Typography } from '@mui/material';
import QuizQuestionList from '../components/quizQuestion';
import { getAnswerMatrix } from '../components/quizQuestion';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const myTheme = createTheme({
  typography: {
      fontFamily: [
        'IBM Plex Mono',
        'Cosmic Octo Heavy'
      ].join(','),
    },
});


const categories = ['coffee', 'food', 'drinks', 'night', 'active', 'nature', 'history', 'music', 'shopping', 'art']

export function getSuggestions() {
  var userAnswers = getAnswerMatrix();
  console.log("userAnswers", userAnswers);

  //Add up
  var colSum = userAnswers.reduce((a, b) => a.map((j, i) => j + b[i]));
  console.log(colSum);

  //Make recomendations
  /* Sort colSum descendly and return an array of indices that 
  indicates the position of the sorted elements with respect to the original elements. */
  var resultIndex = Array.from(Array(colSum.length).keys()).sort((a, b) => colSum[a] > colSum[b] ? -1 : (colSum[b] > colSum[a]) | 0)
  const resultCat = Array(4).fill(null)
  for (let i = 0; i < 4; i++) {
    resultCat[i] = categories[resultIndex[i]]
  }

  //redirect to the result page
  window.location.href = "/result?resultCat=" + resultCat;

}
const quiz = {
  "Choose a drink":
    [
      { "question": "Oatmilk quartado", "category": "coffee" },
      { "question": "Blackberry fizz", "category": "drinks" },
      { "question": "Green goodness juice", "category": "active" },
      { "question": "Cinnamony Eggnog", "category": "history" },
    ],
  "The weather is immaculate this weekend. What do you plan to do?":
    [
      { "question": "Drive to the nearest park to build a campfire and go stargazing.", "category": "night" },
      { "question": "Set up a net by the beach to play volleyball and get tanned.", "category": "active" },
      { "question": "Grab your speaker and jam to your favorite songs on a lovely picnic.", "category": "music" },
      { "question": "Find a scenic location in the meadows and spend the afternoon doodling away on a sketchbook.", "category": "art" },
    ],
  "If you were to quit your job right now, what would you do?":
    [
      { "question": "Open your own bookstore cafe in your neighborhood.", "category": "coffee" },
      { "question": "Start an ASMR cooking channel.", "category": "food" },
      { "question": "Build a cozy, little hideout in the woods.", "category": "nature" },
      { "question": "Check out the entirety of your online shopping carts with your last paycheck.", "category": "shopping" },
    ],
  "Your best friend is visiting from out of town. What do you guys plan to do first?":
    [
      { "question": "Visit a rooftop bar overlooking the city for small bites and drinks.", "category": "drinks" },
      { "question": "Grab some take-out and hit a drive-in theater.", "category": "night" },
      { "question": "Buy a day pass at your local bouldering spot.", "category": "active" },
      { "question": "Hit up your favorite venue for open mic night.", "category": "music" },
    ],
  "You can travel anywhere in the world for one day. Where are you going?":
    [
      { "question": "Beirut", "category": "coffee" },
      { "question": "Patagonia", "category": "nature" },
      { "question": "Seoul", "category": "shopping" },
      { "question": "Chicago", "category": "art" },
    ],
  "You’re taking a long night train ride, and there’s only 4 open seats. Who do you sit next to?":
    [
      { "question": "Ruby. Pros: She looks nice and she might share some of the delicious cookies she packed. Con: You’ll still be hungry the entire ride.", "category": "food" },
      { "question": "Alessandro. Pros: He’ll chat with you during the ride and give you at least 4 club recommendations for your destination. Con: This seat has no view outside.", "category": "night" },
      { "question": "Mira. Pros: She’ll tell you about all of her travel adventures & you can swap hiking recommendations. Cons: There’s less space to put your things.", "category": "active" },
      { "question": "Alex. Pros: They’ll lend you one of their books to read during the ride. Cons: You won’t finish the book during the ride.", "category": "history" },
    ],
  "You're at the library. Which book do you check out?":
    [
      { "question": "Julia Child's cookbook 'Mastering the Art of French Cooking'", "category": "food" },
      { "question": "F Scott Fitzgerald's Swanky 'The Great Gatsby'", "category": "night" },
      { "question": "Karl Marx's 'The Communist Manifesto'", "category": "history" },
      { "question": "You don't, you only like to read books you buy", "category": "shopping" },
    ],
  "You're stranded on an island and can choose only one of these to bring with you, which one do you choose?":
    [
      { "question": "A moka pot, to make coffee of course", "category": "coffee" },
      { "question": "Your hiking boots, to enjoy the nature surrounding you", "category": "nature" },
      { "question": "Some charcoal and a notebook, why not capture the pretty scene", "category": "art" },
      { "question": "An iPod and some headphones because music solves all problems", "category": "music" },
    ],
  "Your friend is hosting a dinner party. You bring:":
    [
      { "question": "A fresh apple pie from your favorite bakery", "category": "food" },
      { "question": "An interesting bottle of red wine", "category": "drinks" },
      { "question": "A bouquet of peonies", "category": "shopping" },
      { "question": "A record of one of Maria Callas's opera performances", "category": "music" },
    ],
  "You only have $5 in your pocket. How do you spend it?":
    [
      { "question": "Buy a beer at chill at the local dive bar", "category": "drinks" },
      { "question": "Buy some bread to feed the ducks at the nearby pond", "category": "nature" },
      { "question": "Buy a ticket to your local architecture museum", "category": "history" },
      { "question": "Buy a cool-looking postcard from a street vendor", "category": "art" },
    ],
}

export default function Question() {
  // console.log("answerMatrix");

  //   console.log(answerMatrix);
  //   console.log("answerMatrix2");

  return (
    <div  className='quizQuestions'>
      <ThemeProvider theme={myTheme}>

      <Typography variant='h3' sx={{color:"black", padding:5, font:"IBM Plex Mono Light"}}>
         Quiz Questions
       </Typography>
      <QuizQuestionList quiz={quiz} />
      </ThemeProvider>

    </div>
  );
}