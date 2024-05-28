import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { asyncloadmovie } from '../Store/Actions/MovieAction'

function MovieDetails() {
 const {id} = useParams()
 const dispatch = useDispatch()
 useEffect(()=>{
      dispatch(asyncloadmovie(id))
 },[])

 const data = useSelector((state)=>state.Movie)

 
  return (
    <div className='text-white'>
      hlooo
    </div>
  )
}

export default MovieDetails
