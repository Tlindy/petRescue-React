import * as ActionTypes from "./ActionTypes";
import { DOGS } from "../shared/dogsAdopt";
import { CATS } from "../shared/catsAdopt";
import { TESTIMONIALS } from "../shared/testimonials";

export const fetchDogs = () => dispatch => {
    dispatch(dogsLoading());

    setTimeout(() => {
        dispatch(addDogs(DOGS));
    }, 2000);
};

export const dogsLoading = () => ({
    type: ActionTypes.DOGS_LOADING,
});

export const dogsFailed = errMess => ({
    type: ActionTypes.DOGS_FAILED,
    payload: errMess,
});

export const addDogs = dogs => ({
    type: ActionTypes.ADD_DOGS,
    payload: dogs,
});

export const fetchCats = () => dispatch => {
    dispatch(catsLoading());

    setTimeout(() => {
        dispatch(addCats(CATS));
    }, 2000);
};

export const catsLoading = () => ({
    type: ActionTypes.CATS_LOADING,
});

export const catsFailed = errMess => ({
    type: ActionTypes.CATS_FAILED,
    payload: errMess,
});

export const addCats = cats => ({
    type: ActionTypes.ADD_CATS,
    payload: cats,
});

export const fetchTestimonials = () => dispatch => {
    dispatch(testimonialsLoading());

    setTimeout(() => {
        dispatch(addTestimonials(TESTIMONIALS));
    }, 2000);
};

export const testimonialsLoading = () => ({
    type: ActionTypes.TESTIMONIALS_LOADING,
});

export const testimonialsFailed = errMess => ({
    type: ActionTypes.TESTIMONIALS_FAILED,
    payload: errMess,
});

export const addTestimonials = testimonials => ({
    type: ActionTypes.ADD_TESTIMONIALS,
    payload: testimonials,
});

export const addTestimonial = (image, info) => ({
    type: ActionTypes.ADD_TESTIMONIAL,
    payload: {
        image,
        info,
    },
});
