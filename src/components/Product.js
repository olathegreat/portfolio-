import React from 'react';
import "./Product.css"
import firstwebsites from "../img/firstwebsites.png"
import secondwebsites from "../img/secondwebsites.png"
import thirdwebsites from "../img/thirdwebsites.png"
import fourthwebsite from "../img/fourthwebsite.png"
import fifthwebsite from "../img/fifthwebsite.png"
import sixthwebsite from "../img/sixthwebsite.png"

const Product = ({img, link}) => {
  return (

    <div className='pl-list'>

       <div className='p'>
           <div className='p-browser'>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
            </div>
            <a href="https://shoelanding-page.vercel.app/" target='_blank' rel='noreferrer'>
                 <img src={firstwebsites} alt=' ' className='p-img'/>
             </a>
      
        </div>


        <div className='p'>
           <div className='p-browser'>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
            </div>
            <a href="https://testar-xi.vercel.app/" target='_blank' rel='noreferrer'>
                 <img src={secondwebsites} alt=' ' className='p-img'/>
             </a>
      
        </div>
        
        <div className='p'>
           <div className='p-browser'>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
            </div>
            <a href="https://omnifood-rho.vercel.app/" target='_blank' rel='noreferrer'>
                 <img src={thirdwebsites} alt=' ' className='p-img'/>
             </a>
      
        </div>
        
        <div className='p'>
           <div className='p-browser'>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
            </div>
            <a href="https://coinsearch.vercel.app/" target='_blank' rel='noreferrer'>
                 <img src={fourthwebsite} alt=' ' className='p-img'/>
             </a>
      
        </div>
        
        <div className='p'>
           <div className='p-browser'>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
            </div>
            <a href="https://imagesearcher.vercel.app/" target='_blank' rel='noreferrer'>
                 <img src={fifthwebsite} alt=' ' className='p-img'/>
             </a>
      
        </div>
        
        <div className='p'>
           <div className='p-browser'>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
                  <div className='p-circle'></div>
            </div>
            <a href="https://vercel.com/olathegreat/oneder" target='_blank' rel='noreferrer'>
                 <img src={sixthwebsite} alt=' ' className='p-img'/>
             </a>
      
        </div>
        
        
    </div>
   
  );
}

export default Product;
