import Header1 from "./Header1";
import Footer from "./Footer";
function Blog() {
    return (
        <>

            <Header1 />
            {/* -----------------------------------------------------blog page intro */}
            <section className="breadcrumb-section text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>blog page</h2>
                            <ul>
                                <li><a href="/home2">home</a></li>
                                <li>/</li>
                                <li>blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* -------------------------------------------section */}
            <div className="container">
                <div className="d-flex">
                    <div className="arti-box-1">
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
                    <div className="arti-box-1">
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
                    </div>
                    <div className="arti-box-1">
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
                    </div>
                </div>
                <div className="d-flex margin-top-40">
                    <div className="arti-box-1">
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
                    <div className="arti-box-1">
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
                    </div>
                    <div className="arti-box-1">
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
                    </div>
                </div>
            </div>
            <div className="margin-top-50"></div>

            <Footer/>
        </>
    )
}
export default Blog;