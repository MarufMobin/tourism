import React from 'react';
import Map from '../Map/Map';
import { useForm } from "react-hook-form";
import './Contact.css'

const Contact = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="contact-section">
            <div className="coustom-contact">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Contact With Us</h2>
                            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="p-5" style={{ backgroundColor: "#bee4e7" }}>
                            <Map></Map>

                        </div>
                    </div>
                    <div className="col-md-6">

                        <form onSubmit={handleSubmit(onSubmit)} className="form-design rounded shadow-lg">
                            <input type="text" placeholder="Your Name" {...register("example")} className="input-field" />
                            <input type="email" placeholder="Email"  {...register("exampleRequired", { required: true })} className="input-field" />
                            <input type="number" placeholder="Phone No"  {...register("exampleRequired", { required: true })} className="input-field" />
                            <input type="text" placeholder="Your Address"  {...register("exampleRequired", { required: true })} className="input-field" />
                            <input type="submit" className="input-button" />
                        </form>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-6">
                        <h2>Need help?</h2>
                        <p>Donec vel quam vitae nisl posuere efficitur. Suspendisse eget lectus est. Pellentesque vitae maximus turpis. Morbi sodales vestibulum lorem a ultricies. Pellentesque id dignissim leo. Quisque porta eros nunc, non sodales tellus feugiat nec. Quisque sed pulvinar nulla. Donec viverra nisl non sem bibendum, et ullamcorper est mattis. Praesent posuere dui sit amet condimentum dignissim. Pellentesque quis nunc at erat.</p>
                    </div>
                    <div className="col-md-6">

                        <div className="row">
                            <div className="col-md-6"><ul>
                                <li>London</li>
                                <li>8 Carlton Gardens, St. James,</li>
                                <li>London, United Kingdom</li>
                                <li>Phone: +88 (0) 101 0000 000</li>
                                <li>Fax:+88 (0) 202 0000 001</li>
                                <li>Email: zulzanacoder@gmail.com</li>
                            </ul></div>
                            <div className="col-md-6">
                                <ul>
                                    <li>New York</li>
                                    <li>487 8th Avenue, Suite 721,</li>
                                    <li>New York NY 10010</li>
                                    <li>Phone: +88 (0) 101 0000 000</li>
                                    <li>Fax:+88 (0) 202 0000 001</li>
                                    <li>Email: zulzanacoder@gmail.com</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;