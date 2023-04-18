import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' exact Component={Home} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
