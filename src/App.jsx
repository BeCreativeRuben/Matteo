import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Vienna from './components/Vienna';
import Cycling from './components/Cycling';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Vienna />
      <Cycling />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
