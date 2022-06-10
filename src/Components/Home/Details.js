import React from 'react';
import { useParams } from 'react-router-dom';

const Details = ({ project }) => {
    const { Name, img, img1, img2, techs, live, client, server, description, points } = project;
    console.log(techs);
    const { id } = useParams()
    return (
        <div>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <div className='w-full'>
                        <figure class="px-10 pt-10 overflow-y-scroll overflow-clip max-h-96 w-full">
                            <div class="carousel w-full">
                                <div id="item1" class="carousel-item w-full">
                                    <img src={img} class="w-full" />
                                </div>
                                <div id="item2" class="carousel-item w-full">
                                    <img src={img1} class="" />
                                </div>
                                <div id="item3" class="carousel-item w-full">
                                    <img src={img2} class="" />
                                </div>
                               
                            </div>
                            <div class="flex justify-center w-full py-2 gap-2">
                                <a href="#item1" class="btn btn-xs">1</a>
                                <a href="#item2" class="btn btn-xs">2</a>
                                <a href="#item3" class="btn btn-xs">3</a>
                                
                            </div>
                        </figure>
                    </div>
                    <h3 class="font-bold text-lg">{Name}</h3>
                    <p class="py-4">{description}</p>
                    <div className='grid grid-cols-4 gap-2'>
                        {

                            techs.map(tech => <p className='p-3 bg-slate-50'>{tech}</p>
                            )
                        }</div>
                    {
                        points.map(point => <p>-{point}</p>)
                    }
                    <div class="modal-action">
                        <label for="my-modal" class="btn">Done</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;