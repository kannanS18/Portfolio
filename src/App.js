import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import ScrollToTop from "./components/ScrollToTop";
import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </div>

    </Router>
  );
}

export default App;
