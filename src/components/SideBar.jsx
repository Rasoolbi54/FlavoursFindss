import { Heart, Home } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div>
      <DesktopSideBar />
      <MobileSideBar />
    </div>
  );
}

export default SideBar;

const DesktopSideBar = () => {
  return (
    <div className='p-3 md:p-10 border-r  h-full w-24 md:w-64 hidden sm:block'>
      <div className='flex flex-col fixed top-10'>
        <h2 className='text-3xl lg:text-3xl font-bold -ms-2 underline mb-20'>Flavours Find</h2>
      </div>
      <div className='flex flex-col items-center md:items-start gap-8'>
        <Link to={"/"}  >
        </Link> 


        <Link to={"/"}  className='flex fixed mt-40 gap-1'>
          <Home size={"24"}  />
          <span className='font-bold hidden md:block'>Home</span>
        </Link> 

        <Link to={"/favorites"}  className='flex fixed mt-52 gap-1'>
          <Heart size={"24"} />
          <span className='font-bold hidden md:block'>Favorites</span>
        </Link>
       
      </div>
    </div>
  );
};


const MobileSideBar = ()=>{
    return(
        <div className='flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white z-10 p-2 sm:hidden'>
            <Link to={"/"}  className='flex gap-1'>
            <Home size={"24"} className='coursor-pointer' />
            </Link> 
            <Link to={"/favorites"}  className='flex gap-1'>
            <Heart size={"24"} className='coursor-pointer'/>
            </Link>
           
        </div>
    )
}
