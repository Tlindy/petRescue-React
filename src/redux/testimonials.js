import { TESTIMONIALS } from "../shared/testimonials";
import * as ActionTypes from "./ActionTypes";

export const Testimonials = (state = TESTIMONIALS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TESTIMONIAL:
            const testimonial = action.payload;
            testimonial.id = state.length;
            return state.concat(testimonial);
        default:
            return state;
    }
};
