import React from "react";
import "./footer.css";
import {FaFacebook, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa';
import {NavLink} from "react-router-dom";
import Privacy from "../../containers/Privacy";

const Footer = () => {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row mt50">
                        <div className="col-12">
                            <div className="footerBox">

                                <div className="footerLogo">
                                    <img src="./assets/logofooter.png" alt=""/>
                                </div>
                                <div className="footerSocial">
                                    <ul>
                                        <li className="footerSocialIcon"><a href="https://www.facebook.com/"
                                                                            target='_blank'><FaFacebook/></a></li>
                                        <li className="footerSocialIcon"><a href="https://www.instagram.com/"
                                                                            target='_blank'><FaInstagramSquare/></a>
                                        </li>
                                        <li className="footerSocialIcon"><a href="https://twitter.com/" target='_blank'>
                                            <FaTwitterSquare/></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footerMenu">
                                    <ul>
                                        <li><NavLink
                                            className="navFooter"
                                            to="/home"
                                            activeStyle={{
                                                color: "black",
                                            }}
                                        >
                                            Home
                                        </NavLink></li>
                                        <li><NavLink
                                            className="navFooter"
                                            exact
                                            to="/service"
                                            activeStyle={{
                                                color: "red",
                                            }}
                                        >
                                            Service
                                        </NavLink></li>
                                        <li><NavLink
                                            className="navFooter"
                                            exact
                                            to="/contact"
                                            activeStyle={{
                                                color: "red",
                                            }}
                                        >
                                            Contact
                                        </NavLink></li>
                                        <li><NavLink
                                            className="navFooter"
                                            exact
                                            to="/about"
                                            activeStyle={{
                                                color: "red",
                                            }}
                                        >
                                            About us
                                        </NavLink></li>
                                        <li><NavLink
                                            className="navFooter"
                                            exact
                                            to="/contact"
                                            activeStyle={{
                                                color: "red",
                                            }}
                                        >
                                            FAQ
                                        </NavLink></li>
                                    </ul>
                                </div>
                                <div className="footerby">
                                    <h6> Copyright 2021</h6>
                                    <h6>
                                        <li className='footLi'><NavLink exact to='/privacy'>Privacy Police</NavLink></li>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Footer