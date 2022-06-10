import React from 'react';
import Aboutme from './Aboutme';
import Banner from './Banner';
import Navbar from './Navbar';
import Projects from './Projects';
import Contact from './Contact';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className=''>

            <div className='flex'>
                <div className='w-[15vw] hidden lg:block z-50 bg-cyan-900 fixed min-h-screen'>
                    <ul class="menu  p-4">
                        <li><a href='#banner' className='link-hover mx-auto text-white text-2xl active:text-orange-500'>Home</a></li>
                        <li><a href='#about' className='target:text-orange-400 link-hover mx-auto text-white text-2xl active:text-orange-500'>About</a></li>
                        <li><a href='#projects' className='target:text-orange-400 link-hover mx-auto text-white text-2xl active:text-orange-500'>Projects</a></li>
                        <li><a href='#contact ' className='link-hover mx-auto text-white text-2xl active:text-orange-500'>Contact</a></li>
                    </ul>
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