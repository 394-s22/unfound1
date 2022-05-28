import './App.css';
import { Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";



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
    <Typography variant="h3" gutterBottom> What type of Unfounder are you? </Typography><br></br>
      <Button halfWidth variant="contained" color="primary" href="/question">Take the quiz</Button>
      </div>
      </ThemeProvider>
    </>
    
    
  )
}

export default App;
