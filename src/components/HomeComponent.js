import React from "react";
import CarouselComponent from "./CarouselComponent";
import { Card, CardDeck, CardImg, CardText, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <CarouselComponent />
            </div>
            <div className="row">
                <div className="col">
                    <CardDeck className="mt-5 mb-5">
                        <Card outline color="secondary">
                            <Link to="/adopt">
                                <CardImg
                                    src="/assets/images/adopt.jpg"
                                    alt="Person holding a dog and a cat"
                                    width="100%"
                                    top
                                />
                                <CardHeader
                                    tag="h3"
                                    className="text-center text-white bg-primary"
                                >
                                    Adopt
                                </CardHeader>
                                <CardText className="m-2">
                                    There are so many animals who need a loving
                                    home. See which animals we have available.
                                    You might just find your next fur baby here!
                                </CardText>
                            </Link>
                        </Card>
                        <Card outline color="secondary">
                            <Link to="/getinvolved">
                                <CardHeader
                                    tag="h3"
                                    className="text-center text-white bg-primary"
                                >
                                    Volunteer
                                </CardHeader>
                                <CardImg
                                    src="/assets/images/volunteers2.jpg"
                                    alt="Two volunteers hugging a dog and smiling"
                                    width="100%"
                                    top
                                />
                                <CardText className="m-2">
                                    We love to have new volunteers join our
                                    team. Find out how you can help more animals
                                    find their furever home here!
                                </CardText>
                            </Link>
                        </Card>
                        <Card outline color="secondary">
                            <Link to="/testimonials">
                                <CardImg
                                    src="/assets/images/dogReading.jpg"
                                    alt="A dog wearing glasses and reading a book"
                                    width="100%"
                                    top
                                />
                                <CardHeader
                                    tag="h3"
                                    className="text-center text-white bg-primary"
                                >
                                    Read happy tails
                                </CardHeader>
                                <CardText className="m-2">
                                    We have helped many fur babies find a
                                    family. Read some of our heartwarming
                                    stories here!
                                </CardText>
                            </Link>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        </div>
    );
}

export default Home;
