import React from 'react';
import { useHistory } from 'react-router-dom';
import './TourPlan.css'

const TourPlan = (props) => {
    const {duration,name,price,src,_id,discountPrice} = props?.tourPrice;
    const history = useHistory();

    const handleClick = (id) =>{
        const uri = `/datas/${id}`;
        history.push(uri)
        // console.log('click me',id)
        // const uri = `https://jsonplaceholder.typicode.com/users/${id}`
        // fetch(uri)
        // .then( res => res.json())
        // .then( data => console.log(data))
    }

    return (
       <div className="col-md-4">
            <div className=" border border-2 m-2 p-3  custom-cart" >
               
                <img src={src} alt="" className="img-fluid" />
                <h4 className="my-3">Sports : {name}</h4>
                <h3>Price : {price} </h3>
                <h3>Duration : {duration} </h3>
                <h3 className="line">Discount : <del style={{color:"red"}}> {discountPrice} </del></h3>

                    <button className="custom-btn mt-3" onClick={()=>handleClick(_id)}>Book Now</button>
            </div>
       </div>
        );
};

export default TourPlan;