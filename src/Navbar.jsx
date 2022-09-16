import React, { useState } from "react";

const Navbar = () => {
  const [hide,setHide]=useState(true);
  return (
    <div>
      <div class="px-12 py-4 bg-white justify-between items-center md:flex hidden">
        <img src="logo.png" width="150" className="cursor-pointer hidden lg:block"/>
        <img src="logo2.jpg" width="150" className="cursor-pointer lg:hidden"/>
        <div className="border-2 border-slat-600 flex rounded-full py-3 px-2 cursor-pointer hover:shadow-lg shadow-white-500/50 items-center">
          <div className="divide-x grid md:grid-cols-3">
            <a href="" className="px-3">
              Anywhere
            </a>
            <a href="" className="px-3">
              Any week
            </a>
            <a href="" className="px-3 text-slate-400">
              Add guests{" "}
            </a>
          </div>
          <div className="w-8 h-8 bg-red-400 rounded-full  text-white hover:cursor-pointer text-center ">
            <span style={{ display: "inline-block" }} className="pt-1">
              <ion-icon name="search"></ion-icon>
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <a href="" className="hover:bg-slate-100 rounded-full px-4 py-2">Become a host</a>
          <a href="" className="px-4 hover:bg-slate-100 rounded-full text-center py-2">
          <i class="fa-solid fa-globe"></i>
          </a>
          <div className="px-4">
          <div class="relative cursor-pointer px-4 border-2 border-slat-600 flex rounded-full py-2 hover:shadow-lg shadow-white-500/50 items-center" onClick={()=>{setHide(!hide)}}>
          <i class="fa-solid fa-bars px-1"></i>
          <i class="fa-solid fa-user px-1"></i>
          </div>
          </div>
          <div className={`absolute top-24 right-24 mt-3 bg-white shadow-lg shadow-white-500/50 w-60 h-70 rounded ${hide?"hidden":""}`}>
               <ul>
                <li className="py-3 px-3 cursor-pointer">Sign Up</li>
                <li className="py-3 px-3 cursor-pointer">Login</li>
                <hr />
                <li className="py-3 px-3 cursor-pointer">Host your home</li>
                <li className="py-3 px-3 cursor-pointer">Host an experience</li>
                <li className="py-3 px-3 cursor-pointer">Help</li>
               </ul>
          </div>
          
        </div>
        
      </div>
      <div className="md:hidden py-10 px-5">
      <div className="border-2 border-slat-600 flex rounded-full py-3 px-2 cursor-pointer hover:shadow-lg shadow-white-500/50 items-center ">
      <div className="flex h-10">
      <i class="fa-solid fa-magnifying-glass pt-1 pl-1"></i>
      <div>
      <p className="font-semibold pl-2">Where to?</p>
      <span className="text-sm text-slat-200 px-1">Anywhere</span>
      <span className="text-sm text-slat-200 px-1">Anyweek</span>
      <span className="text-sm text-slat-200 px-1">Add guest</span>
      </div>
      </div>
      </div>
      </div>
      <hr />
    </div>
    
  );
};

export default Navbar;
