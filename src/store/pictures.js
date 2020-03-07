import {
    FETCH_PIX_SUCCESS,
    CREATE_PIC_FAILURE
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
        case CREATE_PIC_FAILURE:
            return {...state, error: action.error};
        default:
            return state;
    }
};

export default picturesReducer;