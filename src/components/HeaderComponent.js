import React, { Component } from "react";
import {
    Nav,
    Navbar,
    NavbarToggler,
    Collapse,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Jumbotron,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            dropdownOpen: false,
        };
    }

    toggleNav = () => {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    };

    toggleDropdown = () => {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    };

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col-4 col-sm-3 col-md-2 align-self-center">
                                <Link to="/home">
                                    <img
                                        src="/assets/images/furBabyLogo.png"
                                        alt="Find A Fur Baby logo"
                                        className="img-fluid"
                                    />
                                </Link>
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
                                <Dropdown
                                    nav
                                    isOpen={this.state.dropdownOpen}
                                    toggle={this.toggleDropdown}
                                >
                                    <DropdownToggle caret nav>
                                        Adopt
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <NavLink
                                            className="nav-link"
                                            to="/featured"
                                        >
                                            <DropdownItem>
                                                Featured Fur Babies
                                            </DropdownItem>
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/dogs"
                                        >
                                            <DropdownItem>Dogs</DropdownItem>
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/cats"
                                        >
                                            <DropdownItem>Cats</DropdownItem>
                                        </NavLink>
                                    </DropdownMenu>
                                </Dropdown>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to="/getinvolved"
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
