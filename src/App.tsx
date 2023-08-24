import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Character, Home } from './Routes';

function App() {
return (
  <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/character/:id' element={<Character/>}/>
      </Routes>
  </Router>
  );
}

export default App;
