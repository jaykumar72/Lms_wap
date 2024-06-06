import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFacebook, FaGoogle, FaTwitter, FaEye, FaEyeSlash } from "react-icons/fa";
import './Login.css';

const UserLogin = () => {
    const [loginImgUrl, setLoginImgUrl] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get('https://api.unsplash.com/search/photos', {
                    params: {
                        page: 1,
                        query: 'education',
                        w: 500,
                        h: 500,
                        fit: 'crop',
                        client_id: 'm3C0C_cIUxndzUt3Oti4MCAWQ3WU_RFiZQyzBtMfuNU'
                    }
                });
                console.log('Unsplash API Response:', response);
                const randomIndex = Math.floor(Math.random() * response.data.results.length);
                let imageUrl = response.data.results[randomIndex].urls.regular;

                console.log('Image URL:', imageUrl);
                setLoginImgUrl(imageUrl);
            } catch (error) {
                console.error('Error fetching image from Unsplash:', error);
            }
        };

        fetchImage();
    }, []);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div>
            <section id='login-ui' className="background-radial-gradient  ">
                <img src={loginImgUrl} alt="Background" className="background-img vh-100 " />
                <div className="container px-4 py-4  text-center text-lg-start ">
                    <div className="row gx-lg-5 align-items-center ">
                        <div className="col-lg-6 " style={{ zIndex: 10 }}>
                            <h1 className=" display-5 fw-bold ls-tight heading-bg" data-aos="fade-right">
                                Neucode 
                              
                            </h1>
                           
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" />
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong" />
                            <div className="card bg-glass" data-aos="zoom-in">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <h2 className="text-center mb-4 login-heading">Login</h2>
                                    <form autoComplete='off' >
                                        {/* Email input */}
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <label className="form-label " htmlFor="form3Example3">Email address</label>
                                            <input type="email" id="form3Example3" className="form-control" />
                                        </div>
                                        {/* Password input */}
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <label className="form-label " htmlFor="form3Example4">Password</label>
                                            <div className="input-group">
                                                <input type={showPassword ? "text" : "password"} id="form3Example4" className="form-control" />
                                                <button type="button" className="btn btn-outline-secondary" onClick={togglePasswordVisibility}>
                                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                </button>
                                            </div>
                                        </div>

                                        {/* Submit button */}
                                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                                           Login
                                        </button>

                                        <div className="text-center align-items-center">
                                            <p className="login-sign-h">or sign up with:</p>
                                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn-s btn-link btn-floating mx-1">
                                                <FaFacebook />
                                            </button>
                                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn-s btn-link btn-floating mx-1">
                                                <FaGoogle />
                                            </button>
                                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn-s btn-link btn-floating mx-1">
                                                <FaTwitter />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UserLogin;
