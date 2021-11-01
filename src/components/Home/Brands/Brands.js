import React from 'react';
import './Brands.css'
import brandOne from '../../../images/brand/client-1-hover.png'
import brandTwo from '../../../images/brand/client-2-hover.png'
import brandThree from '../../../images/brand/client-3-hover.png'
import brandFour from '../../../images/brand/client-4-hover.png'
import brandFive from '../../../images/brand/client-5-hover.png'

const Brands = () => {
    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-md-12">

                    <div className="brand-text">
                        <h2>We are featured in</h2>
                        <p>See what others are saying about us</p>
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <img src={brandOne} alt="" className="img-fluid brand-img" />
                    </div>
                    <div className="col">
                        <img src={brandTwo} alt="" className="img-fluid brand-img" />
                    </div>
                    <div className="col">
                        <img src={brandThree} alt="" className="img-fluid brand-img" />
                    </div>
                    <div className="col">
                        <img src={brandFour} alt="" className="img-fluid brand-img" />
                    </div>
                    <div className="col">
                        <img src={brandFive} alt="" className="img-fluid brand-img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;