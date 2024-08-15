import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Category from './components/category/Category'
import Product from './components/product/Product'
import Footer from './components/footer/Footer'
import Home from './router/home/Home'
import Catalog from './router/catalog/Catalog'
import Contact from './router/contact/Contact'
import { Routes,Route } from "react-router-dom"
import Dostafka from './router/dostafka/Dostafka'
import Uslogiya from './router/uslogiya/Uslogiya'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/catalog' element={<Catalog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/dostafka' element={<Dostafka/>}/>
      <Route path='/uslogiya' element={<Uslogiya/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
