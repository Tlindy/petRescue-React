import React from "react";
import { Button } from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class AdoptionForm extends React.Component {
    handleSubmit = values => {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
        this.props.resetAdoptionForm();
    };

    render() {
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col">
                        <h1 className="text-center">
                            Find A Fur Baby Adoption Form
                        </h1>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <h3>
                            Important Information before you fill out this form:
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus et arcu sem. Integer vitae nulla
                            enim. Nullam finibus fermentum nunc sit amet
                            tristique. Proin pretium sit amet nibh eget euismod.
                            Nunc lectus dui, mattis eu diam eu, mattis ornare
                            nibh. Cras in interdum elit, id lacinia mi. Donec a
                            justo et odio hendrerit hendrerit a et odio.
                            Praesent magna purus, consectetur non lorem eget,
                            accumsan pharetra lorem. Curabitur lacinia velit eu
                            semper aliquet. Nullam ullamcorper aliquet mauris at
                            imperdiet. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Cras dolor urna, lacinia ac rhoncus
                            sit amet, pharetra mollis libero. Vestibulum quis
                            placerat mi. Nunc a odio tellus. Curabitur posuere
                            dui quam, eget condimentum risus mollis eu. Sed
                            aliquet massa quis arcu egestas dignissim eu
                            tincidunt neque.
                        </p>
                        <p>
                            Fusce lacinia metus a elit faucibus elementum.
                            Pellentesque sed mi id arcu lacinia ornare. Nulla eu
                            dolor iaculis, ultrices quam sit amet, imperdiet
                            urna. Suspendisse nulla lectus, sodales ut varius
                            sit amet, pellentesque imperdiet lectus. Curabitur
                            ac posuere dui. Morbi et maximus nulla. Donec
                            tincidunt convallis lacus vitae pretium. Praesent
                            ligula mi, volutpat id consectetur a, imperdiet
                            iaculis tellus.
                        </p>
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
                            model="adoptionForm"
                            onSubmit={values => this.handleSubmit(values)}
                        >
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label
                                        htmlFor="firstName"
                                        className="col-form-label font-weight-bold"
                                    >
                                        First Name:*
                                    </label>
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
                                    <label
                                        htmlFor="lastName"
                                        className="col-form-label font-weight-bold"
                                    >
                                        Last Name:*
                                    </label>
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
                                <div className="form-group col-md-6">
                                    <label
                                        htmlFor="whichFurBaby"
                                        className="col-form-label font-weight-bold"
                                    >
                                        Which fur baby are you interested in?
                                    </label>
                                    <Control.text
                                        model=".whichFurBaby"
                                        className="form-control"
                                        id="whichFurBaby"
                                        name="whichFurBaby"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="col-form-label font-weight-bold">
                                        The fur baby I am interested in is a:
                                    </label>
                                    <div className="form-check">
                                        <Control.radio
                                            model=".furBabyType"
                                            className="form-check-input"
                                            id="dog"
                                            name="furBabyType"
                                            value="dog"
                                        />
                                        <label
                                            htmlFor="dog"
                                            className="form-check-label font-weight-bold"
                                        >
                                            Dog
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Control.radio
                                            model=".furBabyType"
                                            className="form-check-input"
                                            id="cat"
                                            name="furBabyType"
                                            value="cat"
                                        />
                                        <label
                                            htmlFor="cat"
                                            className="form-check-label font-weight-bold"
                                        >
                                            Cat
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label
                                        htmlFor="areaCode"
                                        className="col-form-label font-weight-bold"
                                    >
                                        Phone Number:*
                                    </label>
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
                                    <label className="col-form-label font-weight-bold">
                                        Format: #######
                                    </label>
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
                                    <label
                                        htmlFor="email"
                                        className="col-form-label font-weight-bold"
                                    >
                                        Email:*
                                    </label>
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
                                    <label
                                        htmlFor="address"
                                        className="col-form-label font-weight-bold"
                                    >
                                        Address:
                                    </label>
                                    <Control
                                        model=".address"
                                        className="form-control"
                                        id="address"
                                        name="address"
                                        placeholder="1234 Main St."
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <label
                                        htmlFor="address2"
                                        className="col-form-label font-weight-bold"
                                    >
                                        Address 2:
                                    </label>
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
                                    <label
                                        htmlFor="city"
                                        className="col-form-label font-weight-bold"
                                    >
                                        City:
                                    </label>
                                    <Control.text
                                        model=".city"
                                        className="form-control"
                                        id="city"
                                        name="city"
                                        placeholder="City"
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <label
                                        htmlFor="state"
                                        className="col-form-label font-weight-bold"
                                    >
                                        State:
                                    </label>
                                    <Control.text
                                        model=".state"
                                        className="form-control"
                                        id="state"
                                        name="state"
                                        placeholder="State"
                                    />
                                </div>
                                <div className="form-group col-md-2">
                                    <label
                                        htmlFor="zipCode"
                                        className="col-form-label font-weight-bold"
                                    >
                                        Zip Code:
                                    </label>
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
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label className="col-form-label font-weight-bold">
                                        What is your living arrangement?*
                                    </label>
                                    <div className="form-check">
                                        <Control.radio
                                            model=".livingArrangement"
                                            className="form-check-input"
                                            id="house"
                                            name="livingArrangement"
                                            value="house"
                                            validators={{
                                                required,
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".livingArrangement"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                        <label
                                            htmlFor="house"
                                            className="form-check-label font-weight-bold"
                                        >
                                            House
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Control.radio
                                            model=".livingArrangement"
                                            className="form-check-input"
                                            id="apartment"
                                            name="livingArrangement"
                                            value="apartment"
                                            validators={{
                                                required,
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".livingArrangement"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                        <label
                                            htmlFor="apartment"
                                            className="form-check-label font-weight-bold"
                                        >
                                            Apartment
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Control.radio
                                            model=".livingArrangement"
                                            className="form-check-input"
                                            id="condo"
                                            name="livingArrangement"
                                            value="condo"
                                            validators={{
                                                required,
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".livingArrangement"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                        <label
                                            htmlFor="condo"
                                            className="form-check-label font-weight-bold"
                                        >
                                            Condo
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Control.radio
                                            model=".livingArrangement"
                                            className="form-check-input"
                                            id="duplex"
                                            name="livingArrangement"
                                            value="duplex"
                                            validators={{
                                                required,
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".livingArrangement"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                        <label
                                            htmlFor="duplex"
                                            className="form-check-label font-weight-bold"
                                        >
                                            Duplex
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Control.radio
                                            model=".livingArrangement"
                                            className="form-check-input"
                                            id="mobileHome"
                                            name="livingArrangement"
                                            value="mobileHome"
                                            validators={{
                                                required,
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".livingArrangement"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                        <label
                                            htmlFor="mobileHome"
                                            className="form-check-label font-weight-bold"
                                        >
                                            Mobile Home
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Control.radio
                                            model=".livingArrangement"
                                            className="form-check-input"
                                            id="guestHouse"
                                            name="livingArrangement"
                                            value="guestHouse"
                                            validators={{
                                                required,
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".livingArrangement"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                        <label
                                            htmlFor="guestHouse"
                                            className="form-check-label font-weight-bold"
                                        >
                                            Guest House
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Control.radio
                                            model=".livingArrangement"
                                            className="form-check-input"
                                            id="otherHome"
                                            name="livingArrangement"
                                            value="otherHome"
                                            validators={{
                                                required,
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".livingArrangement"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                        <label
                                            htmlFor="otherHome"
                                            className="form-check-label font-weight-bold"
                                        >
                                            Other
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group col-md-2">
                                    <label className="col-form-label font-weight-bold">
                                        Do you rent or own?*
                                    </label>
                                    <div className="form-check">
                                        <Control.radio
                                            model=".rentOrOwn"
                                            className="form-check-input"
                                            id="own"
                                            name="rentOrOwn"
                                            value="own"
                                            validators={{
                                                required,
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".rentOrOwn"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                        <label
                                            htmlFor="own"
                                            className="form-check-label font-weight-bold"
                                        >
                                            Own
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Control.radio
                                            model=".rentOrOwn"
                                            className="form-check-input"
                                            id="rent"
                                            name="rentOrOwn"
                                            value="rent"
                                            validators={{
                                                required,
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".rentOrOwn"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                        <label
                                            htmlFor="rent"
                                            className="form-check-label font-weight-bold"
                                        >
                                            Rent
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group col-md-2">
                                    <label className="col-form-label font-weight-bold">
                                        How old are you?*
                                    </label>
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
                                        <label
                                            htmlFor="under21"
                                            className="form-check-label font-weight-bold"
                                        >
                                            Under 21
                                        </label>
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
                                        <label
                                            htmlFor="21-24"
                                            className="form-check-label font-weight-bold"
                                        >
                                            21-24
                                        </label>
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
                                        <label
                                            htmlFor="25-30"
                                            className="form-check-label font-weight-bold"
                                        >
                                            25-30
                                        </label>
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
                                        <label
                                            htmlFor="31-40"
                                            className="form-check-label font-weight-bold"
                                        >
                                            31-40
                                        </label>
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
                                        <label
                                            htmlFor="41-55"
                                            className="form-check-label font-weight-bold"
                                        >
                                            41-55
                                        </label>
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
                                        <label
                                            htmlFor="56-65"
                                            className="form-check-label font-weight-bold"
                                        >
                                            56-65
                                        </label>
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
                                        <label
                                            htmlFor="over65"
                                            className="form-check-label font-weight-bold"
                                        >
                                            Over 65
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group col-md-3">
                                    <label className="col-form-label font-weight-bold">
                                        How many children are in your home?*
                                    </label>
                                    <div className="form-check">
                                        <Control.radio
                                            model=".numChildren"
                                            className="form-check-input"
                                            id="zeroChildren"
                                            name="numChildren"
                                            value="0"
                                            validators={{
                                                required,
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".numChildren"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                        <label
                                            htmlFor="zeroChildren"
                                            className="form-check-label font-weight-bold"
                                        >
                                            0
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Control.radio
                                            model=".numChildren"
                                            className="form-check-input"
                                            id="oneChild"
                                            name="numChildren"
                                            value="1"
                                            validators={{
                                                required,
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".numChildren"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                        <label
                                            htmlFor="oneChild"
                                            className="form-check-label font-weight-bold"
                                        >
                                            1
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Control.radio
                                            model=".numChildren"
                                            className="form-check-input"
                                            id="twoChildren"
                                            name="numChildren"
                                            value="2"
                                            validators={{
                                                required,
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".numChildren"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                        <label
                                            htmlFor="twoChildren"
                                            className="form-check-label font-weight-bold"
                                        >
                                            2
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Control.radio
                                            model=".numChildren"
                                            className="form-check-input"
                                            id="threeChildren"
                                            name="numChildren"
                                            value="3"
                                            validators={{
                                                required,
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".numChildren"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                        <label
                                            htmlFor="threeChildren"
                                            className="form-check-label font-weight-bold"
                                        >
                                            3
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Control.radio
                                            model=".numChildren"
                                            className="form-check-input"
                                            id="fourChildren"
                                            name="numChildren"
                                            value="4"
                                            validators={{
                                                required,
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".numChildren"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                        <label
                                            htmlFor="fourChildren"
                                            className="form-check-label font-weight-bold"
                                        >
                                            4
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Control.radio
                                            model=".numChildren"
                                            className="form-check-input"
                                            id="fivePlusChildren"
                                            name="numChildren"
                                            value="moreThanFive"
                                            validators={{
                                                required,
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".numChildren"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                        <label
                                            htmlFor="fivePlusChildren"
                                            className="form-check-label font-weight-bold"
                                        >
                                            5+
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group col-md-2">
                                    <label className="col-form-label font-weight-bold">
                                        How old are they?
                                    </label>
                                    <div className="form-check">
                                        <Control.checkbox
                                            model=".childrenAge[]"
                                            className="form-check-input"
                                            id="childUnder3"
                                            name="childrenAge"
                                            value="under3"
                                        />
                                        <label
                                            htmlFor="childUnder3"
                                            className="form-check-label font-weight-bold"
                                        >
                                            Under 3
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Control.checkbox
                                            model=".childrenAge[]"
                                            className="form-check-input"
                                            id="childAge3-5"
                                            name="childrenAge"
                                            value="3-5"
                                        />
                                        <label
                                            htmlFor="childAge3-5"
                                            className="form-check-label font-weight-bold"
                                        >
                                            3-5
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Control.checkbox
                                            model=".childrenAge[]"
                                            className="form-check-input"
                                            id="childAge6-8"
                                            name="childrenAge"
                                            value="6-8"
                                        />
                                        <label
                                            htmlFor="childAge6-8"
                                            className="form-check-label font-weight-bold"
                                        >
                                            6-8
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Control.checkbox
                                            model=".childrenAge[]"
                                            className="form-check-input"
                                            id="childAge9-12"
                                            name="childrenAge"
                                            value="9-12"
                                        />
                                        <label
                                            htmlFor="childAge9-12"
                                            className="form-check-label font-weight-bold"
                                        >
                                            9-12
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Control.checkbox
                                            model=".childrenAge[]"
                                            className="form-check-input"
                                            id="childAge13-16"
                                            name="childrenAge"
                                            value="13-16"
                                        />
                                        <label
                                            htmlFor="childAge13-16"
                                            className="form-check-label font-weight-bold"
                                        >
                                            13-16
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Control.checkbox
                                            model=".childrenAge[]"
                                            className="form-check-input"
                                            id="childOver17"
                                            name="numChildren"
                                            value="over17"
                                        />
                                        <label
                                            htmlFor="childOver17"
                                            className="form-check-label font-weight-bold"
                                        >
                                            Over 17
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-5">
                                    <label
                                        htmlFor="experienceLevel"
                                        className="col-form-label font-weight-bold"
                                    >
                                        What level of experience do you have
                                        with pets?
                                    </label>
                                    <Control.select
                                        model=".petExperienceLevel"
                                        name="petExperienceLevel"
                                        id="experienceLevel"
                                        className="form-control"
                                    >
                                        <option defaultValue>
                                            Select Experience Level...
                                        </option>
                                        <option value="firstTimeOwner">
                                            First time owner
                                        </option>
                                        <option value="beginner">
                                            Beginner
                                        </option>
                                        <option value="intermediate">
                                            Intermediate
                                        </option>
                                        <option value="advanced">
                                            Advanced
                                        </option>
                                    </Control.select>
                                </div>
                                <div className="form-group col-md-7">
                                    <label
                                        htmlFor="describeExperience"
                                        className="col-form-label font-weight-bold"
                                    >
                                        Briefly describe your prior pet
                                        experience:
                                    </label>
                                    <div>
                                        <Control.textarea
                                            model=".describeExperience"
                                            name="describeExperience"
                                            id="describeExperience"
                                            className="form-control"
                                            rows="8"
                                            placeholder="My prior pet experience is..."
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <div className="form-check">
                                        <Control.checkbox
                                            model=".infoCorrect"
                                            className="form-check-input"
                                            id="infoCorrect"
                                            required
                                        />
                                        <label
                                            htmlFor="infoCorrect"
                                            className="form-check-label"
                                        >
                                            The above information is correct to
                                            the best of my knowledge
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <div className="form-check">
                                        <Control.checkbox
                                            model=".agreeContact"
                                            className="form-check-input"
                                            id="agreeContact"
                                            required
                                        />
                                        <label
                                            htmlFor="agreeContact"
                                            className="form-check-label"
                                        >
                                            By submitting this form I am
                                            agreeing to be contacted by Find A
                                            Fur Baby
                                        </label>
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

export default AdoptionForm;
