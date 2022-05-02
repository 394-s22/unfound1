import logo from './logo.svg';
import './App.css';
import CoffeeIcon from '@mui/icons-material/Coffee';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import RestaurantIcon from '@mui/icons-material/Restaurant';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>



      </header>

      <div class="results">
        <h2>Results</h2>
        <h3>You are...</h3>
        <div class="results_icons">
      
          <div class="result_div">
          <svg data-testid="CoffeeIcon"></svg>
            <p class="result_description">blurb</p>
            </div>

            <div class="result_div">
            <svg data-testid="ColorLensIcon"></svg>
            <p class="result_description">blurb</p>
            </div>

            <div class="result_div">
            <svg data-testid="DarkModeIcon"></svg>
            <p class="result_description">blurb</p>
            </div>

            <div class="result_div">
            <svg data-testid="RestaurantIcon"></svg>
            <p class="result_description">blurb</p>
            </div>

          </div>

        
        </div>
    </div>
  );
}

export default App;
