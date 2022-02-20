import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

function RenderDogAdoptCard({ dog }) {
    return (
        <Card>
            <CardImg width="100%" src={dog.image} alt={dog.alt} top />
            <CardBody>
                <CardTitle tag="h5">Name: {dog.name}</CardTitle>
                <CardTitle tag="h5">Breed: {dog.breed}</CardTitle>
                <CardText>{dog.info}</CardText>
            </CardBody>
        </Card>
    );
}

function Dogs(props) {
    const dogsToAdopt = props.dogs.map((dog) => {
        return (
            <div key={dog.id} className="col my-3">
                <RenderDogAdoptCard dog={dog} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center my-4">
                    <h1>Dogs Available For Adoption</h1>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-4">{dogsToAdopt}</div>
        </div>
    );
}

export default Dogs;
