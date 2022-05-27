import './App.css';
import { Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import landingImg from './landing.svg'


const myTheme = createTheme({
  typography: {
      fontFamily: [
          'IBM Plex Mono',
          'Cosmic Octo Heavy'
      ].join(','),
  }
});

function App() {
  return (
    <>
     <ThemeProvider theme={myTheme}>
    <div className="centered"> 
    <Typography variant="h3" gutterBottom> What type of Unfounder are you? </Typography>
    
      <Button halfWidth variant="outlined"  href="/question" size="large"
      sx={{
        color: "gray",
        width:"30%",
        border: "2px solid !important",
        borderRadius: "20px!important",
      }}>
        <Typography variant='h6'> Take the quiz </Typography>
      </Button>

      </div>
      </ThemeProvider>
    </>
    
    
  )
}

export default App;
