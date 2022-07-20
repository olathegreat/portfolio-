import React from 'react';
import "./About.css"
import Photographer from "../img/Photographer.png"
import award from "../img/award.png"
const About = () => {
  return (
    <div className='a'>
        <div className='a-left'>
           <div className='a-card bg'></div>
           <div className='a-card'>
               <img alt='' className='a-img' src={Photographer}/>
           </div>
        </div>
        <div className='a-right'>
           <h1 className='a-title'>About Me</h1>
           <p className='a-sub'>
               It is already an established fact that with much consistency and knowledge
               based skills, I have tremendously influenced and impacted in my field

           </p>
           <p className='a-desc'>
               Coupled with the urge to improve and move along with daily trend and globally
               accepted professional field requirements, I equip myself with up to date materials
               and latest documentations in all my fields of study. And certainly, this has been
               a source of major success in projects and handled and nothing but a hot cake for
               my clients. Using research and creativity and the foundation for all task to be
               performed with ample knowledge of design softwares and kit.
           </p>
           <div className='a-award'>
               <img src={award} className="a-award-img"/>
               <div className='a-award-text'>
               <h4 className='a-award-title'>
                   International Photographer of the year
               </h4>
               <p className='a-award-description'>
                   This award is a yearly award given to the international Photographer with
                   a trail blazing impact

               </p>
               </div>
              
           </div>
        </div>
      
    </div>
  );
}

export default About;
