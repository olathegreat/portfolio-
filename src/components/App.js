import React from 'react';
import { useContext } from 'react';
import Intro from './Intro';
import About from './About';
import ProductList from './ProductList';
import Contact from "./Contact";
import Toggle from './Toggle';
import { ThemeContext } from '../Context';

const App = () => {
  const theme =useContext(ThemeContext);
  const darkMode= theme.state.darkmode; 

  
  return (
    <div 
    style={{ 
      backgroundColor: darkMode? "#222" : "white",
      color: darkMode && "white"}}>
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
