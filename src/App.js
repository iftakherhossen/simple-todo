import './App.css';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Box className="Container">
      <Container>
        <Grid container className="Wrapper">
          <Grid item xs={10} sm={8} md={6} className="Box">
            <Main />
          </Grid>
          <Footer />
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
