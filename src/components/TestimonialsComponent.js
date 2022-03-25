import React from "react";
import { Media, Modal, ModalHeader, ModalBody, Button } from "reactstrap";

class TestimonialForm extends React.Component {
    state = {
        isModalOpen: false,
    };

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="text-right mb-5">
                    <Button onClick={this.toggleModal} color="primary">
                        Add Your Happy Tail
                    </Button>
                </div>
                <Modal isOpen={this.state.isModalOpen}>
                    <ModalHeader toggle={this.toggleModal}>
                        Tell us your happy tail!
                    </ModalHeader>
                    <ModalBody>
                        <p>The form will go here.</p>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

function RenderTestimonial({ testimonial }) {
    if (testimonial) {
        if (testimonial.id % 2 === 0) {
            return (
                <React.Fragment>
                    <Media className="col-md-3">
                        <Media
                            object
                            src={testimonial.image}
                            alt={testimonial.alt}
                            className="img-thumbnail my-3"
                            width="200"
                        />
                    </Media>
                    <Media body className="align-self-center col-md-9 ml-2">
                        <p>{testimonial.info}</p>
                    </Media>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <Media body className="align-self-center col-md-9 mr-2">
                        {testimonial.info}
                    </Media>
                    <Media className="col-md-3">
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
    return <div />;
}

function Testimonials(props) {
    const happyTails = props.testimonials.map(testimonial => {
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
                <div className="col mt-4 mb-5">
                    <h1 className="text-center mb-5">Our Happy Tails</h1>
                    <TestimonialForm addTestimonial={props.addTestimonial} />
                    <Media list>{happyTails}</Media>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
