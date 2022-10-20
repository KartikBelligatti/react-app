import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fc from './Components/Functiona';
import {Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import ClassComp from './Components/ClassComponent';

function App() {
  return(
    <div>  
      
   <Navbar/>
   <Routes>
    <Route path="funcom" element={<Fc/>}></Route>
    <Route path="classcom" element={<ClassComp/>}></Route>
   </Routes>
  </div>
  );
}

export default App;
