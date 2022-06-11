import React from 'react';
import Aboutme from './Aboutme';
import Banner from './Banner';
import Navbar from './Navbar';
import Projects from './Projects';
import Contact from './Contact';
import { NavLink } from 'react-router-dom';
import Sidenav from './Sidenav';

const Home = () => {
    return (
        <div className=''>

            <div className='flex'>
                <div className='w-[15vw] hidden lg:block z-50  fixed min-h-screen'>
                   <Sidenav></Sidenav>
                </div>

                <div className='lg:w-[85vw] lg:ml-auto'>
                    
                    <Navbar></Navbar>
                    <Banner></Banner>
                    <Aboutme></Aboutme>
                    <Projects></Projects>
                    <Contact></Contact>
                </div>

            </div>
        </div>
    );
};

export default Home;