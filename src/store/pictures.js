import {
    FETCH_PIX_SUCCESS,
    CREATE_PIC_FAILURE,
    GET_PICTURE_SUCCESS
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
        case GET_PICTURE_SUCCESS:
            return {...state, selectedPicture: action.picture};
        default:
            return state;
    }
};

export default picturesReducer;