import React, { useEffect, useState } from 'react';
import TourPlan from '../TourPlan/TourPlan';
import './TourPlans.css'

const TourPlans = () => {

    const [tourPricing, setTourPricing] = useState([]);

    useEffect(() => {
        fetch('https://warm-chamber-07664.herokuapp.com/datas')
            .then(res => res.json())
            .then(data => setTourPricing(data));
    }, [])
    console.log(tourPricing, "Mukit KHaikahi")
    return (
        <div className="">
            <div className="tourplaner-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center mb-lg-5">Last Minute Offers</h2>
                            <p className="text-center w-50 mx-auto">Book a memorable tour at great price! Grab our last minute offer and pack the things for the journey you dream about. See our recommendations.</p>
                        </div>
                    </div>
                    <div className="row my-5">

                        {
                            tourPricing.map(tourPrice => <TourPlan key={tourPrice._id} tourPrice={tourPrice}></TourPlan>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourPlans;