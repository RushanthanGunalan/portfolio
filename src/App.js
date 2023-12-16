import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Experience from './routes/Experience';
import Home from './routes/Home';
import Project from './routes/Project';

function App() {
  return (
    <Router basename="/portfolio"> {/* Update with your actual subdirectory */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;