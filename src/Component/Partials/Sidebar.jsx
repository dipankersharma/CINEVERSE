import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar w-[20%] h-full  border-r-2 border-zinc-500 p-10 ">
  <h1 className='text-2xl text-white font-bold'>
  <i className="ri-tv-fill text-[#6556CD] mr-2 "></i>
   <span className=''> SCSBD</span>
  </h1>
  <nav className='flex flex-col text-zinc-400 gap-2 mb-2'>
    <h1 className='text-white font-semibold text-xl mt-10 mb-5'> New Feeds</h1>
    <Link to='/trending' className='hover:bg-[#6556CD] text-white duration-300 rounded-lg p-3'> <i className="mr-1 ri-fire-fill"></i>Trending</Link>
    <Link to= '/popular' className='hover:bg-[#6556CD] text-white duration-300 rounded-lg p-3'> <i className=" mr-2 ri-bard-fill"></i>Popular</Link>
    <Link to='/movie' className='hover:bg-[#6556CD] text-white duration-300 rounded-lg p-3'> <i className=" mr-2 ri-movie-2-fill"></i>Movies</Link>
    <Link to= '/tv' className='hover:bg-[#6556CD] text-white duration-300 rounded-lg p-3'> <i className=" mr-2 ri-tv-2-fill"></i>Tv-series</Link>
    <Link to= '/people' className='hover:bg-[#6556CD] text-white duration-300 rounded-lg p-3'> <i className="mr-2 ri-team-fill"></i>People</Link>
  </nav>
  <hr/>
  <nav className='flex flex-col text-zinc-400 gap-2'>
    <h1 className='text-white font-semibold text-xl mt-10 mb-5'> Website information</h1>
    <Link className='hover:bg-[#6556CD] text-white duration-300 rounded-lg p-3'><i className=" mr-2 ri-information-2-fill"></i>Abou SCSDB</Link>
    <Link className='hover:bg-[#6556CD] text-white duration-300 rounded-lg p-3'> <i className="mr-1 ri-contacts-book-3-fill"></i> Contact Us</Link>
  </nav>
    </div>
  )
}

export default Sidebar
