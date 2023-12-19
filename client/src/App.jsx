import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
export const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path='/'  element={<Home/>} />
    <Route path='/about'  element={<About/>} />
    <Route path='/signin'  element={<Signin/>} />
    <Route path='/signup'  element={<SignUp/>} />
    <Route path='/profile'  element={<Profile/>} />
  </Routes>

  </BrowserRouter>
}
