import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { RenderDogAdoptCard } from "./DogsComponent";
import { RenderCatAdoptCard } from "./CatsComponent";
import { Loading } from "./LoadingComponent";

function Featured(props) {
    const featuredDogs = props.dogs.map(dog => {
        if (dog.featured) {
            return (
                <div key={dog.id} className="col my-3">
                    <RenderDogAdoptCard dog={dog} />
                </div>
            );
        }
    });

    const featuredCats = props.cats.map(cat => {
        if (cat.featured) {
            return (
                <div key={cat.id} className="col my-3">
                    <RenderCatAdoptCard cat={cat} />
                </div>
            );
        }
    });

    if (props.dogsLoading) {
        return <Loading />;
    }
    if (props.dogErrMess) {
        return <h4>{props.dogErrMess}</h4>;
    }
    if (props.dogs && props.cats) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center my-4">
                        <h1>Featured Fur Babies Available For Adoption</h1>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-4">
                    {featuredDogs}
                </div>
                <div className="row row-cols-1 row-cols-md-4">
                    {featuredCats}
                </div>
                <div className="row">
                    <div className="col text-center mb-3">
                        <Link to="/dogs">
                            <Button color="primary">More Dogs to adopt</Button>
                        </Link>
                    </div>
                    <div className="col text-center mb-3">
                        <Link to="/cats">
                            <Button color="primary">More Cats to adopt</Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    return <div />;
}

export default Featured;
