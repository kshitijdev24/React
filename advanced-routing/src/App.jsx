import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Product from './pages/Product'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import NotFound from './pages/NotFound'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/product" element={<Product />}>
          <Route path='men' element={<Men />}></Route>
          <Route path='women' element={<Women />}></Route>
          <Route path='kids'  element={<Kids/>}></Route>
        </Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path='*' element={<NotFound />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:Id' element={<CourseDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App