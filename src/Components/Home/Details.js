import React from 'react';
import { useParams } from 'react-router-dom';

const Details = ({project}) => {
    const {  Name, img,img1,img2,techs, live, client, server, description } = project;
console.log(techs);
    const { id } = useParams()
    return (
        <div>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
               <div>
               <figure class="px-10 pt-10 overflow-y-scroll overflow-clip max-h-96">
                    <img src={img} className=' min-w-full' alt="Projects" class="rounded-xl" />
                </figure>
               </div>
                    <h3 class="font-bold text-lg">{Name}</h3>
                    <p class="py-4">{description}</p>
                    <div className='grid grid-cols-4 gap-2'>
                    {
                        
                        techs.map(tech=><p className='p-3 bg-slate-50'>{tech}</p>
                        )
                    }</div>
                    <div class="modal-action">
                        <label for="my-modal" class="btn">Done</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;