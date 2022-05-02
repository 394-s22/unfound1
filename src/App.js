import kurimu from './kurimu.png';
import tamale from './eveliasTamales.png';
import bakery from './lostLarsonBakery.png';
import './App.css';
import CoffeeIcon from '@mui/icons-material/Coffee';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem'; 
import Grid from '@mui/material/Grid';

const itemData= [{
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

        <div className='recomendations'>
        <h1> Unfound recomendations for <RestaurantIcon/> </h1>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList></Grid>

        </div>
        {/* <div className='recomendationPhotos' >

        </div> */}
  
        

    </div>
  );
}

export default App;
