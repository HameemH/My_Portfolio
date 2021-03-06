import React from 'react';

const Navbar = () => {
  return (
    <div className=''>
      <div class="navbar lg:hidden  text-black fixed z-50 top-0 bg-cyan-900">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-cyan-700 rounded-box w-52">
              <li><a href='#banner' className='link-hover mx-auto text-white text-2xl active:text-orange-500'>Home</a></li>
              <li><a href='#about' className='target:text-orange-400 link-hover mx-auto text-white text-2xl active:text-orange-500'>About</a></li>
              <li><a href='#projects' className='target:text-orange-400 link-hover mx-auto text-white text-2xl active:text-orange-500'>Projects</a></li>
              <li><a href='#contact ' className='link-hover mx-auto text-white text-2xl active:text-orange-500'>Contact</a></li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">HMH</a>
        </div>
        <div class="navbar-end hidden lg:flex">

        </div>

      </div>
    </div>
  );
};

export default Navbar;