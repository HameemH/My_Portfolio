import React from 'react';
import Aboutme from './Aboutme';
import Banner from './Banner';
import Navbar from './Navbar';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    return (
        <div className=''>
           
            <div className='flex'>
            <div className='w-[15vw] hidden lg:block z-50 bg-cyan-900 fixed min-h-screen'>
                        <ul class="menu  p-4">
                              <li><a href='#banner'>Home</a></li>
                              <li><a href='#projects'>Projects</a></li>
                              <li><a href='#contact'>Contact</a></li>
                        </ul>
                  </div>
            
            <div className='lg:w-[85vw] lg:ml-auto'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Projects></Projects>
            <Contact></Contact>
            </div>
           
            </div>
        </div>
    );
};

export default Home;