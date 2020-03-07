import React from 'react';
import {CardImg} from "reactstrap";
import config from "../../config";
import defaultImage from "../../assets/images/default-photo.jpeg";
import {selectPicture} from "../../store/actions";
import {connect} from "react-redux";

const PictureThumbnail = props => {
    return (
        <CardImg
            top width="100%"
            className={props.class}
            src={props.image ? config.apiURL + "/uploads/" + props.image: defaultImage}
            alt={props.name}
            onClick={() => {
                props.selectPicture();
                props.click();
            }}
        />
    );
};

const mapStateToProps = state => {
    return {
        selectedPicture: state.pictures.selectedPicture,
        user: state.users.user
    }
};

const mapDispatchToProps = (dispatch, otherProps) => {
    return {
        selectPicture: () => dispatch(selectPicture(otherProps.image))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (PictureThumbnail);