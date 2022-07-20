import React from 'react';
import "./Product.css"
import firstwebsite from "../img/firstwebsite.jpg"
import secondwebsite from "../img/secondwebsite.jpg"
import thirdwebsite from "../img/thirdwebsite.jpg"
import fourthwebsite from "../img/fourthwebsite.jpg"
import fifthwebsite from "../img/fifthwebsite.jpg"
import sixthwebsite from "../img/sixthwebsite.jpg"

const Product = ({img, link}) => {
  return (

    <div className='pl-list'>

       <div className='p'>
           <div className='p-browser'>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
            </div>
            <a href={link} target='_blank' rel='noreferrer'>
                 <img src={firstwebsite} alt=' ' className='p-img'/>
             </a>
      
        </div>


        <div className='p'>
           <div className='p-browser'>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
            </div>
            <a href={link} target='_blank' rel='noreferrer'>
                 <img src={secondwebsite} alt=' ' className='p-img'/>
             </a>
      
        </div>
        
        <div className='p'>
           <div className='p-browser'>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
            </div>
            <a href={link} target='_blank' rel='noreferrer'>
                 <img src={thirdwebsite} alt=' ' className='p-img'/>
             </a>
      
        </div>
        
        <div className='p'>
           <div className='p-browser'>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
            </div>
            <a href={link} target='_blank' rel='noreferrer'>
                 <img src={fourthwebsite} alt=' ' className='p-img'/>
             </a>
      
        </div>
        
        <div className='p'>
           <div className='p-browser'>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
            </div>
            <a href={link} target='_blank' rel='noreferrer'>
                 <img src={fifthwebsite} alt=' ' className='p-img'/>
             </a>
      
        </div>
        
        <div className='p'>
           <div className='p-browser'>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
            </div>
            <a href={link} target='_blank' rel='noreferrer'>
                 <img src={sixthwebsite} alt=' ' className='p-img'/>
             </a>
      
        </div>
        
        
    </div>
   
  );
}

export default Product;
