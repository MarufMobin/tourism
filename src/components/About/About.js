import React from 'react';
import './About.css';

import iconImgOne from '../../images/about/about-us-custom-icon-1.png'
import iconImgTwo from '../../images/about/about-us-custom-icon-2.png'
import iconImgThree from '../../images/about/about-us-custom-icon-3.png'
import iconImgFour from '../../images/about/about-us-custom-icon-4.png'
import siteImg from '../../images/about/about-us-img-2.jpg'

const About = () => {
    return (
        <div className="aboutUs">
            <div className="coustom-about">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>The Story About Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis, nonimper diet est. Praesent vulputate at enim sit amet mattis.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row text-center">
                    <div className="col-md-3">
                        <img src={iconImgOne} alt="" className="img-fluid mb-2"/>
                        <h4>  Private Transport</h4>
                        <p> Private transport (as opposed to public transport) is the personal or individual use of transportation .</p>
                    </div>
                    <div className="col-md-3">
                        <img src={iconImgTwo} alt="" className="img-fluid mb-2"/>
                        <h4> Diverse Destinations</h4>
                        <p>Diverse Destination is a young and energetic destination management company and receptive tour .</p>

                    </div>
                    <div className="col-md-3">
                        <img src={iconImgThree} alt="" className="img-fluid mb-2"/>
                        <h4> Great Hotels</h4>
                        <p>If you’re looking to treat yourself, a high-end hotel will provide that extra something special to make your trip .</p>
                    </div>
                    <div className="col-md-3">
                        <img src={iconImgFour} alt="" className="img-fluid mb-2"/>
                        <h4> Fast Booking</h4>
                        <p>Combining ease of use and performance, all our solutions are interconnected to help hoteliers.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="py-5">
                            <img src={siteImg} alt="" className="img-fluid" />

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="py-5 mt-5">
                        <h4>Humble Beginnings</h4>
                        <p>These examples have been automatically selected and may contain sensitive content that does not reflect the opinions or policies of Collins, or its parent company HarperCollins.
                            We welcome feedback: you can select the flag against a sentence to report it.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;