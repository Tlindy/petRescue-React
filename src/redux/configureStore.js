import { createStore, combineReducers } from "redux";
import { createForms } from "react-redux-form";
import { Dogs } from "./dogs";
import { Cats } from "./cats";
import { Testimonials } from "./testimonials";
import { InitialAdoptionState } from "./forms";
import { InitialVolunteerState } from "./forms";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dogs: Dogs,
            cats: Cats,
            testimonials: Testimonials,
            ...createForms({
                adoptionForm: InitialAdoptionState,
                volunteerForm: InitialVolunteerState,
            }),
        })
    );

    return store;
};
