import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Loader from './Component/Loader'
import Trending from './Component/Trending'

function App() {
  return (
    <div className='bg-[#1F1E24] w-screen h-screen flex overflow-hidden'>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/trending' element={<Trending/>}/>
    </Routes>
    </div>
  )
}

export default App

