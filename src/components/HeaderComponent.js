import React, { Component } from "react";
import {
    Nav,
    Navbar,
    NavbarToggler,
    Collapse,
    NavItem,
    Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        };
    }

    toggleNav = () => {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    };

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col-4 col-sm-3 col-md-2 align-self-center">
                                <img
                                    src="/assets/images/furBabyLogo.png"
                                    alt="Find A Fur Baby logo"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col align-self-center">
                                <h1>Find A Fur Baby</h1>
                                <h2 className="text-primary">Pet Rescue</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar light sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/adopt">
                                        Adopt
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to="/getInvolved"
                                    >
                                        Get Involved
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to="/testimonials"
                                    >
                                        Testimonials
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to="/resources"
                                    >
                                        Resources
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to="/adoptionform"
                                        id="adoptFormLink"
                                    >
                                        Adoption Form
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;
