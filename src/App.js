
import './App.css';
import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Home';
import SingleMovie from './SingleMovie';

function App() {
       
  return (
 <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/movies/:id' element = {<SingleMovie/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
