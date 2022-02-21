import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 mt-5 text-center">
                        <h5>Social</h5>
                        <a
                            className="btn btn-social-icon btn-instagram"
                            href="http://instagram.com/"
                        >
                            <i className="fa fa-instagram" />
                        </a>{" "}
                        <a
                            className="btn btn-social-icon btn-facebook"
                            href="http://facebook.com/"
                        >
                            <i className="fa fa-facebook" />
                        </a>{" "}
                        <a
                            className="btn btn-social-icon btn-twitter"
                            href="http://twitter.com/"
                        >
                            <i className="fa fa-twitter" />
                        </a>{" "}
                        <a
                            className="btn btn-social-icon btn-google"
                            href="http://youtube.com/"
                        >
                            <i className="fa fa-youtube" />
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-3 mt-5 text-center">
                        <h5>Hours</h5>
                        <p className="mb-0">Monday-Saturday: 12 p.m.-5 p.m.</p>
                        <p>Sunday: Closed</p>
                    </div>
                    <div className="col-sm-6 col-md-3 mt-5 text-center">
                        <h5>Location</h5>
                        <address>
                            1234 Main St.
                            <br />
                            Detroit, MI 12345
                            <br />
                        </address>
                    </div>
                    <div className="col-sm-6 col-md-3 mt-5 text-center">
                        <h5>Contact Us</h5>
                        <a
                            role="button"
                            className="btn btn-link"
                            href="tel:+12065551234"
                        >
                            <i className="fa fa-phone" /> 1-200-444-1234
                        </a>
                        <a
                            role="button"
                            className="btn btn-link"
                            href="mailto:campsites@nucamp.co"
                        >
                            <i className="fa fa-envelope-o" />{" "}
                            findafurbaby@email.com
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <h5>Links</h5>
                        <Link to="/home" className="px-1">
                            Home
                        </Link>
                        <Link
                            to="/featured"
                            className="border-left border-dark px-1"
                        >
                            Adopt
                        </Link>
                        <Link
                            to="/getinvolved"
                            className="border-left border-dark px-1"
                        >
                            Get Involved
                        </Link>
                        <Link
                            to="/testimonials"
                            className="border-left border-dark px-1"
                        >
                            Testimonials
                        </Link>
                        <Link
                            to="/about"
                            className="border-left border-dark px-1"
                        >
                            About
                        </Link>
                        <Link
                            to="/adoptionform"
                            className="border-left border-dark px-1"
                        >
                            Adoption Form
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
