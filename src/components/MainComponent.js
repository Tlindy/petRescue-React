import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Featured from "./FeaturedComponent";
import Dogs from "./DogsComponent";
import Cats from "./CatsComponent";
import GetInvolved from "./GetInvolvedComponent";
import Testimonials from "./TestimonialsComponent";
import About from "./AboutComponent";
import AdoptionForm from "./AdoptionFormComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import {
    addTestimonial,
    fetchDogs,
    fetchCats,
    fetchTestimonials,
} from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
        dogs: state.dogs,
        cats: state.cats,
        testimonials: state.testimonials,
    };
};

const mapDispatchToProps = {
    addTestimonial: (image, alt, info) => addTestimonial(image, alt, info),
    fetchDogs: () => fetchDogs(),
    fetchCats: () => fetchCats(),
    fetchTestimonials: () => fetchTestimonials(),
    resetAdoptionForm: () => actions.reset("adoptionForm"),
    resetVolunteerForm: () => actions.reset("volunteerForm"),
};

class Main extends Component {
    componentDidMount() {
        this.props.fetchDogs();
        this.props.fetchCats();
        this.props.fetchTestimonials();
    }

    render() {
        const HomePage = () => {
            return <Home />;
        };

        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route
                        exact
                        path="/featured"
                        render={() => (
                            <Featured
                                dogs={this.props.dogs.dogs}
                                cats={this.props.cats.cats}
                                dogsLoading={this.props.dogs.isLoading}
                                dogsErrMess={this.props.dogs.errMess}
                                catsLoading={this.props.cats.isLoading}
                                catsErrMess={this.props.cats.errMess}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/dogs"
                        render={() => (
                            <Dogs
                                dogs={this.props.dogs.dogs}
                                dogsLoading={this.props.dogs.isLoading}
                                dogsErrMess={this.props.dogs.errMess}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/cats"
                        render={() => (
                            <Cats
                                cats={this.props.cats.cats}
                                catsLoading={this.props.cats.isLoading}
                                catsErrMess={this.props.cats.errMess}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/getinvolved"
                        render={() => (
                            <GetInvolved
                                resetVolunteerForm={
                                    this.props.resetVolunteerForm
                                }
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/testimonials"
                        render={() => (
                            <Testimonials
                                testimonials={
                                    this.props.testimonials.testimonials
                                }
                                testimonialsLoading={
                                    this.props.testimonials.isLoading
                                }
                                testimonialsErrMess={
                                    this.props.testimonials.errMess
                                }
                                addTestimonial={this.props.addTestimonial}
                            />
                        )}
                    />
                    <Route exact path="/about" render={() => <About />} />
                    <Route
                        exact
                        path="/adoptionform"
                        render={() => (
                            <AdoptionForm
                                resetAdoptionForm={this.props.resetAdoptionForm}
                            />
                        )}
                    />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
