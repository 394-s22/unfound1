import { useState } from "react";
import {Card, CardContent, Stack, Typography }  from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function QuizQuestion ({question, answers}) {
    return(
        <Card>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {question[0]}
        </Typography>
        {
            QuizAnswer (question[1])
            // Object.values(question[1]).map(answer => <QuizAnswer answer={answer}/>)
        }
        </CardContent>
        </Card>
    )
}

function QuizAnswer (answers) {

    const [value, setValue] = useState();

    const handleChange = (event) => {
        setValue(event.target.value);
      };



    return(
    <FormControl >
        <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
        >
            {
                Object.values(answers).map((ans) => <FormControlLabel id="demo-radio-buttons-group-label" value={ans} control={<Radio />} label={ans} /> )
            }
        </RadioGroup>
    </FormControl>
    )

}



function QuizQuestionList({quiz}) {

    return(
    <Stack spacing={2}>
        {
            Object.entries(quiz).map((question, answers) => <QuizQuestion question={question} answers= {answers} /> )
        }
    </Stack>
    )
}


export default QuizQuestionList;
