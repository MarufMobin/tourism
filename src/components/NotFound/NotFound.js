import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                        <h1 style={{fontSize:"300px",fontFamily:"cursive",color:"#566768"}}>404</h1>

                        <h2 className="not-found-title">How Did You Get Here?</h2>

                       <Link to="/" className="not-found-btn">Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;