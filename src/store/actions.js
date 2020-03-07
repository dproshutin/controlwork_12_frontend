import axios from "../axios-api";
import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    FETCH_PIX_SUCCESS,
    CREATE_PIC_FAILURE
} from "./actionTypes";
import {push} from "connected-react-router";
import {NotificationManager} from "react-notifications";

const registerUserSuccess = () => {
    return {type: REGISTER_USER_SUCCESS};
};

const registerUserFailure = (error) => {
    return {type: REGISTER_USER_FAILURE, error};
};

export const registerUser = (userData) => {
    return (dispatch) => {
        return axios.post("/users", userData).then(() => {
            dispatch(registerUserSuccess());
            dispatch(push("/"));
        }, error => {
            if (error.response && error.response.data) {
                dispatch(registerUserFailure(error.response.data));
            } else {
                dispatch(registerUserFailure({global: "No internet"}));
            }
        });
    };
};

const loginUserSuccess = user => {
    return {type: LOGIN_USER_SUCCESS, user};
};

const loginUserFailure = error => {
    return {type: LOGIN_USER_FAILURE, error};
};
export const loginUser = userData => {
    return dispatch => {
        axios.post("/users/sessions", userData).then(response => {
            dispatch(loginUserSuccess(response.data));
            dispatch(push("/"));
        }, error => {
            dispatch(loginUserFailure(error.response.data));
        });
    }
};

export const logoutUser = () => {
    const event = new CloseEvent('CLOSED');
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const headers = {Token: token};

        axios.delete("/users/sessions", {headers}).then(response => {
            dispatch({type: LOGOUT_USER});
            dispatch(push("/"));
            NotificationManager.success("Logged out");
        });
    }
};

export const facebookLogin = data => {
    return dispatch => {
        axios.post("/users/facebookLogin", data)
            .then(response => {
                dispatch(loginUserSuccess(response.data));
                dispatch(push("/"));
                NotificationManager.success("Logged in with Facebook");
            }, error => {
                dispatch(loginUserFailure(error.response.data));
            });
    }
};

const fetchPicturesSuccess = (pictures) => {
    return {type: FETCH_PIX_SUCCESS, pictures};
};

export const fetchPictures = (query) => {
    return (dispatch, getState) => {
        let token;
        if (!!getState().users.user) {
            token = getState().users.user.token;
        }
        let config = {
            headers: {'Token': token},
            params: {
                user: query
            },
        };
        axios.get("/pictures", config).then(response => {
            dispatch(fetchPicturesSuccess(response.data));
        });
    }
};

const createPictureFailure = error => {
    return {type: CREATE_PIC_FAILURE, error};
};

export const createPicture = (pictureData) => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;

        const config = {headers: {'Token': token}};
        return axios.post('/pictures/', pictureData, config).then(
            response => {
                NotificationManager.success("The picture has added!");
                dispatch(push('/'));
            },
            error => {
                if (error.response) {
                    dispatch(createPictureFailure(error.response.data));
                } else {
                    dispatch(createPictureFailure({global: "No network connection"}))
                }
            });
    }
};