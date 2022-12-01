const Slider=() =>
{

    return(
        <>
            <div className="zero-cat-section">
                <div className="zero-area padding-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <div className="hero-con">
                                    <span className="tagline">online learning</span>
                                    <h1 className="margin-top-20">World’s Leading Machine Learning Courses</h1>
                                    <p className="margin-top-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, se<br></br>eiumod tempor incididunt ut
                                labore et dolore
                                    </p>
                                    <div className="btn-part margin-top-40">
                                        <a href="#" className="template-btn">know more</a>
                                        <div className="video-btn margin-left-20">
                                            <a href="#https://www.youtube.com/watch?v=ezbJwaLmOeM" className="play-btn d-flex align-items-center">
                                            <img src={require('./assets/asset 1.png')} alt="" />
                                            <span className="margin-left-10">play video</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="hero-img">
                                    <img src={require('./assets/asset 2.png')} alt=""  className="main-img"/>
                                    <div className="shape-img">
                                        <img src={require('./assets/asset 3.png')} alt="" className="hero-shape shape-1" />
                                        <img src={require('./assets/asset 4.png')} alt="" className="hero-shape shape-2" />
                                        <img src={require('./assets/asset 5.png')} alt="" className="hero-shape shape-3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Slider;