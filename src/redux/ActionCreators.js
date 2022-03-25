import * as ActionTypes from "./ActionTypes";

export const addTestimonial = (image, info) => ({
    type: ActionTypes.ADD_TESTIMONIAL,
    payload: {
        image,
        info,
    },
});
