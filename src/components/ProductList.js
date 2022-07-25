import React from 'react';
import "./ProductList.css"
import Product from './Product';
import {products} from "./Data"


const ProductList = () => {
  return (
    <div className='pl'>
        <div className='pl-text'>
            <h1 className='pl-title'> Create & Inspire.</h1>
            <p className='pl-desc'>
                Below are some of my previous projects. Built with React.js, Vanilla.js, HTML, CSS and some other css frameworks.

            </p>
        </div>

        <Product/>

        {/* <div className='pl-list'>
            {products.map((item)=>(
                    <Product key={item.id} img={item.img} link={item.link}/>
            ))}
           
        
        </div>
       */}
    </div>
  );
}

export default ProductList;
