import { useState } from "react";
import {Card, CardContent, Stack, Typography }  from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {getSuggestions} from '../routes/question';
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from '@mui/material/Box';



const myTheme = createTheme({
    typography: {
        fontFamily: [
          'IBM Plex Mono',
          'Cosmic Octo Heavy'
        ].join(','),
      },
    // style radio button as button element
    components: {
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            color: "black",
            margin: "5px 15px 0 0",
            minWidth: "100%",
            borderStyle: "none",
            border: "1px solid !important",
            borderRadius: "13px!important",
            "&.Mui-selected": {
              backgroundColor: "#D6DBF5",
              borderStyle: "none!important"
            },
            "&:hover": {
              backgroundColor: "#D6DBF5"
            },
            "&:user-select": {
                backgroundColor: "#D6DBF5"
            }
          }
        }
      }
    }
  });
  

function QuizQuestion ({question, index, value, setValue}) {
    return(
        <Box sx={{display: "flex", flexDirection:"column", alignItems:"center", textAlign:"center"}}>
        <CardContent >
        <Typography gutterBottom variant="h4" component="div" >
            {question[0]}
        </Typography>
        {
            QuizAnswer (question[1], index, value, setValue)
        }
        </CardContent>
        </Box>
      
        
    )
}

function QuizAnswer (answers, index, value, setValue) {
    // const [value, setValue] = useState();
    console.log('value', value)
    const handleChange = (event) => {
        setValue(event.target.value);
        createAnswerMatrix(index, event.target.value);
    };
      

    return(
    <ThemeProvider theme={myTheme}>
    <FormControl >
        <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value ? value: "DummyValue"}
            onChange={handleChange}
            id = {index}
        >
            {
                Object.values(answers).map((ans) => <FormControlLabel id="demo-radio-buttons-group-label" value={ans['category']} control={<Radio />} label={ans['question']} 
                sx={{
                    color: 'success'
                }}/> )
            }
        </RadioGroup>
    </FormControl>
    </ThemeProvider>
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
    const [value, setValue] = useState();
    console.log("currentQuestionIndex", currentQuestionIndex)

    const handleChange = () =>{
    setValue()
    
    if (answerMatrix[currentQuestionIndex].includes(1) === false) {
        return alert("Please select an answer to move on!!!");
    }
    if(currentQuestionIndex < 9){
            setCurrentQuestionIndex(currentQuestionIndex+1);
        }else{
            getSuggestions()
        }
    }
   

    return(
 
    <Stack spacing={2}>
        {
            <QuizQuestion question={Object.entries(quiz)[currentQuestionIndex]} index= {currentQuestionIndex} value={value} setValue={setValue} />
        }
        <Button onClick={handleChange}> Next</Button>
    </Stack>
 
    )
}



export default QuizQuestionList;
