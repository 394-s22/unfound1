import { useState } from "react";
import {Card, CardContent, Stack, Typography }  from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function QuizQuestion ({question, index}) {
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
            value={value ? value: "AnswerChoices"}
            onChange={handleChange}
        >
            {
                Object.values(answers).map((ans) => <FormControlLabel id="demo-radio-buttons-group-label" value={ans['question']} control={<Radio />} label={ans['question']} /> )
            }
        </RadioGroup>
    </FormControl>
    )

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
