import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Appnavbar from './components/Appnavbar';

const App = () => {
  return (
    <BrowserRouter>
      <Appnavbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/jobs" element={<div>Jobs</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
