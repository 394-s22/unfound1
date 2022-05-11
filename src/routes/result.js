import '../App.css';
import React from 'react';
import kurimu from '../kurimu.png';
import tamale from '../eveliasTamales.png';
import bakery from '../lostLarsonBakery.png';
import CoffeeIcon from '@mui/icons-material/Coffee';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid';

const itemData = [{
  img: kurimu
},
{
  img: tamale
},
{
  img: bakery
}];

export default function Result() {
  return (
    <div class="results">
      <h1>Results</h1>
      <h2>Max, you are an introvert! </h2>
      <div class="results-icons">

        <div class="result_div">
          <CoffeeIcon fontSize='large' />
          <h3 class="result_description"> Coffee Shops! </h3>
        </div>

        <div class="result_div">
          <ColorLensIcon fontSize='large' />
          <h3 class="result_description">Museums! </h3>
        </div>

        <div class="result_div">
          <DarkModeIcon fontSize='large' />
          <h3 class="result_description">Quiet Nights!</h3>
        </div>

        <div class="result_div">
          <RestaurantIcon fontSize='large' />
          <h3 class="result_description">Great Places to eat!</h3>
        </div>

      </div>

      <div>
        <h1> Unfound recomendations for Max: </h1>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <ImageList sx={{ width: '100%', height: 450, maxWidth: 500 }} cols={3} rowHeight={164}>
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

    </div>
  );
}