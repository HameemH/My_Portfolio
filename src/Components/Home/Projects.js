import React from 'react';
import project1 from '../Assets/project1.png'
import project2 from '../Assets/project2.png'
import project3 from '../Assets/project3.png'
import project4 from '../Assets/project4.png'
import project5 from '../Assets/project5.png'
import Project from './Project';

const Projects = () => {
    const projects =[
        {id:1, Name:'TOOLTICARP', img:project1,live:'https://assignment-12-eef58.web.app/',client:'https://github.com/HameemH/Toolticarp-client-assign12', server:'https://github.com/HameemH/Toolticarp-server-assign12'},
        {id:2, Name:'Jonto Inventory', img:project2,live:'https://assignment11-3ec5e.web.app/',client:'https://github.com/HameemH/J-inventory-client-assign11', server:'https://github.com/HameemH/J-inventory-server-assign11'},
        {id:3, Name:'Adorsho Book Shop', img:project3,live:'https://assignment-00008.netlify.app/',client:'https://github.com/HameemH/Adorsho-book-shop-assign08', server:''},
        {id:4, Name:'Becha-Kena Sikkha', img:project4,live:'https://assignment-x-68d60.web.app/home',client:'https://github.com/HameemH/Bechakena-sikkha-assign10', server:''},
        {id:5, Name:'Digitronics', img:project5,live:'https://assignment-0009.netlify.app/',client:'https://github.com/HameemH/Digitronics-assign09', server:''}
    ]
    return (
        <div>
            <h1 className='text-center text-5xl'>My <span className='text-center text-5xl text-orange-700'>Projects</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mx-auto px-3 lg:px-10 mt-8'>
               {
                   projects.map(project=><Project key={project.id} project={project}></Project>)
               }
            </div>
        </div>
    );
};

export default Projects;