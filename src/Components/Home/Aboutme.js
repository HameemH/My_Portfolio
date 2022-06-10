import React from 'react';

const Aboutme = () => {
    return (
        <div id='about' className='min-h-screen p-5'>
            <div className='relative text-center flex flex-col'>
                <h1 className='lg:text-9xl text-4xl opacity-5 font-bold text-center'>ABOUT ME</h1>
                <h1 className='lg:text-6xl text-xl lg:mt-8 mt-1 absolute self-center'>Know Me More</h1>
                </div>
                <div className='flex justify-start '>
                    <div>
                       <h1 className='lg:text-3xl text-2xl lg:ml-9 lg:mt-10 '>Hi, I am <span className='text-orange-600'>HAMEEM HOSSAIN</span>,A Web Developer</h1>
                       <p className=' text-2xl lg:ml-9 lg:mt-10 '>I am a Junior Web Developer based in Bangladesh  working with MERN stack.It's really important for anyone to make a website not only look cool but also functional and optimized.My journey in TECH is really focused on this inspiration.Thus this inspiration also helps to keep motivated to learn a bit from this ocean called Technology everyday.</p>
                       <p className=' text-2xl lg:ml-9 lg:mt-10 '>
                           As I have Learned and learning, I think I can now help people and business with their most of the work they need very efficiently with commitment.Also as a dedicated and fast learner I can adapt myself to any environment of technology or any other circumstances for the betterment of the project I am working on.
                       </p>
                    </div>
                   
                </div>
            </div>
       
    );
};

export default Aboutme;