import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div id="products-wrapper">
        <Products />
      </div>
      <About />
      <Contact />
    </div>
  );
}

export default App;
