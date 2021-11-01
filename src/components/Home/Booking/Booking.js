import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Booking = () => {
    const history = useHistory()
    const { user } = useAuth()
    const { id } = useParams();
    const [booking, setBooking] = useState({});
    console.log(booking)
    const uri = `http://localhost:5000/datas/${id}`;
    console.log(uri)
    useEffect(() => {
        fetch(uri)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [uri])
    console.log(booking)
    const handleTourBooking = (id) => {
        const tourId = id;
        const email = user.email;
        const img = booking.src;

        const tourDetails = { tourId, email, img }

        fetch('http://localhost:5000/datas', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tourDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')

                }
            })
    }
    return (
        <div className="container">

            <div className="col-md-6 my-5">

                <div className="card mb-3" style={{maxWidth: "540px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={booking.src}  className="p-3 img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{booking?.name}</h5>
                                <h5 className="card-text"> Rugular Price : {booking?.price}</h5>
                                
                                <h5 className="card-text">  Discount : {booking?.discountPrice}</h5>
                                <h6>Duration : {booking?.duration}</h6>
                                <button className="btn btn-primary" onClick={() => handleTourBooking(id)}>Booking</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <h2>name{booking?.name}</h2>
                <h2>price : {booking?.price}</h2>
                <h2>email : {user?.email}</h2>
                <h2>discountPrice : {booking?.discountPrice}</h2>
                <h2>duration : {booking?.duration}</h2>
                <img src={booking.src} alt="" />

                <button className="btn btn-primary" onClick={() => handleTourBooking(id)}>Booking</button> */}
            </div>

        </div>
    );
};

export default Booking;