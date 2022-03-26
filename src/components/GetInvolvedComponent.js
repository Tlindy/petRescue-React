import React, { Component } from "react";
import { Button, Label } from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class GetInvolved extends Component {
    handleSubmit = values => {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
        this.props.resetVolunteerForm();
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
                    <img
                        src="/assets/images/volunteers3.jpg"
                        alt="Two people petting a dog"
                        width="500"
                        className="mx-auto"
                    />
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
                <div className="row mt-3">
                    <div className="col text-danger">
                        <p>*= required field</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form
                            model="volunteerForm"
                            onSubmit={values => this.handleSubmit(values)}
                        >
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <Label
                                        htmlFor="firstName"
                                        className="font-weight-bold"
                                    >
                                        First Name:*
                                    </Label>
                                    <Control.text
                                        model=".firstName"
                                        className="form-control"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15),
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                            minLength:
                                                "Must be at least 2 characters",
                                            maxLength:
                                                "Must be 15 characters or less",
                                        }}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <Label
                                        htmlFor="lastName"
                                        className="font-weight-bold"
                                    >
                                        Last Name:*
                                    </Label>
                                    <Control.text
                                        model=".lastName"
                                        className="form-control"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15),
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                            minLength:
                                                "Must be at least 2 characters",
                                            maxLength:
                                                "Must be 15 characters or less",
                                        }}
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
                                    <Control.text
                                        model=".areaCode"
                                        className="form-control"
                                        id="areaCode"
                                        name="areaCode"
                                        placeholder="Area code"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(3),
                                            isNumber,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".areaCode"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                            minLength: "Must be 3 Numbers",
                                            maxLength: "Must be 3 Numbers",
                                            isNumber: "Must be a number",
                                        }}
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <Label className="font-weight-bold">
                                        Format: ###-####
                                    </Label>
                                    <Control.text
                                        model=".phoneNum"
                                        className="form-control"
                                        name="phoneNum"
                                        placeholder="Phone Number"
                                        validators={{
                                            required,
                                            minLength: minLength(7),
                                            maxLength: maxLength(7),
                                            isNumber,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".phoneNum"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                            minLength: "Must be 7 Numbers",
                                            maxLength: "Must be 7 Numbers",
                                            isNumber: "Must be a number",
                                        }}
                                    />
                                </div>
                                <div className="form-group col-md-5">
                                    <Label
                                        htmlFor="email"
                                        className="font-weight-bold"
                                    >
                                        Email:*
                                    </Label>
                                    <Control.text
                                        model=".email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        validators={{
                                            required,
                                            validEmail,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                            validEmail: "Inavlid email address",
                                        }}
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
                                    <Control
                                        model=".address"
                                        className="form-control"
                                        id="address"
                                        name="address"
                                        placeholder="1234 Main St."
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <Label
                                        htmlFor="address2"
                                        className="font-weight-bold"
                                    >
                                        Address 2:
                                    </Label>
                                    <Control.text
                                        model=".address2"
                                        className="form-control"
                                        id="address2"
                                        name="address2"
                                        placeholder="Apt, suite, etc."
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
                                    <Control.text
                                        model=".city"
                                        className="form-control"
                                        id="city"
                                        name="city"
                                        placeholder="City"
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <Label
                                        htmlFor="state"
                                        className="font-weight-bold"
                                    >
                                        State:
                                    </Label>
                                    <Control.text
                                        model=".state"
                                        className="form-control"
                                        id="state"
                                        name="state"
                                        placeholder="State"
                                    />
                                </div>
                                <div className="form-group col-md-2">
                                    <Label
                                        htmlFor="zipCode"
                                        className="font-weight-bold"
                                    >
                                        Zip Code:
                                    </Label>
                                    <Control.text
                                        model=".zipCode"
                                        className="form-control"
                                        id="zipCode"
                                        name="zipCode"
                                        placeholder="Zip Code"
                                        validators={{
                                            isNumber,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".zipCode"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            isNumber: "Must be a number",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-2">
                                <Label className="font-weight-bold">
                                    How old are you?*
                                </Label>
                                <div className="form-check">
                                    <Control.radio
                                        model=".age"
                                        className="form-check-input"
                                        id="under21"
                                        name="age"
                                        value="under21"
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".age"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                        }}
                                    />
                                    <Label
                                        htmlFor="under21"
                                        className="font-weight-bold"
                                    >
                                        Under 21
                                    </Label>
                                </div>
                                <div className="form-check">
                                    <Control.radio
                                        model=".age"
                                        className="form-check-input"
                                        id="21-24"
                                        name="age"
                                        value="21-24"
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".age"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                        }}
                                    />
                                    <Label
                                        htmlFor="21-24"
                                        className="font-weight-bold"
                                    >
                                        21-24
                                    </Label>
                                </div>
                                <div className="form-check">
                                    <Control.radio
                                        model=".age"
                                        className="form-check-input"
                                        id="25-30"
                                        name="age"
                                        value="25-30"
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".age"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                        }}
                                    />
                                    <Label
                                        htmlFor="25-30"
                                        className="font-weight-bold"
                                    >
                                        25-30
                                    </Label>
                                </div>
                                <div className="form-check">
                                    <Control.radio
                                        model=".age"
                                        className="form-check-input"
                                        id="31-40"
                                        name="age"
                                        value="31-40"
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".age"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                        }}
                                    />
                                    <Label
                                        htmlFor="31-40"
                                        className="font-weight-bold"
                                    >
                                        31-40
                                    </Label>
                                </div>
                                <div className="form-check">
                                    <Control.radio
                                        model=".age"
                                        className="form-check-input"
                                        id="41-55"
                                        name="age"
                                        value="41-55"
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".age"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                        }}
                                    />
                                    <Label
                                        htmlFor="41-55"
                                        className="font-weight-bold"
                                    >
                                        41-55
                                    </Label>
                                </div>
                                <div className="form-check">
                                    <Control.radio
                                        model=".age"
                                        className="form-check-input"
                                        id="56-65"
                                        name="age"
                                        value="56-65"
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".age"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                        }}
                                    />
                                    <Label
                                        htmlFor="56-65"
                                        className="font-weight-bold"
                                    >
                                        56-65
                                    </Label>
                                </div>
                                <div className="form-check">
                                    <Control.radio
                                        model=".age"
                                        className="form-check-input"
                                        id="over65"
                                        name="age"
                                        value="over65"
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".age"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                        }}
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
                                            <Control.checkbox
                                                model=".infoCorrect"
                                                className="form-check-input"
                                                id="infoCorrect"
                                                required
                                            />
                                            The above information is correct to
                                            the best of my knowledge
                                        </Label>
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox
                                                model=".agreeContact"
                                                className="form-check-input"
                                                id="agreeContact"
                                                required
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
