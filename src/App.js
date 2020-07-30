import React from 'react';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Git Branching / Merge Practice</h1>
      <p>Let's practice git branching and merging</p>
      <About/>,
      <Services/>,
      <Contact/>
    </div>

  );
}

export default App;
