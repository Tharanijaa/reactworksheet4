import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>

      <Footer />
    </>


  )
}

export default App