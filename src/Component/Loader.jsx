import React from 'react'
import loader from'../../public/giphy.gif'
function Loader() {
  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center'>
      <img src={loader} alt="" />
    </div>
  )
}

export default Loader
