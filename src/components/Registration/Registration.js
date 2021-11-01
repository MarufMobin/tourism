import React from 'react';
import { useForm } from 'react-hook-form';
import './Registration.css'
import imgReg from '../../images/register.png'
const Registration = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="registration-section">

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="res-back">
                            <h2>Please Regisistration First</h2>
                            <p>Search Usa Company Registration, Information from Trusted Internet Sources. Explore the Best Info Now. 100+ Unique Results. Find All Info You Want. Quick Answers. Useful & Relevant. Find in Seconds.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">

                <div className="row">
                    <div className="col-md-6 my-5">

                        <img src={imgReg} alt="" className="img-fluid cus-img" />
                    </div>
                    <div className="col-md-6 my-5">
                           
                        <form onSubmit={handleSubmit(onSubmit)} className="form-design rounded shadow-lg">
                        <h3 className="mb-5">Registretion Form</h3>
                            <input type="text" placeholder="Your Name" {...register("example")} className="input-field" />
                            <input type="email" placeholder="Email"  {...register("exampleRequired", { required: true })} className="input-field" />
                            <input type="number" placeholder="Phone No"  {...register("exampleRequired", { required: true })} className="input-field" />
                            <input type="text" placeholder="Your Address"  {...register("exampleRequired", { required: true })} className="input-field" />
                            <div className="mb-3">
                                <input type="submit" className="input-button" />
                                <button className="custom-btn ms-5">Google Sing In</button>
                            </div>
                            {/* <Link to="/registration"><span style={{textDecoration:"none"}}> You are new User ?</span></Link> */}
                        </form>


                    </div>

                </div>
            </div>

        </div>
    );
};

export default Registration;