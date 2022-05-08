import '../App.css';
import React from 'react';
import { Button } from '@mui/material';
import QuizQuestionList from '../components/quizQuestion';


const quiz = {
    "I feel most energetic and focused:": 
      [
        "In the morning",
        "During the afternoon and early evening",
        "Late at night"
      ],
    "When I walk, I tend to do it:":
      [
        "Fairly fast, with long steps",
        "Fairly fast, with small steps",
        "Less fast, head up, looking the world in the face",
        "Less fast, head down",
        "Very slowly"
      ],
      "When you speak to people, you tend to:":
      [
        "Your knees bent, with your legs neatly side by side",
        "Your legs crossed",
        "Your legs stretched out or straight",
        "One leg curled under you"
      ]
  }

export default function Question() {
    console.log(Object.values(quiz))
    return (
        <div className='centered' >
          <h1> Personality Quiz: </h1>
            <QuizQuestionList quiz={quiz} />
            <Button href="/result">Finish the quiz</Button>
        </div>
    );
}