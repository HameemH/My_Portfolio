import React ,{useRef}from 'react';
import backgroundLightedited from '../Assets/backgroundLightedited.jpg';
import emailjs from '@emailjs/browser';


const Contact = () => {
    
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_fyf1baa', 'template_6e99t9b', e.target, 'vn2T5UOcR9Fkxf_AQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });}
       
      
    return (
        <div id='contact' className='mt-7 flex justify-center items-center px-5' style={{
            background: `url(${backgroundLightedited})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            WebkitBackdropFilter: 'blur(8px)',
            overflow: 'hidden',
            backgroundBlendMode: 'multiply',
            backgroundRepeat: 'no-repeat',

            height: '100vh'
        }}>
            <div class="card lg:w-2/4  bg-gradient-to-tr bg-opacity-80 shadow-xl">
                
                <div class="card-body items-center text-center">
                <h2 class="card-title text-orange-700 text-2xl">You Can Send Me Messege From Here.</h2>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col' action="">
                        <input name="to_name" type="text" placeholder='Your Name' className='border text-orange-600 px-4 py-2 placeholder:text-orange-600 border-orange-700 border-2 bg-zinc-900 my-3' />
                        <input name="from_name" type="email" placeholder='Your Email' className='border text-orange-600 px-4 py-2 placeholder:text-orange-600 border-orange-700 border-2 bg-zinc-900 my-3'/>
                        <textarea name="message" placeholder='Your Message' id="" className='border text-orange-600 px-4 py-2 placeholder:text-orange-600 border-orange-700 border-2 bg-zinc-900 my-3' cols="30" rows="10"></textarea>
                        <input type="submit"  value='Send Messege' className='btn btn-outline border hover:bg-orange-700 text-orange-700' />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;