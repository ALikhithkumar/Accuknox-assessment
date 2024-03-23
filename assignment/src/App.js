// App.js

import React from 'react';
import  {Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import ColorSearch from './Components/ColorSearch';
import Services from './Components/Services';
import Home from './Components/Home';
import Footer from './Components/Footer';
function App() {
  return (
      <div>
        <Header />
      <Routes>
        <Route path="/" element=<Home/> />
          <Route path="/about" element=<About/> />
        <Route path="/services" element=<Services/> />
        <Route path="/search" element=<ColorSearch/> />
        </Routes>
        <Footer/>
      </div>
  );
}


export default App;
