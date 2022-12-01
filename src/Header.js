import Home2 from './Home2';
import Slider from './Slider';
import Skill from './Skill';
import Category from './Category';
import Counter from './Counter';
import Testimonial from './Testimonial';
import Expert from './Experts';
import Footer from './Footer';

import Teaching from './Teaching';



const Header = () => {
  return (
    <>
      <header class="header-1">
        {/* --------------------------------navbar */}
        <nav class="topbar-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-auto">
                <div class="top-contact d-flex">
                  <a href="#"><span><i class="fa-solid fa-phone"></i></span> +(402) 762 441 83</a>
                  <a href="#"><span><i class="fa-solid fa-envelope margin-left"></i></span>support@example.com</a>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="top-btn d-flex align-text-bottom justify-content-end align-items-right">
                  <a href="#"><span><i class="fa-solid fa-right-to-bracket"></i></span> Login</a>
                  <a href="#"><span><i class="fa-solid fa-user margin-left"></i></span>Register</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div class="menu-area">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-3 col-lg-2">
                <div className="logo-area">
                  <a href="#"><img src={require('./assets/asset 0.png')} alt="" /></a>
                </div>
              </div>
              <div class="col-lg-10 d-lg-block d-none">
                <nav className="mobile-menu d-flex" style={{ display: "block" }}>
                  <ul class="m-0 p-0 main-menu d-flex align-items-center justify-content-center">
                    <li><a href="#">home<i class="fa-solid fa-chevron-down"></i></a>
                      <ul className="sub-menu">
                        <li><a href="#">home 01</a></li>
                        <li><a href="home2">home 02</a></li>
                        <li><a href="#">home 03</a></li>
                      </ul></li>
                    <li><a href="about1">about</a></li>
                    <li><a href="course1">courses</a></li>
                    <li><a href="blog">blog</a></li>
                    <li><a href="#">pages<i class="fa-solid fa-chevron-down"></i></a>
                      <ul className="sub-menu">
                        <li><a href="blog">blog details</a></li>
                        <li><a href="course1">course details</a></li>
                        <li><a href="#">faq page</a></li>
                        <li><a href="#">404 page</a></li>
                      </ul></li>
                    <li><a href="contact">contact</a></li>
                    <div class="menu-btn">
                      <a href="#">get started</a>
                    </div>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      <div className="d-block d-lg-none toggle"><i class="fa-solid fa-bars"></i></div>


      </header>
      <Slider />
      {<Category/>}
      <Skill/>

      <Teaching/>
      <Counter/>
      <Expert/>
      <Testimonial/>
      <Footer/>



    </>
  )
}
export default Header;