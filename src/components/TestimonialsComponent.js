import React from "react";
import { Media } from "reactstrap";

function RenderTestimonial({ testimonial }) {
    if (testimonial.id % 2 === 0) {
        return (
            <React.Fragment>
                <Media className="col-3">
                    <Media
                        object
                        src={testimonial.image}
                        alt={testimonial.alt}
                        className="img-thumbnail my-3"
                        width="200"
                    />
                </Media>
                <Media body className="align-self-center col-9 ml-2">
                    <p>{testimonial.info}</p>
                </Media>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <Media body className="align-self-center col-9 mr-2">
                    {testimonial.info}
                </Media>
                <Media className="col-3">
                    <Media
                        object
                        src={testimonial.image}
                        alt={testimonial.alt}
                        className="d-flex ml-5 my-3 img-thumbnail"
                        width="200"
                    />
                </Media>
            </React.Fragment>
        );
    }
}

function Testimonials(props) {
    const happyTails = props.testimonials.map((testimonial) => {
        return (
            <React.Fragment>
                <div key={testimonial.id} className="row mt-1">
                    <RenderTestimonial testimonial={testimonial} />
                </div>
                <hr />
            </React.Fragment>
        );
    });

    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col mb-5">
                    <h1 className="text-center">Our Happy Tails</h1>
                </div>
                <Media list>{happyTails}</Media>
            </div>
        </div>
    );
}

export default Testimonials;
