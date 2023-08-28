import React from 'react'
import Footer from './components/footer/Footer'
import Header from './components/Header/Header'
import Routers from './routers/Routers'


import './App.css'



const App = () => {

  const URL =  '/Hello';


  return (
    <>

      <Header URL={URL}/>
      <Routers URL={URL}/>
      <Footer URL={URL}/>
    </>
  )
}

export default App