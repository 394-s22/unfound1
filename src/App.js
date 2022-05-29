import './App.css';
import { Button, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import landingImg from './landingUnfound.png'
import { Box } from '@mui/system';
const myTheme = createTheme({
  typography: {
      fontFamily: [
          'IBM Plex Mono'
      ].join(','),
  }
});

function App() {
  return (
    <>
     <ThemeProvider theme={myTheme}>
    <div className="centered"> 
    <Typography variant="h3" gutterBottom> What type of Unfounder are you? </Typography><br></br>
      <Button halfWidth variant="contained" color="primary" href="/question">Take the quiz</Button>

    <Grid container justifyContent="flex-start" wrap>
      <Box paddingLeft={4}>
      <Typography variant='h2' sx={{color:"gray"}}> The </Typography>
      <Typography variant='h2' sx={{color:"gray"}}>  Unfounder </Typography>
      <Typography variant='h2' sx={{color:"gray"}}>  Sorter</Typography>
      </Box>
    </Grid >
    <div className='middleLanding'>
    <img style={{  width: '50%', height: 'auto' }}src={landingImg} alt="logo" />

    <Typography variant="h3" gutterBottom sx={{color:"gray"}}> What type of Unfounder are you? </Typography>
    
      <Button halfWidth variant="outlined"  href="/question" size="large"
      sx={{
        width: "50%",
        color: "gray",
        border: "2px solid !important",
        borderRadius: "20px!important",
      }}>
        <Typography variant='h6'> Take the quiz </Typography>
      </Button>
      </div>
      </div>

      </ThemeProvider>
    </>
    
    
  )
}

export default App;
