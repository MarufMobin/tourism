import React from 'react';
import './TravellingHeight.css';
import iconImg from '../../../images/tvicon5.png'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const TravellingHeight = () => {
    return (
        <div className="travelling-height">
            <div className="travelling-height-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Traveling Highlights</h2>
                            <p>Your New Traveling Idea</p>

                            <OverlayTrigger
                                placement="bottom"
                                overlay={<Tooltip id="button-tooltip-2" >See The Video</Tooltip>}
                            >
                                <span className="d-inline-block">
                                    <a href="https://youtu.be/35npVaFGHMY" target="_blank">
                                        <img src={iconImg} alt="" />
                                    </a>
                                </span>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravellingHeight;