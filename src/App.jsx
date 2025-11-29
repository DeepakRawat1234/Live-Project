import React from 'react';
import Gallery from './pages/Gallery';
import Signup from './components/login/Signup';
import Login from './components/login/Login';
import Information from './pages/Information';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Gallery />} />

        {/* Information Page */}
        <Route path="/info" element={<Information />} />

        {/* Login & Signup */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
