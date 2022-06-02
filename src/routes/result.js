import '../App.css';
import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid';
import { useData } from '../utilities/firebase.js';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from '@mui/material';



const myTheme = createTheme({
  typography: {
    fontFamily: [
      'IBM Plex Mono',
      'Cosmic Octo Heavy'
    ].join(','),
  }
});


function ResultIcon({ result_name }) {
  return (
    <div class="result_div">
      <img src={"category_icons/" + result_name + ".svg"} class="result_icon" alt='None' />
      <Typography variant='h4' class="result_description"> {result_name + " blurb"} </Typography>
    </div>
  )
}

/* calculate the results here, store the four results in array of categories */


export default function Result() {
  const queryParams = new URLSearchParams(window.location.search);
  const results = queryParams.get('resultCat').split(",");

  // This part of code is for pushing posts and their urls to the firebase
  /* const listRef = ref(storage);
  listAll(listRef)
  .then((res) => {
    res.items.forEach((itemRef) => {
      getDownloadURL(itemRef).then((url) => {
          pushData(`/users/`, {
            filename: itemRef._location.path,
            url: url
          });
      })

    });
  }).catch((error) => {
    console.log(error)
  }); */

  const postResult = [[results[0]], [results[0], results[2]], [results[1], results[3]]];
  const [picInfo, loading, error] = useData('/');

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>

  // retrieve all posts that contain vibes of each suggestion
  var qualified_posts = [[], [], []]
  for (var i = 0; i < 3; i++) {
    for (const [key, value] of Object.entries(picInfo)) {
      var isEvery = postResult[i].every(item => value.filename.includes(item));
      if (isEvery) {
        qualified_posts[i].push(value.url)
      }
    }
  }

  // randomly pick up one post
  var finalposts = []
  for (var i = 0; i < 3; i++) {
    const len = qualified_posts[i].length
    const random_post = Math.floor(Math.random() * len)
    // avoid duplicates
    if (finalposts.includes(qualified_posts[i][random_post])) {
      finalposts[i] = qualified_posts[i][(random_post + 1) % len]
    } else {
      finalposts[i] = qualified_posts[i][random_post]
    }
  }

  var personality_type = "introvert"
  if (Math.floor(Math.random() * 2) == 1) {
    personality_type = "extrovert"
  }

  var user_name = "Max"
  // code for in the future if Unfound wants to incorporate getting the users'
  // name or other information (better analytics/tracking)

  return (
    <ThemeProvider theme={myTheme}>
      <div class="results">
        <Typography variant='h2'> Results </Typography>
        <Typography variant='h4'>{user_name}, you are an {personality_type}! </Typography>
        <br></br>
        <div class="results-icons">

          {
            Object.values(results).map((result) => <ResultIcon result_name={result} />)
          }

        </div>

        <div>
          <Typography variant='h4'> Unfound recommendations for Max: </Typography>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <ImageList sx={{ width: '100%', height: 450, maxWidth: 500 }} cols={3} rowHeight={164}>
              {finalposts.map((item) => (
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
    </ThemeProvider>
  );
}