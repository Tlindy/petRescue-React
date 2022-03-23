import { createStore, combineReducers } from "redux";
import { Dogs } from "./dogs";
import { Cats } from "./cats";
import { Testimonials } from "./testimonials";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dogs: Dogs,
            cats: Cats,
            testimonials: Testimonials,
        })
    );

    return store;
};
