import {
    FETCH_PIX_SUCCESS,
    CREATE_PIC_FAILURE,
    GET_PICTURE_SUCCESS,
    SELECT_PICTURE
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
        case SELECT_PICTURE:
            return {...state, selectedPicture: action.image};
        default:
            return state;
    }
};

export default picturesReducer;