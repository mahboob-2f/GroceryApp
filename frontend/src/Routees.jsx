import React from 'react';
import { Routes ,Route } from 'react-router';
import Home from './pages/Home';
import NotFound from './pages/NotFound';


const Routees = () => {
  return (
    <Routes>
        <Route path ='/' element={<Home/>}></Route>


        <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    
  );
};

export default Routees;