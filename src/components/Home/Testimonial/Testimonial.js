import React from 'react';
import './Testimonial.css'
import testiOne from '../../../images/testi-one.jpg'
import testiTwo from '../../../images/testi-two.jpg'
const Testimonial = () => {
    return (
        <div className="clients-reviews">
            <div className="overlay">
                <dev className=" reviwes ">
                    <div className="pb-5">
                        <p style={{ fontFamily: "monospace", fontSize: "14px", fontWeight: "700",color:"#fff" }}>TESTIMONIALS</p>
                        <h1 className=" fs-1 fw-bold" style={{ color: "rgba(0,0,0,.55)" }}>What our <span style={{ color: "#fff" }}>customers</span> say about us?</h1>
                        <p>A must-have template. Maybe one of the best vintage templates so <br /> far in the market. Recommended 100%.</p>

                    </div>
                    <div className="container ">
                        <div class="row ">
                            <div class="col-sm-6">
                                <div class="card border-0 shadow-lg">
                                    <div class="card-body">
                                        <img class="rounded-circle" src={testiOne} alt="" />

                                        <p class="card-text text-center text-dark">Amber, Hi. We had a wonderful time! I highly recommend the Resort at Longboat Key & the area. It was perfect for not being crowded on the beach w/ Covid concerns. The beach is for guests only & Thanks so much for finding the perfect spot for us.</p>
                                        <h3 className="text-dark">Anahita: Persian</h3>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card border-0">
                                    <div class="card-body">
                                        <img class="rounded-circle" src={testiTwo} alt="" />
                                        <p class="card-text text-center text-dark">Annie is always a pleasure to work with. She is friendly, professional and well informed. Annie always efficiently deals with any travel issues we have even if they occur last minute. Every trip we have planned with her has been excellent.</p>
                                        <h3 className="text-dark">AlJanah</h3>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </dev>
            </div>

        </div>
    );
};

export default Testimonial;