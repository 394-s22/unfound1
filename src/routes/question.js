import '../App.css';
import React from 'react';
import { Typography } from '@mui/material';
import QuizQuestionList from '../components/quizQuestion';
import { getAnswerMatrix } from '../components/quizQuestion';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { categories, quiz } from '../components/values';

const myTheme = createTheme({
  typography: {
      fontFamily: [
        'IBM Plex Mono',
        'Cosmic Octo Heavy'
      ].join(','),
    },
});


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

export default function Question() {
  return (
    <div  className='quizQuestions'>
      <ThemeProvider theme={myTheme}>

      
      <QuizQuestionList quiz={quiz} />
      </ThemeProvider>

    </div>
  );
}