import { findAllByDisplayValue } from "@testing-library/react";
import React, { Component } from "react";
import { Button, Form, Label, Input, FormFeedback } from "reactstrap";

class GetInvolved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            areaCode: "",
            phoneNum: "",
            email: "",
            address: "",
            address2: "",
            city: "",
            state: "",
            zipCode: "",
            infoCorrect: false,
            agreeContact: false,
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value =
            target.type === "checkbox" ? target.checked : target.value;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (event) => {
        console.log("Current state is: " + JSON.stringify(this.state));
        event.preventDefault();
    };

    render() {
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col">
                        <h1 className="text-center">How to get involved</h1>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <h3>What should you know before volunteering?</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris elementum, ante at feugiat laoreet,
                            urna ipsum auctor ligula, nec ullamcorper nisl ex at
                            dui. Sed hendrerit tempus nisl vitae pulvinar. Etiam
                            lectus nunc, feugiat ac nibh et, consequat bibendum
                            augue. Duis quis pulvinar massa. Aliquam eget sapien
                            sit amet risus varius gravida ut auctor est.
                            Maecenas lectus urna, gravida sit amet ultrices eu,
                            luctus et magna. Cras maximus, enim id auctor
                            vestibulum, tortor eros mollis lorem, sed suscipit
                            nulla velit ut urna. Maecenas posuere nisl nec odio
                            lacinia maximus. Phasellus vulputate tellus sit amet
                            eros pretium, vel venenatis metus tempus. Sed
                            tincidunt lorem a nisl ultricies ullamcorper.
                            Aliquam erat volutpat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris elementum, ante at feugiat laoreet,
                            urna ipsum auctor ligula, nec ullamcorper nisl ex at
                            dui. Sed hendrerit tempus nisl vitae pulvinar. Etiam
                            lectus nunc, feugiat ac nibh et, consequat bibendum
                            augue. Duis quis pulvinar massa. Aliquam eget sapien
                            sit amet risus varius gravida ut auctor est.
                            Maecenas lectus urna, gravida sit amet ultrices eu,
                            luctus et magna. Cras maximus, enim id auctor
                            vestibulum, tortor eros mollis lorem, sed suscipit
                            nulla velit ut urna. Maecenas posuere nisl nec odio
                            lacinia maximus. Phasellus vulputate tellus sit amet
                            eros pretium, vel venenatis metus tempus. Sed
                            tincidunt lorem a nisl ultricies ullamcorper.
                            Aliquam erat volutpat.
                        </p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <h3 className="mb-5">
                            If you would like to be contacted about volunteering
                            please fill out the form below:
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form onSubmit={this.handleSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <Label
                                        htmlFor="firstName"
                                        className="font-weight-bold"
                                    >
                                        First Name:*
                                    </Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        required
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <Label
                                        htmlFor="lastName"
                                        className="font-weight-bold"
                                    >
                                        Last Name:*
                                    </Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        required
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <Label
                                        htmlFor="areaCode"
                                        className="font-weight-bold"
                                    >
                                        Phone Number:*
                                    </Label>
                                    <Input
                                        type="tel"
                                        className="form-control"
                                        id="areaCode"
                                        name="areaCode"
                                        placeholder="Area code"
                                        required
                                        value={this.state.areaCode}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <Label className="font-weight-bold">
                                        Format: ###-####
                                    </Label>
                                    <Input
                                        type="tel"
                                        className="form-control"
                                        name="phoneNum"
                                        placeholder="Phone Number"
                                        required
                                        value={this.state.phoneNum}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="form-group col-md-5">
                                    <Label
                                        htmlFor="email"
                                        className="font-weight-bold"
                                    >
                                        Email:*
                                    </Label>
                                    <Input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-8">
                                    <Label
                                        htmlFor="address"
                                        className="font-weight-bold"
                                    >
                                        Address:
                                    </Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        name="address"
                                        placeholder="1234 Main St."
                                        value={this.state.address}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <Label
                                        htmlFor="address2"
                                        className="font-weight-bold"
                                    >
                                        Address 2:
                                    </Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="address2"
                                        name="address2"
                                        placeholder="Apt, suite, etc."
                                        value={this.state.address2}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <Label
                                        htmlFor="city"
                                        className="font-weight-bold"
                                    >
                                        City:
                                    </Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        name="city"
                                        placeholder="City"
                                        value={this.state.city}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <Label
                                        htmlFor="state"
                                        className="font-weight-bold"
                                    >
                                        State:
                                    </Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="state"
                                        name="state"
                                        placeholder="State"
                                        value={this.state.state}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="form-group col-md-2">
                                    <Label
                                        htmlFor="zipCode"
                                        className="font-weight-bold"
                                    >
                                        Zip Code:
                                    </Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="zipCode"
                                        name="zipCode"
                                        placeholder="Zip Code"
                                        value={this.state.zipCode}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-2">
                                <Label className="font-weight-bold">
                                    How old are you?*
                                </Label>
                                <div className="form-check">
                                    <Input
                                        type="radio"
                                        className="form-check-input"
                                        id="under21"
                                        name="age"
                                        value="under21"
                                    />
                                    <Label
                                        htmlFor="under21"
                                        className="font-weight-bold"
                                    >
                                        Under 21
                                    </Label>
                                </div>
                                <div className="form-check">
                                    <Input
                                        type="radio"
                                        className="form-check-input"
                                        id="21-24"
                                        name="age"
                                        value="21-24"
                                    />
                                    <Label
                                        htmlFor="21-24"
                                        className="font-weight-bold"
                                    >
                                        21-24
                                    </Label>
                                </div>
                                <div className="form-check">
                                    <Input
                                        type="radio"
                                        className="form-check-input"
                                        id="25-30"
                                        name="age"
                                        value="25-30"
                                    />
                                    <Label
                                        htmlFor="25-30"
                                        className="font-weight-bold"
                                    >
                                        25-30
                                    </Label>
                                </div>
                                <div className="form-check">
                                    <Input
                                        type="radio"
                                        className="form-check-input"
                                        id="31-40"
                                        name="age"
                                        value="31-40"
                                    />
                                    <Label
                                        htmlFor="31-40"
                                        className="font-weight-bold"
                                    >
                                        31-40
                                    </Label>
                                </div>
                                <div className="form-check">
                                    <Input
                                        type="radio"
                                        className="form-check-input"
                                        id="41-55"
                                        name="age"
                                        value="41-55"
                                    />
                                    <Label
                                        htmlFor="41-55"
                                        className="font-weight-bold"
                                    >
                                        41-55
                                    </Label>
                                </div>
                                <div className="form-check">
                                    <Input
                                        type="radio"
                                        className="form-check-input"
                                        id="56-65"
                                        name="age"
                                        value="56-65"
                                    />
                                    <Label
                                        htmlFor="56-65"
                                        className="font-weight-bold"
                                    >
                                        56-65
                                    </Label>
                                </div>
                                <div className="form-check">
                                    <Input
                                        type="radio"
                                        className="form-check-input"
                                        id="over65"
                                        name="age"
                                        value="over65"
                                    />
                                    <Label
                                        htmlFor="over65"
                                        className="font-weight-bold"
                                    >
                                        Over 65
                                    </Label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <div className="form-check">
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                name="infoCorrect"
                                                required
                                                checked={this.state.infoCorrect}
                                                onChange={
                                                    this.handleInputChange
                                                }
                                            />
                                            The above information is correct to
                                            the best of my knowledge
                                        </Label>
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <div className="form-check">
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                name="agreeContact"
                                                required
                                                checked={
                                                    this.state.agreeContact
                                                }
                                                onChange={
                                                    this.handleInputChange
                                                }
                                            />
                                            By submitting this form I am
                                            agreeing to be contacted by Find A
                                            Fur Baby
                                        </Label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group offset-md-5">
                                <Button type="submit" color="primary">
                                    Submit Form
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default GetInvolved;
