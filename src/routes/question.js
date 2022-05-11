import '../App.css';
import React from 'react';
import { Button } from '@mui/material';
import QuizQuestionList from '../components/quizQuestion';
import {getAnswerMatrix} from '../components/quizQuestion';

export function getSuggestions(){
  var userAnswers = getAnswerMatrix();
  console.log("userAnswers", userAnswers);
  for (var i = 0; i < 3; i++){
    if (userAnswers[i].includes(1) == false){
      return alert("Some questions have not been filled out");
    }
  }
  //Add up
  var colSum = userAnswers.reduce((a, b) => a.map((j, i) => j + b[i]));
  console.log(colSum);

  //Make recomendations

  //redirect to the result page
  window.location.href = "/result";

}
const quiz = {
    "You're at the library. Which book do you check out?:": 
      [
        {"question": "Julia Child's cookbook 'Mastering the Art of French Cooking'", "category": "coffee"},
        {"question": "F Scott Fitzgerald's Swanky 'The Great Gatsby'", "category": "drinks"},
        {"question": "Karl Marx's 'The Communist Manifesto'", "category": "active"},
        {"question": "You don't, you only like to read books you buy", "category": "history"},
      ],
    "You're stranded on an island and can choose only one of these to bring with you, which one do you choose?":
    [
      {"question": "A moka pot, to make coffee of course", "category": "night"},
      {"question": "Your hiking boots, to enjoy the nature surrounding you", "category": "active"},
      {"question": "Some charcoal and a notebook, why not capture the pretty scene", "category": "music"},
      {"question": "An iPod and some headphones because music solves all problems", "category": "art"},
    ],
      "Your friend is hosting a dinner party. You bring:":
      [
        {"question": "A fresh apple pie from your favorite bakery", "category": "coffee"},
        {"question": "An interesting bottle of red wine", "category": "food"},
        {"question": "A bouquet of peonies", "category": "nature"},
        {"question": "A record of one of Maria Callas's opera performances", "category": "shopping"},
      ],
  }

export default function Question() {
  // console.log("answerMatrix");

  //   console.log(answerMatrix);
  //   console.log("answerMatrix2");

    return (
        <div className='centered' >
          <h1> Personality Quiz: </h1>
            <QuizQuestionList quiz={quiz} />
            {/* <Button onClick = {getSuggestions}>Finish the quiz</Button> */}
        </div>
    );
}