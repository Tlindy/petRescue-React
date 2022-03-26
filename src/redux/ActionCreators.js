import * as ActionTypes from "./ActionTypes";
import { DOGS } from "../shared/dogsAdopt";

export const addTestimonial = (image, info) => ({
    type: ActionTypes.ADD_TESTIMONIAL,
    payload: {
        image,
        info,
    },
});

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
