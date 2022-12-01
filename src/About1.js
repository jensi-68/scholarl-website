import Articles from './Articles';
import Course1 from './Course1';
import Expert from './Experts';
import Testimonial from './Testimonial';
import Footer from './Footer';



function About1()
{
    return(
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
                <div class="top-btn d-flex align-text-bottom justify-content-end align-items-center">
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
                    <li><a href="#">blog</a></li>
                    <li><a href="#">pages<i class="fa-solid fa-chevron-down"></i></a>
                      <ul className="sub-menu">
                        <li><a href="#">blog details</a></li>
                        <li><a href="#">course details</a></li>
                        <li><a href="#">faq page</a></li>
                        <li><a href="#">404 page</a></li>
                      </ul></li>
                    <li><a href="#">contact</a></li>
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


      {/* ---------------------------------------------------------------about page */}
      <section className="breadcrumb-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>about page</h2>
              <ul>
                <li><a href="/home2">home</a></li>
                <li>/</li>
                <li>about</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* --------------------------------------------------------------about section */}
      <section className="about-section padding-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <span className="tagline">Learn Anything</span>
              <h2 className="margin-top-20">Benefit from our online learning about</h2>
              <p className="margin-top-20">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit ullamco</p>
                      <ul className="margin-top-20 list-unstyled">
                        <li><span className="list-icon"><img src={require('./assets/asset 11.png')} alt="" /></span><span>Creative Study Pattern</span></li>
                        <li><span className="list-icon"><img src={require('./assets/asset 12.png')} alt="" /></span><span>Quick Crash Courses</span></li>
                        <li><span className="list-icon"><img src={require('./assets/asset 13.png')} alt="" /></span><span>Provided with Experimental Examples</span></li>
                        <li><span className="list-icon"><img src={require('./assets/asset 14.png')} alt="" /></span><span>Certification Awarded</span></li>
                      </ul>
                      <div className="about-btn margin-top-40">
                        <a href="#" className='template-btn'>Discover New Courses</a>
                      </div>
            </div>

            <div className="col-lg-6">
              <div className="stylist-gallery">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="single-image image-1">
                      <img src={require('./assets/asset 15.png')} alt="" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-image image-2">
                      <img src={require('./assets/asset 16.png')} alt="" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-image image-3">
                      <img src={require('./assets/asset 17.png')} alt="" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-image image-4">
                      <img src={require('./assets/asset 18.png')} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <Course1/> */}
      <Expert/>
      <Testimonial/>
      <Articles/>
      <Footer/>
        </>
    )
}
export default About1;