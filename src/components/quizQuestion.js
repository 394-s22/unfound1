import { useState } from "react";
import {Card, CardContent, Stack, Typography }  from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {getSuggestions} from '../routes/question';
import { Button } from "@mui/material";

function QuizQuestion ({question, index, setCurrentQuestionIndex}) {
    console.log(index);
    return(
        <Card>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {question[0]}
        </Typography>
        {
            QuizAnswer (question[1], index, setCurrentQuestionIndex)
            // Object.values(question[1]).map(answer => <QuizAnswer answer={answer}/>)
        }
        
        </CardContent>
        </Card>
    )
}

function QuizAnswer (answers, index, setCurrentQuestionIndex) {
    const [value, setValue] = useState();
    const handleChange = (event) => {
        setValue(event.target.value);
        createAnswerMatrix(index, event.target.value);
        // if(index < 2){
        //     setCurrentQuestionIndex(index+1);
        // }else{
        //     getSuggestions()
        // }
    };
    
    

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
    console.log(index, category)
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
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleChange = () =>{
    
    if (answerMatrix[currentQuestionIndex].includes(1) === false) {
        return alert("Please select an answer to move on!!!");
    }
    if(currentQuestionIndex < 2){
            setCurrentQuestionIndex(currentQuestionIndex+1);
        }else{
            getSuggestions()
        }
    }
   

    return(
    <Stack spacing={2}>
        {
            <QuizQuestion question={Object.entries(quiz)[currentQuestionIndex]} index= {currentQuestionIndex} setCurrentQuestionIndex={setCurrentQuestionIndex} />
        }
        <Button onClick={handleChange}> Next</Button>
    </Stack>
    )
}



export default QuizQuestionList;
