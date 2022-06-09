import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const { id, Name, img, live, client, server } = project;
    console.log(live);
    console.log(project);


    return (
        <div>
            <div class="card lg:w-lg bg-base-100 shadow-xl image-full">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <div className='flex justify-between '>
                        <h2 class="card-title">{Name}</h2>
                        <a href={live}>    <button class="btn  hover:bg-transparent hover:border-orange-700 hover:text-orange-700 bg-orange-700  border border-orange-700">Live Site</button></a>
                    </div>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <div className=''>
                            <a href={client}>    <button class="btn  hover:bg-transparent hover:border-orange-700 hover:text-orange-700 bg-orange-700  border border-orange-700">Client Code</button></a>
                            {
                                server===''? null:<a href={server}>    <button class="btn  hover:bg-transparent hover:border-orange-700 hover:text-orange-700 bg-orange-700  border border-orange-700">Server Code</button></a>
                            }
                            <a >    <button class="btn mt-3 hover:bg-transparent hover:border-orange-700 hover:text-orange-700 bg-orange-700  border border-orange-700">Details</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;