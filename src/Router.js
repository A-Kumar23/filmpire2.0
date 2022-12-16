import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Actors from './Component/Actors/Actors'
import MovieInformation from './Component/MovieInformation/MovieInformation'
import Movie from './Component/Movies/Movies'
import Profile from './Component/Profile/Profile'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={ <Movie/> }/>
        <Route path='/movie/:id' element={ <MovieInformation/> }/>
        <Route path='/profile/:id' element={ <Profile/> }/>
        <Route path='/actor/:id' element={ <Actors/> }/>
    </Routes>
  )
}

export default Router