import React from 'react';
import "./intro.css"
import me from "../img/mypic.png"

const Intro = () => {
  return (
    <div className='i'>
      <div className='i-left'>
          <div className='i-left-wrapper'>
              <h2 className='i-intro'>Hello, my name is</h2>
              <h1 className='i-name'>Olarotimi</h1>
              <div className='i-title'>
                  <div className='i-title-wrapper'>
                      <div className='i-title-item'>Web Developer</div>
                      <div className='i-title-item'>Graphic Designer</div>
                      {/* <div className='i-title-item'>Content Writer</div>
                      <div className='i-title-item'>Ui/Ux</div>
                      <div className='i-title-item'>Brand strategist</div> */}
                  </div>
              </div>
              <div className='i-description'>
                  I design and develop services for customers of all sizes, specialising
                  in creating stylish, modern websites, web services and online stores.
              </div>
          </div>
      </div>
      <div className='i-right'>
       <div className='i-bg'></div>
          
        <img alt='' className='i-img' src={me}></img>
        
      </div>
    </div>
  );
}

export default Intro;
