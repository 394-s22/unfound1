import '../App.css';
import React from 'react';
import kurimu from '../kurimu.png';
import tamale from '../eveliasTamales.png';
import bakery from '../lostLarsonBakery.png';
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

function ResultIcon({ result_name }) {
  return (
    <div class="result_div">
      <img src={"category_icons/" + result_name + ".svg"} class="result_icon" />
      <h3 class="result_description"> {result_name + " blurb"} </h3>
    </div>
  )
}

/* calculate the results here, store the four results in array of categories */

var results = ['coffee', 'shopping', 'night', 'dining']

export default function Result() {
  return (
    <div class="results">
      <h1>Results</h1>
      <h2>Max, you are an introvert! </h2>
      <div class="results-icons">

        {
          Object.values(results).map((result) => <ResultIcon result_name={result} />)
        }

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