import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Dogs from "./DogsComponent";
import Cats from "./CatsComponent";
import GetInvolved from "./GetInvolvedComponent";
import Testimonials from "./TestimonialsComponent";
import Resources from "./ResourcesComponent";
import About from "./AboutComponent";
import AdoptionForm from "./AdoptionFormComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { DOGS } from "../shared/dogsAdopt";
import { CATS } from "../shared/catsAdopt";
import { TESTIMONIALS } from "../shared/testimonials";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: DOGS,
            cats: CATS,
            testimonials: TESTIMONIALS,
        };
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
                        path="/dogs"
                        render={() => <Dogs dogs={this.state.dogs} />}
                    />
                    <Route
                        exact
                        path="/cats"
                        render={() => <Cats cats={this.state.cats} />}
                    />
                    <Route
                        exact
                        path="/getinvolved"
                        render={() => <GetInvolved />}
                    />
                    <Route
                        exact
                        path="/testimonials"
                        render={() => (
                            <Testimonials
                                testimonials={this.state.testimonials}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/resources"
                        render={() => <Resources />}
                    />
                    <Route exact path="/about" render={() => <About />} />
                    <Route
                        exact
                        path="/adoptionform"
                        render={() => <AdoptionForm />}
                    />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;
