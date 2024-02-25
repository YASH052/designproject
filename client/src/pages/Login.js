import React, { useState } from 'react';
import './Login.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    // const [flag, setflag] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="frame">
            <div className="main mt-4 ms-2">
                <div className="header mt-4">
                    <div className="content">
                        <div className="ms-1 wlcm">Welcome, login</div>
                        <div className="ms-1 brands">Empowering individuals and brands</div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="mt-2 btn-group" style={{ fontFamily: 'Poppins' }}>
                            <p className="border rounded-pill p-2 me-2 hover-effect">I am an influencer</p>
                            <p className="border rounded-pill p-2 hover-effect">Brand</p>
                        </span>
                        {/* <div className="number">{flag}/2</div> */}
                    </div>
                </div>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter Your Phone" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <div className="input-group">
                            <Form.Control type={showPassword ? "text" : "password"} placeholder="Password" />
                            <span className="input-group-text" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <Form.Text className="text-muted d-flex justify-content-end">
                            <a href="/">Forgot Password</a>
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;
