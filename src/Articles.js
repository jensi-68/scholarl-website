import OwlCarousel from 'react-owl-carousel';

function Articles()
{
    return(
        <>
        <section className="blog-section padding-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-top text-center">
                            <h2>Latest Articles</h2>
                            <p className="margin-top-10">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor
                            incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container margin-top-40">
            <OwlCarousel items={3} className="owl-theme" 
            autoplay={true}
            loop margin={30}
            dots={false} >  

           
            <div className="item">
                <div className="arti-box">
                <div className="arti-img">
                    <img src={require('./assets/asset 37.png')} alt="" />
                </div>
                <div className="arti-con">
                    <div className="arti-title">
                        <h4><a href="#">Where people develop the
                                    own Potential</a></h4>
                    </div>
                    <div className="arti-date d-flex">
                        <a href="#">accounting</a>
                        <a href="#" className='a-1'>25 , NOV, 2022</a>
                    </div>
                    <div className="arti-btn">
                        <a href="#" className='template-btn btn-2'>view more</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="item">
                <div className="arti-box">
                <div className="arti-img">
                    <img src={require('./assets/asset 38.png')} alt="" />
                </div>
                <div className="arti-con">
                    <div className="arti-title">
                        <h4><a href="#">Where people develop the
                                    own Potential</a></h4>
                    </div>
                    <div className="arti-date d-flex">
                        <a href="#">programming</a>
                        <a href="#" className='a-1'>25 , NOV, 2022</a>
                    </div>
                    <div className="arti-btn">
                        <a href="#" className='template-btn btn-2'>view more</a>
                    </div>
                </div>
                </div></div>
            <div className="item">
                <div className="arti-box">
                <div className="arti-img">
                    <img src={require('./assets/asset 39.png')} alt="" />
                </div>
                <div className="arti-con">
                    <div className="arti-title">
                        <h4><a href="#">Where people develop the
                                    own Potential</a></h4>
                    </div>
                    <div className="arti-date d-flex">
                        <a href="#">art & design</a>
                        <a href="#" className='a-1'>25 , NOV, 2022</a>
                    </div>
                    <div className="arti-btn">
                        <a href="#" className='template-btn btn-2'>view more</a>
                    </div>
                </div>
                </div></div>
            <div className="item">
                <div className="arti-box">
                <div className="arti-img">
                    <img src={require('./assets/asset 37.png')} alt="" />
                </div>
                <div className="arti-con">
                    <div className="arti-title">
                        <h4><a href="#">Where people develop the
                                    own Potential</a></h4>
                    </div>
                    <div className="arti-date d-flex">
                        <a href="#">accounting</a>
                        <a href="#" className='a-1'>25 , NOV, 2022</a>
                    </div>
                    <div className="arti-btn">
                        <a href="#" className='template-btn btn-2'>view more</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="item">
                <div className="arti-box">
                <div className="arti-img">
                    <img src={require('./assets/asset 37.png')} alt="" />
                </div>
                <div className="arti-con">
                    <div className="arti-title">
                        <h4><a href="#">Where people develop the
                                    own Potential</a></h4>
                    </div>
                    <div className="arti-date d-flex">
                        <a href="#">accounting</a>
                        <a href="#" className='a-1'>25 , NOV, 2022</a>
                    </div>
                    <div className="arti-btn">
                        <a href="#" className='template-btn btn-2'>view more</a>
                    </div>
                </div>
                </div></div>
            <div className="item">
                <div className="arti-box">
                <div className="arti-img">
                    <img src={require('./assets/asset 37.png')} alt="" />
                </div>
                <div className="arti-con">
                    <div className="arti-title">
                        <h4><a href="#">Where people develop the
                                    own Potential</a></h4>
                    </div>
                    <div className="arti-date d-flex">
                        <a href="#">accounting</a>
                        <a href="#" className='a-1'>25 , NOV, 2022</a>
                    </div>
                    <div className="arti-btn">
                        <a href="#" className='template-btn btn-2'>view more</a>
                    </div>
                </div>
                </div></div>
      </OwlCarousel>  
            </div>
        </section>
        </>
    )
}
export default Articles;