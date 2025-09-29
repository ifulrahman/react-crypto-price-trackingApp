import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
import Signup from './pages/SignUp/SignUp'
import FAQ from './pages/FAQ/FAQ'
import Blog from './pages/Blog/Blog'
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className='app'>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coin/:coinId" element={<Coin />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App