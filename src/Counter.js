const Counter=() =>
{
    return(
        <>
        <section class="counterup-feature-section pt-120">
        {/* <!-- Counterup Area --> */}
        <div class="counterup-area pt-120 pb-90">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="single-counterup">
                            <div class="counterup-icon">
                                <img src={require('./assets/asset 28.png')} alt="" />
                            </div>
                            <div class="counterup-content">
                                <div class="counter-number">
                                    <h3 class="title counter">5670</h3>
                                </div>
                                <span>Courses & Videos</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="single-counterup">
                            <div class="counterup-icon">
                                <img src={require('./assets/asset 29.png')} alt="" />
                            </div>
                            <div class="counterup-content">
                                <div class="counter-number">
                                    <h3 class="title counter">5400</h3>
                                </div>
                                <span>Global customers</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="single-counterup">
                            <div class="counterup-icon">
                                <img src={require('./assets/asset 30.png')} alt="" />
                            </div>
                            <div class="counterup-content">
                                <div class="counter-number">
                                    <h3 class="title counter">760</h3>
                                </div>
                                <span>Winning Awards</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="single-counterup">
                            <div class="counterup-icon">
                                <img src={require('./assets/asset 31.png')} alt="" />
                            </div>
                            <div class="counterup-content">
                                <div class="counter-number">
                                    <h3 class="title counter">2460</h3>
                                </div>
                                <span>Successful students</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!--Feature Area --> */}
        <div class="feature-area pb-90">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 wow fadeIn" data-wow-delay=".1s">
                        <div class="single-feature">
                            <div class="feature-image">
                                <img src={require('./assets/asset 32.png')} alt="" />
                            </div>
                            <div class="feature-content">
                                <div class="video-play-button">
                                    <a href="https://www.youtube.com/watch?v=ezbJwaLmOeM"><span><i
                                                class="fa fa-play"></i></span>
                                    </a>
                                </div>
                                <h3><a href="3">intro video of web development course</a></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeIn" data-wow-delay=".2s">
                        <div class="single-feature">
                            <div class="feature-image">
                                <img src={require('./assets/asset 33.png')} alt="" />
                            </div>
                            <div class="feature-content">
                                <div class="video-play-button">
                                    <a href="https://www.youtube.com/watch?v=ezbJwaLmOeM"><span><i
                                                class="fa fa-play"></i></span>
                                    </a>
                                </div>
                                <h3><a href="#">intro video of digital marketing course</a></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeIn" data-wow-delay=".3s">
                        <div class="single-feature">
                            <div class="feature-image">
                                <img src={require('./assets/asset 34.png')} alt="" />
                            </div>
                            <div class="feature-content">
                                <div class="video-play-button">
                                    <a href="https://www.youtube.com/watch?v=ezbJwaLmOeM"><span><i class="fa fa-play"></i></span>
                                    </a>
                                </div>
                                <h3><a href="#">intro video of art & design course</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default Counter;