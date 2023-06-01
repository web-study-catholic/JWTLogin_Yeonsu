import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/HomePage'
import Login from './pages/LoginPage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
