import React from 'react';
import Map from '../../Map/Map';
import './Discount.css'

const Discount = () => {
    return (
        <div className="costom-discount">
            <div className="container-fluid" style={{ padding: "0px" }}>
                <div className="row">

                    <div className="col-md-7" style={{ clipPath: "polygon(0 0, 100% 0, 44% 100%, 0% 100%)", backgroundColor: "#bee4e7" }}>
                        <div>
                            <Map></Map>

                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="inner-discont">
                            <form>
                                <input type="text" name="" id="" /><br />
                                <input type="text" name="" id="" /><br />
                                <input type="text" name="" id="" /><br />
                                <input type="text" name="" id="" /><br />
                                <input type="text" name="" id="" /><br />
                                <input type="submit" name="" id="" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;