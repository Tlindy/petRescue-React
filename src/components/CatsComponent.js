import React from "react";
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

export function RenderCatAdoptCard({ cat }) {
    return (
        <Card>
            <CardImg width="100%" src={cat.image} alt={cat.alt} top />
            <CardBody>
                <CardTitle tag="h5">Name: {cat.name}</CardTitle>
                <CardText>{cat.info}</CardText>
                <Link to="/adoptionform">
                    <Button color="primary">Adopt</Button>
                </Link>
            </CardBody>
        </Card>
    );
}

function Cats(props) {
    const catsToAdopt = props.cats.map(cat => {
        return (
            <div key={cat.id} className="col my-3">
                <RenderCatAdoptCard cat={cat} />
            </div>
        );
    });

    if (props.catsLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.catsErrMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.catsErrMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    if (props.cats) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center my-4">
                        <h1>Cats Available For Adoption</h1>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-4">
                    {catsToAdopt}
                </div>
            </div>
        );
    }
    return <div />;
}

export default Cats;
