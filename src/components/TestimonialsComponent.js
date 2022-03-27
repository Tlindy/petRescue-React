import React from "react";
import {
    Media,
    Modal,
    ModalHeader,
    ModalBody,
    Button,
    Label,
} from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import { Loading } from "./LoadingComponent";

class TestimonialForm extends React.Component {
    state = {
        isModalOpen: false,
    };

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    };

    handleSubmit = values => {
        this.toggleModal();
        console.log(values.image);
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
        this.props.addTestimonial(values.image, values.info);
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
                    <ModalHeader id="modalHeader" toggle={this.toggleModal}>
                        Tell us your happy tail!
                    </ModalHeader>
                    <ModalBody id="modalBody">
                        <LocalForm
                            onSubmit={values => this.handleSubmit(values)}
                        >
                            <div className="form-group">
                                <Label htmlFor="info">
                                    What is your happy tail?:
                                </Label>
                                <Control.textarea
                                    model=".info"
                                    name="info"
                                    id="info"
                                    rows="10"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <Label>Share a photo:</Label>
                                <Control.file
                                    model=".image"
                                    name="image"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </div>
                        </LocalForm>
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

    if (props.testimonialsLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.testimonialsErrMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.testimonialsErrMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    if (props.testimonials) {
        return (
            <div className="container">
                <div className="row mt-2">
                    <div className="col mt-4 mb-5">
                        <h1 className="text-center mb-5">Our Happy Tails</h1>
                        <TestimonialForm
                            addTestimonial={props.addTestimonial}
                        />
                        <Media list>{happyTails}</Media>
                    </div>
                </div>
            </div>
        );
    }
    return <div />;
}

export default Testimonials;
