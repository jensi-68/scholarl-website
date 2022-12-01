import Footer from "./Footer"
import Header1 from "./Header1"
import './pages.css'

function Contact()
{
    return(
        <>
            <Header1/>

            {/* -----------------------------------------------------contact page intro */}
            <section className="breadcrumb-section text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>contact page</h2>
                            <ul>
                                <li><a href="/home2">home</a></li>
                                <li>/</li>
                                <li>contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* --------------------------------------------------------contact section */}
            <section className="contact-section padding-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="single-con-info">
                            <i class="fa-regular fa-building"></i>
                            <h4>Head Office</h4>
                            <p className="margin-top-10">
                            68 Landsriver St, Welson <br></br>California 22066
                            </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                        <div className="single-con-info">

                            <i class="fa-solid fa-phone"></i>
                            <h4>phone number</h4>
                            <p className="margin-top-10">
                            68 Landsriver St, Welson <br></br>California 22066
                            </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                        <div className="single-con-info">
                            
                            <i class="fa-solid fa-envelope"></i>
                            <h4>email address</h4>
                            <p className="margin-top-10">
                            info@scholarl.com  <br></br>support@scholarl.com
                            </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                        <div className="single-con-info">
                            
                            <i class="fa-solid fa-house"></i>
                            <h4>Showroom</h4>
                            <p className="margin-top-10">
                            FairView Ave, El Monte <br></br>California 91732
                            </p>
                            </div>
                        </div>

                    </div>

                    <div className="row padding-top-30">
                        <div className="col-lg-7">
                            <div className="contact-form">
                                <form action="#">
                                    <input type="text" name="" id="" placeholder="your name" />
                                    <input type="email" name="" id="" placeholder="your email" />
                                    <input type="text" name="" id="" placeholder="subject" />
                                    <textarea name="message" id="" cols="30" rows="10" placeholder="message"></textarea>
                                    <button type="submit" className="template-btn">send message</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="goggle-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14595.21712823787!2d90.4009008!3d23.8610827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf922ce212df4e67!2sSpeedDigit%20Software%20Solution!5e0!3m2!1sen!2sbd!4v1661585078003!5m2!1sen!2sbd" frameborder="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>

    )
}
export default Contact