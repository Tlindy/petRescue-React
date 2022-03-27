import * as ActionTypes from "./ActionTypes";

export const Testimonials = (
    state = {
        isLoading: true,
        errMess: null,
        testimonials: [],
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.ADD_TESTIMONIALS:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                testimonials: action.payload,
            };
        case ActionTypes.TESTIMONIALS_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                testimonials: [],
            };
        case ActionTypes.TESTIMONIALS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };
        case ActionTypes.ADD_TESTIMONIAL:
            const testimonial = action.payload;
            testimonial.id = state.length;
            testimonial.alt = "A fur baby and their family";
            return state.concat(testimonial);
        default:
            return state;
    }
};
