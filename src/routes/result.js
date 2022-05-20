import '../App.css';
import React, {useState} from 'react';
import kurimu from '../kurimu.png';
import tamale from '../eveliasTamales.png';
import bakery from '../lostLarsonBakery.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage, firebase, storageRef } from '../utilities/firebase.js';


function ResultIcon({ result_name }) {
  return (
    <div class="result_div">
      <img src={"category_icons/" + result_name + ".svg"} class="result_icon" alt='None' />
      <h3 class="result_description"> {result_name + " blurb"} </h3>
    </div>
  )
}

/* calculate the results here, store the four results in array of categories */

// var results = ['coffee', 'shopping', 'night', 'dining']

export default function Result() {
  const queryParams = new URLSearchParams(window.location.search);
  const results = queryParams.get('resultCat').split(",");

  const listRef = ref(storage);
  const postResult = [[results[0]], [results[0], results[2]], [results[1], results[3]]];
  const [urls, setUrls] = useState([]);


  postResult.forEach((suggestion, index) => {
    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          if (suggestion.length === 1) {
            if (itemRef._location.path === suggestion[0] + ".png") {
              getDownloadURL(itemRef).then((url) => {
                if(urls.includes(url) == false){
                  setUrls(arr => [...arr, url]);
                }
              })
            }
          } else {
            var isEvery = suggestion.every(item => itemRef._location.path.includes(item));
            if (isEvery) {
              // console.log(suggestion);
              // console.log(itemRef._location.path);
              getDownloadURL(itemRef).then((url) => {
                if(urls.includes(url) == false){
                  setUrls(arr => [...arr, url]);
                }
              })
            }
          }
        });
        // console.log(itemData);
        
      }).catch((error) => {
        // Uh-oh, an error occurred!
        console.log("error")
      });
      
  })

  // setUrls(itemData);
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  var unique = urls.filter(onlyUnique);

  console.log(unique)
  console.log("results", results)

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
            {unique.map((item) => (
              <ImageListItem>
                <img
                  src={`${item}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList></Grid>

      </div>

    </div>
  );
}