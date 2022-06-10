import React from 'react';
import project1 from '../Assets/project1.jpeg'
import project2 from '../Assets/project2.jpeg'
import project3 from '../Assets/project3.jpeg'
import project4 from '../Assets/project4.png'
import project5 from '../Assets/project5.png'
import Project from './Project';
import backgroundLightedited from '../Assets/backgroundLightedited.jpg';


const Projects = () => {
  /* const extra =[
    {id:4, Name:'Becha-Kena Sikkha', description:'A react based Website with firebase login Integrated', img:project4,live:'https://assignment-x-68d60.web.app/home',client:'https://github.com/HameemH/Bechakena-sikkha-assign10', server:''},
    {id:5, Name:'Digitronics', description:'A Website Mainly focused on React Router', img:project5,live:'https://assignment-0009.netlify.app/',client:'https://github.com/HameemH/Digitronics-assign09', server:''}
  ] */
    const projects =[
        {id:1, Name:'TOOLTICARP', description:'A full-stack(MERN) Tool manufacturer website', img:project1,live:'https://assignment-12-eef58.web.app/',client:'https://github.com/HameemH/Toolticarp-client-assign12', server:'https://github.com/HameemH/Toolticarp-server-assign12'},
        {id:2, Name:'Jonto Inventory', description:'A full-stack Inventory(MERN) management website',img:project2,live:'https://assignment11-3ec5e.web.app/',client:'https://github.com/HameemH/J-inventory-client-assign11', server:'https://github.com/HameemH/J-inventory-server-assign11'},
        {id:3, Name:'Adorsho Book Shop', description:'A React Based Book wishlist Website', img:project3,live:'https://assignment-00008.netlify.app/',client:'https://github.com/HameemH/Adorsho-book-shop-assign08', server:''},
       
    ]
    return (
        <div className='min-h-[100vh]  py-5  ' id='projects' >
          <div className=''>
          <h1 className='text-center text-5xl ' ></h1>
          <div className='relative text-center flex flex-col'>
                <h1 className='lg:text-9xl text-4xl opacity-5 font-bold text-center'>PROJECTS</h1>
                <h1 className='lg:text-6xl text-xl lg:mt-8 mt-1 absolute self-center'>My <span className='text-center text-6xl text-orange-500'>Projects</span></h1>
                </div>
            <div className='grid  grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 mx-auto px-3 lg:px-10 mt-8'>
               {
                   projects.map(project=><Project key={project.id} project={project}></Project>)
               }
            </div>
          </div>
        </div>
    );
};

export default Projects;