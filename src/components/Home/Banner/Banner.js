import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import backImgOne from '../../../images/banner-one.jpg'
import backImgTwo from '../../../images/banner-two.jpg'
import backImgThree from '../../../images/banner-three.jpg'
import TourSearch from '../TourSearch/TourSearch';

const Banner = () => {
    return (
        <div className="banner-section">
            <div className="inner-banner-slider">
                <Carousel fade interval={1500} controls={false}>
                    <Carousel.Item classNam="one">
                        <img
                            className="d-block w-100 img-fluid"
                            src={backImgOne}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src={backImgTwo}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src={backImgThree}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="inner-banner-search">
                <div className="tour-plane">
                    <h3 style={{textAlign:"right", fontSize:"42px"}}>Selected Your Tour Plane</h3>
                    <p>The latest traveler alerts, a list of recommended items to pack, articles about the hottest trends in travel – think about what would be useful for your readership to know and you’ve got some sharable content. This is your chance to show off your expertise as a travel professional and provide your potential customers with information that they may not find otherwise.</p>
                </div>
                <TourSearch></TourSearch>
            </div>
        </div>
    );
};

export default Banner;