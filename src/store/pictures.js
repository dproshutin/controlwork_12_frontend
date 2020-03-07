import {
    FETCH_PIX_SUCCESS,
} from "./actionTypes";

const initialState = {
    pictures: [],
    selectedPicture: null,
    error: null
};

const picturesReducer = function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PIX_SUCCESS:
            return {...state, pictures: action.pictures};
        default:
            return state;
    }
};

export default picturesReducer;