import React, { useEffect, useState } from 'react'
import Sidebar from './Partials/Sidebar'
import Navbar from './Partials/Navbar'
import axios from '../Utils/Axios';
import Header from './Partials/Header'

function Home() {
  document.title = 'SCSDB | Homepage'

 const [wallpaper , setWallpaper] = useState(null)


 const getHeaderWallpaper = async () => {
  try {
    
    const response = await axios.get('/trending/all/week');
    console.log(response.data.results);
    let randomData = response.data.results[(Math.random()*response.data.results.length).toFixed()]
    setWallpaper(randomData);
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  !wallpaper && getHeaderWallpaper();
}, []);
  return wallpaper ? (
    <>
      <Sidebar/>
      <div className="navbar w-[80%] h-full">
        <Navbar/>
        <Header value = {wallpaper}/>

      </div>
    </>
  ):<h1>Loading..</h1>
}

export default Home
