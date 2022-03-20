import React from "react";

function AdoptionForm() {
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus et arcu sem. Integer vitae nulla enim. Nullam
                        finibus fermentum nunc sit amet tristique. Proin pretium
                        sit amet nibh eget euismod. Nunc lectus dui, mattis eu
                        diam eu, mattis ornare nibh. Cras in interdum elit, id
                        lacinia mi. Donec a justo et odio hendrerit hendrerit a
                        et odio. Praesent magna purus, consectetur non lorem
                        eget, accumsan pharetra lorem. Curabitur lacinia velit
                        eu semper aliquet. Nullam ullamcorper aliquet mauris at
                        imperdiet. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Cras dolor urna, lacinia ac rhoncus sit
                        amet, pharetra mollis libero. Vestibulum quis placerat
                        mi. Nunc a odio tellus. Curabitur posuere dui quam, eget
                        condimentum risus mollis eu. Sed aliquet massa quis arcu
                        egestas dignissim eu tincidunt neque.
                    </p>
                    <p>
                        Fusce lacinia metus a elit faucibus elementum.
                        Pellentesque sed mi id arcu lacinia ornare. Nulla eu
                        dolor iaculis, ultrices quam sit amet, imperdiet urna.
                        Suspendisse nulla lectus, sodales ut varius sit amet,
                        pellentesque imperdiet lectus. Curabitur ac posuere dui.
                        Morbi et maximus nulla. Donec tincidunt convallis lacus
                        vitae pretium. Praesent ligula mi, volutpat id
                        consectetur a, imperdiet iaculis tellus.
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
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label
                                    htmlFor="firstName"
                                    className="col-form-label font-weight-bold"
                                >
                                    First Name:*
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="First Name"
                                    required
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label
                                    htmlFor="lastName"
                                    className="col-form-label font-weight-bold"
                                >
                                    Last Name:*
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Last Name"
                                    required
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
                                <input
                                    type="text"
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
                                    <input
                                        type="radio"
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
                                    <input
                                        type="radio"
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
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="areaCode"
                                    name="areaCode"
                                    placeholder="Area code"
                                    required
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <label className="col-form-label font-weight-bold">
                                    Format: ###-####
                                </label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phoneNum"
                                    placeholder="Phone Number"
                                    required
                                />
                            </div>
                            <div className="form-group col-md-5">
                                <label
                                    htmlFor="email"
                                    className="col-form-label font-weight-bold"
                                >
                                    Email:*
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    required
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
                                <input
                                    type="text"
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
                                <input
                                    type="text"
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
                                <input
                                    type="text"
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
                                <input
                                    type="text"
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
                                <input
                                    type="text"
                                    className="form-control"
                                    id="zipCode"
                                    name="zipCode"
                                    placeholder="Zip Code"
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label className="col-form-label font-weight-bold">
                                    What is your living arrangement?*
                                </label>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="house"
                                        name="livingArrangement"
                                        value="house"
                                    />
                                    <label
                                        htmlFor="house"
                                        className="form-check-label font-weight-bold"
                                    >
                                        House
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="apartment"
                                        name="livingArrangement"
                                        value="apartment"
                                    />
                                    <label
                                        htmlFor="apartment"
                                        className="form-check-label font-weight-bold"
                                    >
                                        Apartment
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="condo"
                                        name="livingArrangement"
                                        value="condo"
                                    />
                                    <label
                                        htmlFor="condo"
                                        className="form-check-label font-weight-bold"
                                    >
                                        Condo
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="duplex"
                                        name="livingArrangement"
                                        value="duplex"
                                    />
                                    <label
                                        htmlFor="duplex"
                                        className="form-check-label font-weight-bold"
                                    >
                                        Duplex
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="mobileHome"
                                        name="livingArrangement"
                                        value="mobileHome"
                                    />
                                    <label
                                        htmlFor="mobileHome"
                                        className="form-check-label font-weight-bold"
                                    >
                                        Mobile Home
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="guestHouse"
                                        name="livingArrangement"
                                        value="guestHouse"
                                    />
                                    <label
                                        htmlFor="guestHouse"
                                        className="form-check-label font-weight-bold"
                                    >
                                        Guest House
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="otherHome"
                                        name="livingArrangement"
                                        value="otherHome"
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
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="own"
                                        name="rentOrOwn"
                                        value="own"
                                    />
                                    <label
                                        htmlFor="own"
                                        className="form-check-label font-weight-bold"
                                    >
                                        Own
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="rent"
                                        name="rentOrOwn"
                                        value="rent"
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
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="under21"
                                        name="age"
                                        value="under21"
                                    />
                                    <label
                                        htmlFor="under21"
                                        className="form-check-label font-weight-bold"
                                    >
                                        Under 21
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="21-24"
                                        name="age"
                                        value="21-24"
                                    />
                                    <label
                                        htmlFor="21-24"
                                        className="form-check-label font-weight-bold"
                                    >
                                        21-24
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="25-30"
                                        name="age"
                                        value="25-30"
                                    />
                                    <label
                                        htmlFor="25-30"
                                        className="form-check-label font-weight-bold"
                                    >
                                        25-30
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="31-40"
                                        name="age"
                                        value="31-40"
                                    />
                                    <label
                                        htmlFor="31-40"
                                        className="form-check-label font-weight-bold"
                                    >
                                        31-40
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="41-55"
                                        name="age"
                                        value="41-55"
                                    />
                                    <label
                                        htmlFor="41-55"
                                        className="form-check-label font-weight-bold"
                                    >
                                        41-55
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="56-65"
                                        name="age"
                                        value="56-65"
                                    />
                                    <label
                                        htmlFor="56-65"
                                        className="form-check-label font-weight-bold"
                                    >
                                        56-65
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="over65"
                                        name="age"
                                        value="over65"
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
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="zeroChildren"
                                        name="numChildren"
                                        value="0"
                                    />
                                    <label
                                        htmlFor="zeroChildren"
                                        className="form-check-label font-weight-bold"
                                    >
                                        0
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="oneChild"
                                        name="numChildren"
                                        value="1"
                                    />
                                    <label
                                        htmlFor="oneChild"
                                        className="form-check-label font-weight-bold"
                                    >
                                        1
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="twoChildren"
                                        name="numChildren"
                                        value="2"
                                    />
                                    <label
                                        htmlFor="twoChildren"
                                        className="form-check-label font-weight-bold"
                                    >
                                        2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="threeChildren"
                                        name="numChildren"
                                        value="3"
                                    />
                                    <label
                                        htmlFor="threeChildren"
                                        className="form-check-label font-weight-bold"
                                    >
                                        3
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="fourChildren"
                                        name="numChildren"
                                        value="4"
                                    />
                                    <label
                                        htmlFor="fourChildren"
                                        className="form-check-label font-weight-bold"
                                    >
                                        4
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="fivePlusChildren"
                                        name="numChildren"
                                        value="moreThanFive"
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
                                    How old are they?*
                                </label>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
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
                                    <input
                                        type="checkbox"
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
                                    <input
                                        type="checkbox"
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
                                    <input
                                        type="checkbox"
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
                                    <input
                                        type="checkbox"
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
                                    <input
                                        type="checkbox"
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
                                    What level of experience do you have with
                                    pets?
                                </label>
                                <select
                                    name="petExperienceLevel"
                                    id="experienceLevel"
                                    className="form-control"
                                >
                                    <option selected>
                                        Select Experience Level...
                                    </option>
                                    <option value="firstTimeOwner">
                                        First time owner
                                    </option>
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">
                                        Intermediate
                                    </option>
                                    <option value="advanced">Advanced</option>
                                </select>
                            </div>
                            <div className="form-group col-md-7">
                                <label
                                    htmlFor="describeExperience"
                                    className="col-form-label font-weight-bold"
                                >
                                    Briefly describe your prior pet experience:
                                </label>
                                <div>
                                    <textarea
                                        name="describeExperience"
                                        id="describeExperience"
                                        className="form-control"
                                        rows="8"
                                        placeholder="My prior pet experience is..."
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="infoCorrect"
                                        required
                                    />
                                    <label
                                        htmlFor="infoCorrect"
                                        className="form-check-label"
                                    >
                                        The above information is correct to the
                                        best of my knowledge
                                    </label>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="agreeContact"
                                        required
                                    />
                                    <label
                                        htmlFor="agreeContact"
                                        className="form-check-label"
                                    >
                                        By submitting this form I am agreeing to
                                        be contacted by Find A Fur Baby
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group offset-md-5">
                            <button type="submit" className="btn btn-primary">
                                Submit Form
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdoptionForm;
