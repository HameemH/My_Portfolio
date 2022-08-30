import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { BsPersonFill,BsFillChatTextFill } from "react-icons/bs";
import { RiProjector2Fill } from "react-icons/ri";

const Sidenav = () => {
    return (
        <div className='w-full mx-auto'>
             <h1 className='text-6xl font-bold text-center py-10'>H<span className='text-orange-600'>M</span>H</h1>
             <ul class="menu  p-4">
                 
                        <li><a href='#banner' className='link-hover mx-auto text-2xl active:text-orange-500'><AiFillHome></AiFillHome>Home</a></li><hr className='mr-1'/>
                        <li><a href='#about' className='target:text-orange-400 link-hover mx-auto  text-2xl active:text-orange-500'><BsPersonFill></BsPersonFill>About</a></li><hr className='mr-1'/>
                        <li><a href='#projects' className='target:text-orange-400 link-hover mx-auto  text-2xl active:text-orange-500'><RiProjector2Fill></RiProjector2Fill>Projects</a></li><hr className='mr-1'/>
                        <li><a href='#contact ' className='link-hover mx-auto  text-2xl active:text-orange-500'><BsFillChatTextFill></BsFillChatTextFill>  Contact</a></li><hr className='mr-1'/>
                    </ul>
        </div>
    );
};

export default Sidenav;