import React from 'react';
import Banner from './Banner/Banner';
import Gallary from './Gallary/Gallary';
import './Home.css'
import TourPlans from './TourPlans/TourPlans';
import TravellingHeight from './TravellingHeight/TravellingHeight';
import Consider from './Consider/Consider';
import CoustomerSatisfaction from './CoustomerSatisfaction/CoustomerSatisfaction';
import Testimonial from './Testimonial/Testimonial';
import Brands from './Brands/Brands';

const Home = () => {
    return (
        <div className="header-section">
            <Banner></Banner>
            <Gallary></Gallary>
            <TravellingHeight></TravellingHeight>
            <TourPlans></TourPlans>
            <Consider></Consider>
            <CoustomerSatisfaction></CoustomerSatisfaction>
            <Testimonial></Testimonial>
            <Brands></Brands>
        </div>
    );
};

export default Home;