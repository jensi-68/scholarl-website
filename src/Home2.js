import './pages.css';
import OwlCarousel from 'react-owl-carousel';
import Footer from './Footer';
import Testimonial from './Testimonial';

import Teaching from './Teaching';
import Course1 from './Course1';

function Home2()
{
    return(
        <>
            <section>
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
                    <li><a href="#">courses</a></li>
                    <li><a href="blog">blog</a></li>
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


      
            </section>

            {/* -----------------------------------------------------------slider */}
            <section className="hero-section-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="hero-con">
                                <span className="tagline">online learning</span>
                                <h1 className="margin-top-20">World’s Leading Machine Learning Courses</h1>
                                <p className="margin-top-20">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
                            <br></br>
                            eiumod tempor incididunt ut
                            labore et dolore
                        
                                </p>
                                <div className="btn-part margin-top-40">
                                    <a href="#" className="template-btn">know more</a>
                                    <div className="video-btn margin-left-20">
                                        <a href="https://www.youtube.com/watch?v=ezbJwaLmOeM" className='play-button d-flex align-items-center'>
                                            <img src={require('./assets2/asset 1.png')} alt="" />
                                            <span className="margin-left-10">play viedo</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="hero-image">
                                <img src={require('./assets2/asset 2.png')} alt="" />
                                <div className="shape-image">
                                    <img src={require('./assets2/asset 3.png')} className="hero-shape item-rotate" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        

        {/* --------------------------------------------------------------about section */}
        <section className="about-section about-section-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="image-area">
                            <img src={require('./assets2/asset 4.jpeg')} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <h2>Benefit from our online learning about</h2>
                            <span className="divider"></span>
                            <p>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit ullamco</p>
                            <ul className="margin-top-20">
                                <li>
                                    <span className="list-icon"><img src={require('./assets2/asset 6.png')} alt="" /></span>
                                    <span>Creative Study Pattern</span>
                                </li>
                                <li>
                                    <span className="list-icon"><img src={require('./assets2/asset 7.png')} alt="" /></span>
                                    <span>Quick
                                    Crash
                                    Courses</span>
                                </li>
                                <li>
                                    <span className="list-icon"><img src={require('./assets2/asset 8.png')} alt="" /></span>
                                    <span>Provided
                                    with Experimental Examples</span>
                                </li>
                                <li>
                                    <span className="list-icon"><img src={require('./assets2/asset 9.png')} alt="" /></span>
                                    <span>Certification Awarded</span>
                                </li>
                            </ul>
                            <div className="about-btn margin-top-40">
                                <a href="#" className='template-btn'>Discover New Courses</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        {/* -----------------------------------------------------------------------------------slider-2 */}

        <div className="container">

        <OwlCarousel className='owl-theme pb-100 text-center align-items-center' loop margin={10}
        nav={true}
        dotsEach={true}
        items={4}
        autoplay={true}

        >
    <div class='item'>
        <div className="slider-3">
            <div className="slider-3-img margin-bottom-30">
                <img src={require('./assets2/asset 10.png')} alt="" />
            </div>
            <h4>
                <a href="#">development</a>
            </h4>
            <span className="margin-top-10">35 Courses</span>
            </div>
    </div>
    <div class='item'>
        <div className="slider-3">
            <div className="slider-3-img margin-bottom-30">
                <img src={require('./assets2/asset 11.png')} alt="" />
            </div>
            <h4>
                <a href="#">content writing</a>
            </h4>
            <span className="margin-top-10">35 Courses</span>
            </div>
    </div>
    <div class='item'>
        <div className="slider-3">
            <div className="slider-3-img margin-bottom-30">
                <img src={require('./assets2/asset 12.png')} alt="" />
            </div>
            <h4>
                <a href="#">architecture</a>
            </h4>
            <span className="margin-top-10">35 Courses</span>
            </div>
    </div>
    <div class='item'>
        <div className="slider-3">
            <div className="slider-3-img margin-bottom-30">
                <img src={require('./assets2/asset 13.png')} alt="" />
            </div>
            <h4>
                <a href="#">programming</a>
            </h4>
            <span className="margin-top-10">35 Courses</span>
            </div>
    </div>
    
</OwlCarousel>
</div>


{/* -----------------------------------------------------video section */}
<section className="video-section pb-100 mt-100">
    <div className="container">
        <div className="row">
            <div className="col-lg-5">
                <div className="video-content">
                    <span className="tagline">
                    Educational for Everyone
                    </span>
                    <h2 className="margin-top-20">Welcome to schooling LMS Platform your knowledge base?</h2>
                    <p className="margin-top-20">Tustor has a first rate academic program, a fully qualified. With over
                            50
                            years of experience teaching English around the world, we know that no two.Education for
                            Everyone</p>
                            <span className="ph-num margin-top-20">Call Us +012 34 56 789</span>
                            <div className="about-btn margin-top-40">
                                <a href="#" className='template-btn'>contact me</a>
                            </div>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="video-area p-relative">
                    <img src={require('./assets2/asset 14.png')} alt="" />
                    <div className="video-play-button">
                        <a href="#" className='item-ripple'><i className='fa fa-play'></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


{/* -------------------------------------------------------course section */}
{/* <Course1/> */}
<div className="pt-115"></div>
<Teaching/>
<Testimonial/>

<Footer/>
        </>
    )
}
export default Home2;