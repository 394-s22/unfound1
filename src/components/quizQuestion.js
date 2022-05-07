import { useState } from "react";
import {Card, CardContent, Stack, Typography }  from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function QuizQuestion({question}) {

    return(
        <Card>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            
          Place Holder Question Name
        </Typography>
        {
            Object.values(question).map(answer => <QuizAnswer answer={answer}/>)
        }
        </CardContent>
        </Card>
    )
}

function QuizAnswer ({answer}) {
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
            <FormControlLabel value={answer} control={<Radio />} label={answer} />
        </RadioGroup>
    </FormControl>
    )
}

function QuizQuestionList({quiz}) {

    return(
    <Stack spacing={2}>
        {
            Object.values(quiz).map(question => <QuizQuestion question={question}/> )
        }
    </Stack>
    )
}


export default QuizQuestionList;