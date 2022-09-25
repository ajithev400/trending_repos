import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
const Routers = () => {
  return (
    <Routes>
        <Route path ='/login' element = {<LoginPage/>} />
        <Route path ='/' element = {<HomePage/>} />
    </Routes>
  )
}

export default Routers