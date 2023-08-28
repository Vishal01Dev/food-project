import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Menu from '../pages/Menu'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import Register from '../pages/Register'


const Routers = ({URL}) => {
  return (
    <Routes>
      <Route path={`${URL}/`} element={<Home URL={URL}/>} />
      <Route path={`${URL}/home`} element={<Home URL={URL}/>} />
      <Route path={`${URL}/about`} element={<About URL={URL}/>} />
      <Route path={`${URL}/contact`} element={<Contact URL={URL}/>} />
      <Route path={`${URL}/menu`} element={<Menu URL={URL}/>} />
      <Route path={`${URL}/cart`} element={<Cart URL={URL}/>} />
      <Route path={`${URL}/login`} element={<Login URL={URL}/>} />
      <Route path={`${URL}/register`} element={<Register URL={URL}/>} />
      <Route path={`${URL}/checkout`} element={<Checkout URL={URL}/>} />
      <Route path={`${URL}/profile`} element={<Profile URL={URL}/>} />
    </Routes>
  )
}

export default Routers