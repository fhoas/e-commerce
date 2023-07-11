import './App.css'
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Shop from './pages/shop'
import Cart from './pages/cart'
import Discount from './components/discount'
import { mainContext  } from './context'
import { useState } from 'react'

function App() {

  const [bir, biriDeyisen] = useState(1)

  const data = {
    bir,
    biriDeyisen
  }

  return ( 
    <mainContext.Provider value={data}>
  <Router>
    <Discount/>
    <Header/>
    <Routes >
      <Route path='/' element={<Shop/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
  </Router>
    </mainContext.Provider>
  )
}

export default App
