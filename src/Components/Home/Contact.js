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
        <div id='contact' className='flex w-full min-h-screen flex-col justify-center items-center px-5' >
            <div class="card lg:w-2/4  bg-opacity-80 ">
                
                <div class="card-body items-center text-center">
                <div className='relative text-center mb-3 flex flex-col'>
          <h1 className='lg:text-9xl text-4xl opacity-5 font-bold text-center'>CONTACT</h1>
          <h1 className='lg:text-6xl text-xl lg:mt-8 mt-1 absolute self-center'>CONNECT WITH ME</h1>
        </div>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col' action="">
                      <div className='flex gap-6'>
                      <input name="to_name" type="text" placeholder='Your Name' className='border px-3 text-orange-600 px-4 py-2 placeholder:text-orange-600 border-2 bg-slate-300 my-3' />
                        <input name="from_name" type="email" placeholder='Your Email' className='border px-3 text-orange-600 px-4 py-2 placeholder:text-orange-600 border-2 bg-slate-300 my-3'/>
                      </div>
                      <input name="" type="text" placeholder='Your Subject' className='border px-3 text-orange-600 px-4 py-2 placeholder:text-orange-600 border-2 bg-slate-300 my-3'/>

                        <textarea name="message" placeholder='Your Message' id="" className='border text-orange-600 px-4 py-2 placeholder:text-orange-600 border-2 bg-slate-300 my-3' cols="30" rows="10"></textarea>
                        <input type="submit"  value='Send Messege' className='btn btn-outline border hover:bg-orange-700 text-orange-700' />

                    </form>
                </div>
            </div>
            <div class="divider "></div>
            <h1>BY HAMEEM HOSSAIN</h1>
        </div>
    );
};

export default Contact;