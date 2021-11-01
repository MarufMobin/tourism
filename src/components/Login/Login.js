import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import drwaImg from '../../images/draw.png'
import './Login.css'
import { useForm } from 'react-hook-form';
const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const { singInWithGoogle, setUser } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const url = location.state?.from || "/home"
    console.log("login page " , url)

    const singInUsingGoogle = () => {
        singInWithGoogle()
            .then((result) => {
                setUser(result?.user)
                history.push(url)
                console.log(result.user)
            }).catch(err => console.log(err))
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 p-0 ">
                    <div className="inner-login">
                                <h2>Please Add Our Community</h2>
                                <p>The Free Tour Community is a worldwide family of 70+ local free tour initiatives operating in 30+ countries. We are incredibly proud of our cities, and it's our mission to help you discover them from a local's point of view. We deliver top-rated, quality-oriented free walking tours and promote the pay-what-you-wish concept around the world.</p>
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="row">
                    <div className="col-md-6 my-5">
                               
                        <form onSubmit={handleSubmit(onSubmit)} className="form-design rounded shadow-lg">
                            <h3>Add With Us</h3>
                            <input type="text" placeholder="Your Name" {...register("example")} className="input-field" />
                            <input type="email" placeholder="Email"  {...register("exampleRequired", { required: true })} className="input-field" />
                            <input type="number" placeholder="Phone No"  {...register("exampleRequired", { required: true })} className="input-field" />
                            <input type="text" placeholder="Your Address"  {...register("exampleRequired", { required: true })} className="input-field" />
                            <div className="mb-3">
                                <input type="submit" className="input-button" />
                                <button onClick={singInUsingGoogle} className="custom-btn ms-5">Google Sing In</button>
                            </div>
                            <Link to="/registration"><span style={{textDecoration:"none"}}> You are new User ?</span></Link>
                        </form>


                    </div>
                    <div className="col-md-6 my-5">

                        <img src={drwaImg} alt="" className="img-fluid cus-img" />
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
        </div>
    );
};

export default Login;