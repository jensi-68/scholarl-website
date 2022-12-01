const Skill=() =>
{
    return(
        <>
            <div className="what-area pt-115 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="section-wrap mb-60 text-center">
                                <div className="section-title">
                                    <h2>What is Skilline?</h2>
                                    <p>Sloshed faff about me old mucker blatant bubble and squeak hanky panky some dodgy chav bevvy arse chimney pot I, ruddy plastered buggered smashing blow off I'm telling up the kyver he legged it bleeder jolly good, </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row margin-top-50">
                        <div className="col-xxl-5 col-xl-5 col-lg-6">
                            <div className="what__item transition-3 mb-30 p-relative fix">
                                <div className="what-thumd w-img">
                                    <img src={require('./assets/what-1.jpg')} alt="" />
                                </div>
                                <div className="what__content p-absolute text-center d-none d-lg-block">
                                    <h3 className="what__title white-color">Mostly <br></br> Online Learning</h3>
                                    <a href="#" className="e-btn e-btn-border">Start a class today</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-5 col-lg-6">
                            <div className="what__item transition-3 mb-30 p-relative fix">
                                <div className="what-thmub w-img">
                                    <img src={require('./assets/what-2.jpg')} alt="" />
                                </div>
                                <div className="what__content p-absolute text-center d-none d-lg-block">
                                    <h3 className="what__title white-color">Become <br></br> an Instructor</h3>
                                    <a href="#" className="e-btn e-btn-border">Start a class today</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Skill;
