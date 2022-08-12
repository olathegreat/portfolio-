import React from 'react';
import "./Contact.css";
import "../regular/icofont.css"
import { useRef,useState } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../Context';
import { useContext } from 'react';

const Contact = () => {
    const formRef = useRef();
    const[done, setDone]=useState(false)
    const theme =useContext(ThemeContext);
    const darkMode= theme.state.darkmode; 

    const handleSubmit=(e)=>{
        e.preventDefault();

        emailjs.sendForm(
            'service_em09kmb',
             'template_4yb9gok',
               formRef.current,
              'LmJhOAGJD8Jd_n-Wk')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });

    }
  return (
    <div className='c'>
        <div className='c-bg'></div>
        <div className='c-wrapper'>
            <div className='c-left'>
                <h1 className='c-title'>Let's Discuss</h1>
                <div className='c-info'>
                    <div className='c-info-item'>
                        <i className='icofont-phone'></i>
                        +2348169336518
                    </div>

                    <div className='c-info-item'>
                        <i className='icofont-email'></i>
                        ademolarotimi2000@gmail.com
                    </div>

                    <div className='c-info-item'>
                        <i className='icofont-institution'></i>
                        Obafemi awolowo university ile-ife
                    </div>
                </div>

            </div>
            <div className='c-right'>
                <p className='c-desc'>
                    <b>What's your story</b> Get in touch. Always available
                    for freelancing if the right project comes along 
                </p>

                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type='text' style={{backgroundColor:darkMode && "#333"}} placeholder="Name" name="user_name"/>
                    <input type='text'style={{backgroundColor:darkMode && "#333"}} placeholder="Subject" name="user_subject"/>
                    <input type='email' style={{backgroundColor:darkMode && "#333"}} placeholder="Email" name="user_email"/>
                    <textarea rows="5" style={{backgroundColor:darkMode && "#333"}}  placeholder='Message' name='message'></textarea>
                    <button>Submit</button>

                    {done && 'thank you'}
                </form>

            </div>
        </div>
    </div>
  );
}

export default Contact;
