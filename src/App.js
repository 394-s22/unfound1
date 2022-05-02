import logo from './logo.svg';
import './App.css';
import CoffeeIcon from '@mui/icons-material/Coffee';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import RestaurantIcon from '@mui/icons-material/Restaurant';

function App() {
  return (

      <div class="results">
        <h1>Results</h1>
        <h2>You are...</h2>
        <div class="results-icons">
      
          <div class="result_div">
            <CoffeeIcon fontSize='large'/>
            <h3 class="result_description"> blurb </h3>
          </div>

            <div class="result_div">
              <ColorLensIcon fontSize='large'/>
              <h3 class="result_description">blurb</h3>
            </div>

            <div class="result_div">
              <DarkModeIcon fontSize='large'/>
              <h3 class="result_description">blurb</h3>
            </div>

            <div class="result_div">
            <RestaurantIcon fontSize='large'/>
            <h3 class="result_description">blurb</h3>
            </div>

          </div>

        <div className='reccomendations'>
        <h1> Unfound reccomendations for <RestaurantIcon/> </h1>
        </div>
        {/* <div className='reccomendationPhotos' >

        </div> */}

        

    </div>
  );
}

export default App;
