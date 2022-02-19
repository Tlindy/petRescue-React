import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Adopt from "./AdoptComponent";
import GetInvolved from "./GetInvolvedComponent";
import Testimonials from "./TestimonialsComponent";
import Resources from "./ResourcesComponent";
import About from "./AboutComponent";
import AdoptionForm from "./AdoptionFormComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
    render() {
        const HomePage = () => {
            return <Home />;
        };

        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/adopt" render={() => <Adopt />} />
                    <Route
                        exact
                        path="/getInvolved"
                        render={() => <GetInvolved />}
                    />
                    <Route
                        exact
                        path="/testimonials"
                        render={() => <Testimonials />}
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
            </React.Fragment>
        );
    }
}

export default Main;
