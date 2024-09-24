import '../style/home.css';
import Button from 'react-bootstrap/Button';

import img1 from "../images-services/14_certificate copy.jpg";
import img2 from "../images-services/14_investment copy.jpg";
import img3 from "../images-services/14_teacher copy.jpg";
import img4 from "../images-services/14_briefcase copy.jpg";
import img5 from "../images-services/14_cv copy.jpg";
import img6 from "../images-services/14_plus copy.jpg";

import Carousel from 'react-bootstrap/Carousel';

import user1 from '../images/user1.png';


export default function homePage(){
    return(
        <div>
            <div className="section-top">
                <div className='child'>
                    <h1>Learn programming from scratch<br/>to become a professional</h1>
                    <p>Let us help you learn programming professionally and easily</p>
                    <Button variant="secondary">Learn programming now</Button>
                </div>
            </div>

            <div id="services">
                <div className="container">
                    <h2>Why learn through this academy?</h2>
                    <div className="row">
                        <article className="col-md-6 col-lg-4">
                            <img className="icon" src={img1} alt="Icon"/>
                            <h3>Certified Certificate</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </article>

                        <article className="col-md-6 col-lg-4">
                            <img className="icon" src={img2} alt="Icon"/>
                            <h3>Recover your investment</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </article>

                        <article className="col-md-6 col-lg-4">
                            <img className="icon" src={img3} alt="Icon"/>
                            <h3>GeneralHealth</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </article>

                        <article className="col-md-6 col-lg-4">
                            <img className="icon" src={img4} alt="Icon"/>
                            <h3>Recorded videos</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </article>

                        <article className="col-md-6 col-lg-4">
                            <img className="icon" src={img5} alt="Icon"/>
                            <h3>Free CV</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </article>

                        <article className="col-md-6 col-lg-4">
                            <img className="icon" src={img6} alt="Icon"/>
                            <h3>Lifetime access</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </article>

                    </div>  
                </div>   
            </div>  

            <div className='sectionNumbres'>
                <div className='container'>
                    <div className='row'>
                    <h2 className='h2'>Academy in numbers</h2>
                        <article className="col-md-6 col-lg-3">
                            <h3 className='h3'>+200,000 students</h3>
                            <p className='p'>Subscribe to the academy</p>
                        </article>
                        <article className="col-md-6 col-lg-3">
                            <h3 className='h3'>+30 books</h3>
                            <p className='p'>In various fields available for free download</p>
                        </article>
                        <article className="col-md-6 col-lg-3">
                            <h3 className='h3'>+350 hours of video</h3>
                            <p className='p'>In 56 educational tracks in 7 comprehensive courses</p>
                        </article>
                        <article className="col-md-6 col-lg-3">
                            <h3 className='h3'>+6,500 articles</h3>
                            <p className='p'>We published it in programming and various sections.</p>
                        </article>
                    </div>
                </div>
            </div>

            <div id="slide">
                <h3 class="h3-slide">What Our Customers Say</h3>
                <center>
                <Carousel className='Carousel' data-bs-theme="dark">
                    <Carousel.Item>
                        <img className="d-block" src={user1} alt="user 1"/>
                        <strong>User 1</strong>
                        <p className='p-slide'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced.</p>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block" src={user1} alt="user 2"/>
                        <strong>User 2</strong>
                        <p className='p-slide'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced.</p>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block" src={user1} alt="user 3"/>
                        <strong>User 3</strong>
                        <p className='p-slide'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced.</p>
                    </Carousel.Item>
                </Carousel>
                </center>
            </div>
        </div>
    );

    
};