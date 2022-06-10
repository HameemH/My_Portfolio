import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Details from './Details';

const Project = ({ project }) => {
    const { id, Name, img, live, client, server, description, } = project;
    console.log(live);
    console.log(project);


    return (
        <div className=''>
            <div class="card  bg-base-100 shadow-xl">
                <figure class="px-10 mt-5 pt-10 overflow-y-scroll overflow-clip min-h-96">
                    <img src={img} className=' min-w-full' alt="Projects" class="rounded-xl" />
                </figure>
                <div class="card-body  ">
                    <div className='flex justify-between '>
                        <h2 class="card-title text-2xl">{Name}</h2>
                        <a target="_blank" href={live}>    <button class="btn  hover:bg-transparent hover:border-orange-700 hover:text-orange-700 bg-orange-700  border border-orange-700">Live Site</button></a>
                    </div>
                    <p>{description}</p>
                    <div class="card-actions flex justify-end">
                        <a target="_blank" href={client}>    <button class="btn  hover:bg-transparent hover:border-orange-700 hover:text-orange-700 bg-orange-700  border border-orange-700">Client Code</button></a>
                        {
                            server === '' ? null : <a target="_blank" href={server}>    <button class="btn  hover:bg-transparent hover:border-orange-700 hover:text-orange-700 bg-orange-700  border border-orange-700">Server Code</button></a>
                        }
                        <label for='my-modal' class="btn  hover:bg-transparent hover:border-orange-700 hover:text-orange-700 bg-orange-700  border border-orange-700">Details</label>
                    </div>
                </div>
            </div>
            <Details project={project}></Details>
        </div>
    );
};

export default Project;