import React from 'react';
import "./ProductList.css"
import Product from './Product';
import {products} from "./Data"


const ProductList = () => {
  return (
    <div className='pl'>
        <div className='pl-text'>
            <h1 className='pl-title'> Create & Inspire. It's Lama</h1>
            <p className='pl-desc'>
                Lama is a creative portfolio that your work has been waiting for.
                Beautiful homes, showing portfolio styles & a whole lot more inside

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
