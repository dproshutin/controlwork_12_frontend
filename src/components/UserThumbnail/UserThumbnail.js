import React from 'react';
import defaultAvatar from '../../assets/images/default-avatar.jpeg';
import config from "../../config";

const UserThumbnail = props => {
    let image = defaultAvatar;
    if (props.facebookId) {
        image = props.avatarImage;

    } else if (props.avatarImage) {
        image = config.apiURL + '/uploads/' + props.avatarImage;
    }
    return <img style={{width: "50px", height: "50px"}} src={image} alt='User'/>;
};

export default UserThumbnail;