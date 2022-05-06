import kurimu from './kurimu.png';
import tamale from './eveliasTamales.png';
import bakery from './lostLarsonBakery.png';
import './App.css';
import { Button } from '@mui/material';

const itemData = [{
  img: kurimu
},
{
  img: tamale
},
{
  img: bakery
}];

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

function App() {
  return (
    <>
      <Button halfWidth variant="contained" color="primary" href="/question">Take the quiz</Button>
    </>
  )
}

export default App;
