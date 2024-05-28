import React, { useEffect, useState } from 'react'
import Sidebar from './Partials/Sidebar'
import Navbar from './Partials/Navbar'
import axios from '../Utils/Axios';
import Header from './Partials/Header'
import HorizontalCard from './Partials/HorizontalCard';
import Dropdown from './Partials/Dropdown';
import Loader from './Loader';

function Home() {
  document.title = 'SCSDB | Homepage'

 const [wallpaper , setWallpaper] = useState(null)
 const [trending, setTrending] = useState(null)
 const [categories, setCategories] = useState('all')

 const getHeaderWallpaper = async () => {
  try {
    
    const response = await axios.get('/trending/all/week');
    let randomData = response.data.results[(Math.random()*response.data.results.length).toFixed()]
    setWallpaper(randomData);
  } catch (error) {
    console.log(error);
  }
};

const getTrending = async () => {
  try {
    
    const {data} = await axios.get(`/trending/${categories}/week`)
   setTrending(data.results)
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  !wallpaper && getHeaderWallpaper();
   getTrending()
}, [categories]);
  return wallpaper&& trending ? (
    <>
      <Sidebar/>
      <div className="navbar w-[80%] h-full overflow-y-auto overflow-x-hidden">
        <Navbar/>
        <Header value = {wallpaper}/>
        <div className="mb-2 flex justify-between p-5">
        <h1 className="text-2xl font-semibold text-zinc-400 ">Trending</h1>
        <Dropdown title="filter" options={["tv",'movie','all']} func = {(e)=>setCategories(e.target.value)}/>
      </div>
        <HorizontalCard data = {trending}/>
      </div>
    </>
  ):(<Loader/>)
}

export default Home
