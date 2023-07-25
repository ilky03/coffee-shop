import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from '../Nav/Nav';
import CoffeeHouse from '../CoffeeHouse/CoffeeHouse';
import OurCoffee from '../OurCoffee/OurCoffee';
import ForYourPleasure from '../ForYourPleasure/ForYourPleasure';
import Footer from '../Footer/Footer';

import './App.css'

const App = () => (
  <Router>
    <Nav />
      <Routes>
        <Route path="/our-coffee" element={<OurCoffee />} />
        <Route path="/pleasure" element={<ForYourPleasure />} />
        <Route path="/coffee-shop" element={<CoffeeHouse />} /> 
      </Routes>
      <Footer />
  </Router>
);

export default App;
