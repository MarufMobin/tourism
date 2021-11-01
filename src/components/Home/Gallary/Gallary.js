import React from 'react';
import './Gallary.css'
import gallaryImgOne from '../../../images/galary-one.jpg'
import gallaryImgTwo from '../../../images/galary-two.jpg'
import gallaryImgThree from '../../../images/galary-three.jpg'
import gallaryImgFour from '../../../images/galary-one.jpg'

const Gallary = () => {
    return (
        <div className="gallary-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 style={{textAlign:"center",fontWeight:"600",fontSize:"42px"}}>  Go Exotic Places</h2>
                        <p style={{textAlign:'center',fontSize:"16px",width:"50%",margin:"30px auto"}}> When it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinations or vibrant landscapes, we have offers for you.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={gallaryImgOne} alt="" className="img-fluid" style={{ border: "2px solid #fff" }} />
                            </div>
                            <div className="col-md-12 mt-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={gallaryImgTwo} alt="" className="img-fluid w-100 h-75" style={{ border: "2px solid #fff" }} />

                                    </div>
                                    <div className="col-md-6">
                                        <img src={gallaryImgThree} alt="" className="w-100 h-75 img-fluid" style={{ border: "2px solid #fff" }} />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src="https://image.freepik.com/free-photo/vertical-shot-famous-beautiful-golden-falls-oregon-rainy-day_181624-28288.jpg" alt="" className="w-100 h-100" style={{ overflow: "hidden",border:"2px solid #fff" }} className="img-fluid" />
                    </div>
                </div>
                <div className="row py-lg-5">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4">
                        <div className="custom-btn" style={{ textAlign: 'center', cursor: "pointer", backgroundColor: "#bee4e7", color: "#8b8b8b", fontWeight: "600", border: "2px solid #fff" }}>View More</div>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Gallary;