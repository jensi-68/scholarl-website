import Articles from './Articles';
import Footer from './Footer';
import Header1 from './Header1';
import Testimonial from './Testimonial';

function Course1()
{
    return(
        <>

        <Header1/>
        {/* ---------------------------------------------course page */}

        <section className="breadcrumb-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>course page</h2>
              <ul>
                <li><a href="/home2">home</a></li>
                <li>/</li>
                <li>course</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
        
        <section className="course-section course-section-2 pt-115">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 offset-lg-3">
                <div className="section-top text-center">
                    <h2>Professional Online Courses</h2>
                    <p className="margin-top-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor
                            incididunt ut labore et dolore magna aliqua
                    </p>
                </div>
            </div>
        </div>
        <div className="row margin-top-50">
            <div className="col-lg-4 col-md-6">
                <div className="single-course">
                    <div className="course-img">
                        <img src={require('./assets2/asset 15.png')} alt="" />
                    </div>
                    <div className="course-content">
                        <div className="course-category">
                            <a href="#"><span>marketing</span></a>
                        </div>
                        <span className="course-instructor">
                            <a href="#">James Stewart</a>
                        </span>
                        <h4 className="margin-top-10"><a href="#">Language Learning (15 Day)
                                    Crash Course Zen</a></h4>
                                    <div class="course-review d-flex align-items-center margin-top-20">
                                        <div className="review-left d-flex">
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                        </div>
                                        <div className="review-left ml-30">
                                            <span><b>4.5</b> (45 Reviews)</span>
                                        </div>
                                    </div>
                                    <span className='divider'></span>
                                    <div class="course-bottom d-flex align-items-center justify-content-between padding-top-20">
                                        <div className="bottom-left">
                                            <span><i class="fa-solid fa-clock"></i>12 mins</span>
                                        </div>
                                        <div className="bottom-right">
                                            <span className="course-price">$15.00/hr</span>
                                        </div>
                                    </div>
                    </div>
                </div>
            </div>



            <div className="col-lg-4 col-md-6">
                <div className="single-course">
                    <div className="course-img">
                        <img src={require('./assets2/asset 16.png')} alt="" />
                    </div>
                    <div className="course-content">
                        <div className="course-category">
                            <a href="#"><span>developement</span></a>
                        </div>
                        <span className="course-instructor">
                            <a href="#">James Stewart</a>
                        </span>
                        <h4 className="margin-top-10"><a href="#">Language Learning (15 Day)
                                    Crash Course Zen</a></h4>
                                    <div class="course-review d-flex align-items-center margin-top-20">
                                        <div className="review-left d-flex">
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                        </div>
                                        <div className="review-left ml-30">
                                            <span><b>4.5</b> (45 Reviews)</span>
                                        </div>
                                    </div>
                                    <span className='divider'></span>
                                    <div class="course-bottom d-flex align-items-center justify-content-between padding-top-20">
                                        <div className="bottom-left">
                                            <span><i class="fa-solid fa-clock"></i>12 mins</span>
                                        </div>
                                        <div className="bottom-right">
                                            <span className="course-price">$15.00/hr</span>
                                        </div>
                                    </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6">
                <div className="single-course">
                    <div className="course-img">
                        <img src={require('./assets2/asset 17.png')} alt="" />
                    </div>
                    <div className="course-content">
                        <div className="course-category">
                            <a href="#"><span>accounting</span></a>
                        </div>
                        <span className="course-instructor">
                            <a href="#">James Stewart</a>
                        </span>
                        <h4 className="margin-top-10"><a href="#">Language Learning (15 Day)
                                    Crash Course Zen</a></h4>
                                    <div class="course-review d-flex align-items-center margin-top-20">
                                        <div className="review-left d-flex">
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                        </div>
                                        <div className="review-left ml-30">
                                            <span><b>4.5</b> (45 Reviews)</span>
                                        </div>
                                    </div>
                                    <span className='divider'></span>
                                    <div class="course-bottom d-flex align-items-center justify-content-between padding-top-20">
                                        <div className="bottom-left">
                                            <span><i class="fa-solid fa-clock"></i>12 mins</span>
                                        </div>
                                        <div className="bottom-right">
                                            <span className="course-price">$15.00/hr</span>
                                        </div>
                                    </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6">
                <div className="single-course">
                    <div className="course-img">
                        <img src={require('./assets2/asset 18.png')} alt="" />
                    </div>
                    <div className="course-content">
                        <div className="course-category">
                            <a href="#"><span>programming</span></a>
                        </div>
                        <span className="course-instructor">
                            <a href="#">James Stewart</a>
                        </span>
                        <h4 className="margin-top-10"><a href="#">Language Learning (15 Day)
                                    Crash Course Zen</a></h4>
                                    <div class="course-review d-flex align-items-center margin-top-20">
                                        <div className="review-left d-flex">
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                        </div>
                                        <div className="review-left ml-30">
                                            <span><b>4.5</b> (45 Reviews)</span>
                                        </div>
                                    </div>
                                    <span className='divider'></span>
                                    <div class="course-bottom d-flex align-items-center justify-content-between padding-top-20">
                                        <div className="bottom-left">
                                            <span><i class="fa-solid fa-clock"></i>12 mins</span>
                                        </div>
                                        <div className="bottom-right">
                                            <span className="course-price">$15.00/hr</span>
                                        </div>
                                    </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6">
                <div className="single-course">
                    <div className="course-img">
                        <img src={require('./assets2/asset 19.png')} alt="" />
                    </div>
                    <div className="course-content">
                        <div className="course-category">
                            <a href="#"><span>art & design</span></a>
                        </div>
                        <span className="course-instructor">
                            <a href="#">James Stewart</a>
                        </span>
                        <h4 className="margin-top-10"><a href="#">Language Learning (15 Day)
                                    Crash Course Zen</a></h4>
                                    <div class="course-review d-flex align-items-center margin-top-20">
                                        <div className="review-left d-flex">
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                        </div>
                                        <div className="review-left ml-30">
                                            <span><b>4.5</b> (45 Reviews)</span>
                                        </div>
                                    </div>
                                    <span className='divider'></span>
                                    <div class="course-bottom d-flex align-items-center justify-content-between padding-top-20">
                                        <div className="bottom-left">
                                            <span><i class="fa-solid fa-clock"></i>12 mins</span>
                                        </div>
                                        <div className="bottom-right">
                                            <span className="course-price">$15.00/hr</span>
                                        </div>
                                    </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6">
                <div className="single-course">
                    <div className="course-img">
                        <img src={require('./assets2/asset 20.png')} alt="" />
                    </div>
                    <div className="course-content">
                        <div className="course-category">
                            <a href="#"><span>content writing</span></a>
                        </div>
                        <span className="course-instructor">
                            <a href="#">James Stewart</a>
                        </span>
                        <h4 className="margin-top-10"><a href="#">Language Learning (15 Day)
                                    Crash Course Zen</a></h4>
                                    <div class="course-review d-flex align-items-center margin-top-20">
                                        <div className="review-left d-flex">
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                            <a href="#"><i class="fa-solid fa-star"></i></a>
                                        </div>
                                        <div className="review-left ml-30">
                                            <span><b>4.5</b> (45 Reviews)</span>
                                        </div>
                                    </div>
                                    <span className='divider'></span>
                                    <div class="course-bottom d-flex align-items-center justify-content-between padding-top-20">
                                        <div className="bottom-left">
                                            <span><i class="fa-solid fa-clock"></i>12 mins</span>
                                        </div>
                                        <div className="bottom-right">
                                            <span className="course-price">$15.00/hr</span>
                                        </div>
                                    </div>
                    </div>
                </div>
            </div>



        </div>
    </div>
</section>

<Testimonial/>
<Articles/>
<Footer/>
        </>
    )
}
export default Course1;