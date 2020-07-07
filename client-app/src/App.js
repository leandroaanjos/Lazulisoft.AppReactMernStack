import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import MainContent from './components/mainContent';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainContent />        
      </div>
    </Router>
    
  );
}

export default App;
