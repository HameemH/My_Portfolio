import React from 'react';
import backgroundLight from '../Assets/backgroundLight.jpg';
import Typical from 'react-typical'
const Banner = () => {
    return (
        <div  style={{background:`url(${backgroundLight})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        overflow:'hidden',
        
        backgroundRepeat: 'no-repeat',
       
        height: '100vh'}}>
           
            
        </div>
    );
};

export default Banner;