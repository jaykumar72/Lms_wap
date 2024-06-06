import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Registration.css';

const Registration = () => {
    const [loginImgUrl, setLoginImgUrl] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get('https://api.unsplash.com/search/photos', {
                    params: {
                        page: 1,
                        query: 'education',
                        client_id: 'm3C0C_cIUxndzUt3Oti4MCAWQ3WU_RFiZQyzBtMfuNU'
                    }
                });
                const randomIndex = Math.floor(Math.random() * response.data.results.length);
                let imageUrl = response.data.results[randomIndex].urls.regular;
                setLoginImgUrl(imageUrl);
            } catch (error) {
                console.error('Error fetching image from Unsplash:', error);
            }
        };

        fetchImage();
    }, []);

    

    return (
        <div>
            <section id='reg-ui' className="background-radial-gradient-reg">
                <img src={loginImgUrl} alt="Background" className="background-img-reg vh-100" />
                <div className="container-reg  text-center text-lg-start">
                    <div className="row gx-lg-5 align-items-center">
                        <div className="col-lg-6" style={{ zIndex: 10 }}>
                            <h1 className="display-5 fw-bold ls-tight heading-bg-reg" data-aos="fade-right">
                                Neucode
                            </h1>
                        </div>
                        <div className="col-lg-6 mb-lg-0 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
                            <div className="card-reg bg-glass-reg h-25" data-aos="zoom-in">
                                <div className="card-body-reg px-2 py-5 px-md-5">
                                    <h2 className="text-center mb-4 login-heading-reg">Sign Up</h2>
                                    <form autoComplete='off'>
                                        <div data-mdb-input-init className="form-outline-reg mb-4">
                                            <label className="form-label-reg" htmlFor="fullName">Full Name</label>
                                            <input type="text" id="fullName" className="form-control-reg" />
                                        </div>
                                        <div data-mdb-input-init className="form-outline-reg mb-4">
                                            <label className="form-label-reg" htmlFor="mobileNo">Mobile No</label>
                                            <input type="text" id="mobileNo" className="form-control-reg" />
                                        </div>
                                        <div data-mdb-input-init className="form-outline-reg mb-4">
                                            <label className="form-label-reg" htmlFor="email">Email address</label>
                                            <input type="email" id="email" className="form-control-reg" />
                                        </div>
                                        <div data-mdb-input-init className="form-outline-reg mb-4">
                                            <label className="form-label-reg" htmlFor="password">Password</label>
                                            <div className="input-group">
                                                <input type={showPassword ? "text" : "password"} id="password" className="form-control-reg" />
                                                {/* <button type="button" className="btn btn-outline-secondary" onClick={togglePasswordVisibility}>
                                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                </button> */}
                                            </div>
                                        </div>
                                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn-reg btn-primary btn-block  ">
                                            Sign Up
                                        </button>
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

export default Registration;
