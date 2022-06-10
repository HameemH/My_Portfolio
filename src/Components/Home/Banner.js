import React from 'react';
import backgroundLight from '../Assets/backgroundLight.jpg';
import backgroundLightedited from '../Assets/backgroundLightedited.jpg';
import TypeWriterEffect from 'react-typewriter-effect';
import { BsGithub,BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare} from "react-icons/fa";
const Banner = () => {
    return (
        <div id='banner' className='flex justify-center flex-col items-center bg-opacity-0 ' style={{background:`url(${backgroundLightedited})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        
        WebkitBackdropFilter:'blur(8px)',
        overflow:'hidden',
        backgroundBlendMode: 'multiply',
        backgroundRepeat: 'no-repeat',
        
        height: '100vh'}}>
           
      <div className='flex flex-col opacity-100'>
      <h1 className='lg:text-5xl mb-5 text-2xl lg:pr-5 opacity-100 text-white inline-flex'>
            Hello, I am <span className='lg:text-5xl text-2xl ml-2 text-orange-700'>
          
      <TypeWriterEffect 
            
            startDelay={100}
            cursorColor="black"
            text="Hameem Hossain"
            typeSpeed={100}
            ></TypeWriterEffect>
      </span>
      </h1>
        <h1 className='lg:text-5xl  text-2xl lg:pr-5 lg:mr-8 text-white inline-flex'>
       And I am a <span className='lg:text-5xl text-2xl ml-2 text-orange-700'>
          
    
      <TypeWriterEffect 
            
            startDelay={100}
            cursorColor="black"
            text="Web Developer"
            typeSpeed={200}
            ></TypeWriterEffect>
      </span>
        </h1>
      </div>
      <div className='flex my-6'>
     <a target="_blank" href="https://github.com/HameemH"> <BsGithub className='text-5xl m-4 text-orange-700   hover:text-orange-500'></BsGithub></a>
     <a target="_blank" href="www.linkedin.com/in/hameem-hossain">  <BsLinkedin className='text-5xl m-4 text-orange-700   hover:text-orange-500'></BsLinkedin></a>
      <a target="_blank" href=""><FaTwitterSquare className='text-5xl m-4 text-orange-700   hover:text-orange-500'></FaTwitterSquare></a>
      </div>
      <div>
         <a target="_blank" href="https://drive.google.com/uc?export=download&id=1Tg3jI6w4VaS2f4Ii_iJbKEgLlfcNtmbf"> <button className='btn btn-outline  hover:bg-orange-700 border border-orange-700 text-orange-700'>Download Resume</button></a>
         <a target="_blank" href="https://drive.google.com/file/d/1Tg3jI6w4VaS2f4Ii_iJbKEgLlfcNtmbf/view?usp=sharing"> <button className='btn btn-outline  hover:bg-orange-700 border border-orange-700 text-orange-700'>See Resume</button></a>
      </div>
        </div>
    );
};

export default Banner;