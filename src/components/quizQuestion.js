import { useState } from "react";
import {Card, CardContent, Stack, Typography }  from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function QuizQuestion ({question, index}) {
    
    // a("night");
    return(
        <Card>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {question[0]}
        </Typography>
        {
            QuizAnswer (question[1],index)
            // Object.values(question[1]).map(answer => <QuizAnswer answer={answer}/>)
        }
        
        </CardContent>
        </Card>
    )
}

function QuizAnswer (answers, index) {
   
    const [value, setValue] = useState();
    const handleChange = (event) => {
        setValue(event.target.value);

      };
      createAnswerMatrix(index,value);


    

      /**
       * Handle undefined value
       *    If user forgets to answer a question, prompt user to answer said question (alert)
       * 
       * */
      

    return(
    <FormControl >
        <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value ? value: "DummyValue"}
            onChange={handleChange}
            id = {index}
        >
            {
                Object.values(answers).map((ans) => <FormControlLabel id="demo-radio-buttons-group-label" value={ans['category']} control={<Radio />} label={ans['question']} /> )
            }
        </RadioGroup>
    </FormControl>
    )

}

const answerMatrix = Array(10).fill(null).map(() => Array(10).fill(0));

export function getAnswerMatrix(){
    return answerMatrix;
}

function createAnswerMatrix (index, category){
    // const category = 'night';
    const catToIndex = new Map();
    // const row = 0;
    const newArray = Array(10).fill(0);

    catToIndex.set('coffee', 0);
    catToIndex.set('food', 1);
    catToIndex.set('drinks', 2);
    catToIndex.set('night', 3);
    catToIndex.set('active', 4);
    catToIndex.set('nature', 5);
    catToIndex.set('history', 6);
    catToIndex.set('music', 7);
    catToIndex.set('shopping', 8);
    catToIndex.set('art', 9);
    
    newArray[catToIndex.get(category)] = 1;
    console.log(catToIndex.get(category));

    answerMatrix[index] = newArray;
    console.log(answerMatrix);
}


function QuizQuestionList({quiz}) {

    return(
    <Stack spacing={2}>
        {
            Object.entries(quiz).map((question, index) => <QuizQuestion question={question} index= {index} /> )
        }
    </Stack>
    )
}

export default QuizQuestionList;
