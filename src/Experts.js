const Expert = () => 
{
    return(
        <>
    <section class="team-section pb-100">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="section-top text-center">
                        <h2>Meet Our Experts</h2>
                        <p class="margin-top-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor
                            incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
            </div>
            <div class="row margin-top-50">
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay=".1s">
                    <div class="single-team-member">
                        <div class="member-image">
                            <img src={require('./assets/asset 25.png')} alt="" />
                            <div class="hover-state d-none d-lg-block">
                                <ul class="d-flex justify-content-center text-center">
                                    <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="member-content text-center">
                            <h4 class="title">alex maxwel</h4>
                            <span>CEO & Founder</span>
                        </div>
                       
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                    <div class="single-team-member">
                        <div class="member-image">
                            {/* <img src="assets/images/team-member-2.png" alt="image"> */}
                            <img src={require('./assets/asset 26.png')} alt="" />
                            <div class="hover-state  d-none d-lg-block">
                                <ul class="d-flex justify-content-center text-center">
                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="member-content text-center">
                            <h4 class="title">sarah taylor</h4>
                            <span>Web Developer</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
                    <div class="single-team-member">
                        <div class="member-image">
                            <img src={require('./assets/asset 27.png')} alt="" />
                            <div class="hover-state d-none d-lg-block">
                                <ul class="d-flex justify-content-center text-center">
                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="member-content text-center">
                            <h4 class="title">brandon king</h4>
                            <span>ui ux designer</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                    <div class="single-team-member">
                        <div class="member-image">
                            <img src={require('./assets/asset 25.png')} alt="" />
                            <div class="hover-state d-none d-lg-block">
                                <ul class="d-flex justify-content-center text-center">
                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="member-content text-center">
                            <h4 class="title">john doe</h4>
                            <span>digital marketer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
        </>
    )
}
export default Expert;