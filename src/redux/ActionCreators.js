import * as ActionTypes from "./ActionTypes";

export const addTestimonial = (image, alt, info) => ({
    type: ActionTypes.ADD_TESTIMONIAL,
    payload: {
        image,
        alt,
        info,
    },
});
