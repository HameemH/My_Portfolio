import React from 'react';
import Aboutme from './Aboutme';
import Banner from './Banner';
import Navbar from './Navbar';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    return (
        <div className='relative'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;