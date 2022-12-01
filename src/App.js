import 'bootstrap/dist/css/bootstrap.min.css';
import './all.min.css';
import './App.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Routes, Route } from "react-router-dom"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header from './Header';

import Home2 from './Home2';
import About1 from './About1';
import Course1 from './Course1';
import Blog from './Blog';
import Contact from './Contact';

// https://scholarl.codebasket.net/
// https://themazine.com/html/Lebari_new/lebari/lebari/index-5.html
// https://react-educal.netlify.app/home-two

  
function App() {
  return (
   <>

    <Routes>
      
     
      <Route path='/' element={<Header/>}/>
      <Route path='/Home2' element={<Home2/>}/>
      <Route path='/About1' element={<About1/>}/>
      <Route path='/Course1' element={<Course1/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      </Routes>
   </>
  );
}

export default App;
