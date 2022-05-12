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



function App() {
  return (
    <>
    <div className="centered"> 
    <h1> What type of Unfounder are you? </h1>
      <Button halfWidth variant="contained" color="primary" href="/question">Take the quiz</Button>
      </div>
    </>
    
  )
}

export default App;
