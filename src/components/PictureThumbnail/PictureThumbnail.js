import React from 'react';
import {CardImg} from "reactstrap";
import config from "../../config";
import defaultImage from "../../assets/images/default-photo.jpeg";

const PictureThumbnail = props => {
    return (
        <CardImg
            top width="100%"
            className={props.class}
            src={props.image ? config.apiURL + "/uploads/" + props.image: defaultImage}
            alt={props.name}
        />
    );
};

export default PictureThumbnail;