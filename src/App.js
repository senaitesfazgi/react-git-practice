import React from 'react';
import About from './components/About';
import Services from './components/Services';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Git Branching / Merge Practice</h1>
      <p>Let's practice some git branching and merging</p>
      <About/>,
      <Services/>
    </div>

  );
}

export default App;
