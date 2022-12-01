const Category=() =>
{
    return(
        <>
            <div className="category-area">
                <div className="container margin-top-50">
                    <div className="row">
                        <div className="col">
                            <div className="section-top text-center">
                                <h2>Browse Popular Categories</h2>
                                <p className="margin-top-10">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row margin-top-50">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat">
                                <div className="cat-img margin-bottom-20">
                                    <img src={require('./assets/asset 6.png')} alt="" />
                                </div>
                                <h2><a href="#">Content Writing</a></h2>
                                <span className="margin-top-10">35 Courses</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat">
                                <div className="cat-img margin-bottom-20">
                                    <img src={require('./assets/asset 7.png')} alt="" />
                                </div>
                                <h2><a href="#">programming</a></h2>
                                <span className="margin-top-10">27 Courses</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat">
                                <div className="cat-img margin-bottom-20">
                                    <img src={require('./assets/asset 8.png')} alt="" />
                                </div>
                                <h2><a href="#">art & design</a></h2>
                                <span className="margin-top-10">74 Courses</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-cat">
                                <div className="cat-img margin-bottom-20">
                                    <img src={require('./assets/asset 9.png')} alt="" />
                                </div>
                                <h2><a href="#">accounting</a></h2>
                                <span className="margin-top-10">38 Courses</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category;
