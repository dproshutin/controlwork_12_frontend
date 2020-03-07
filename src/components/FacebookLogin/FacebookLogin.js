import React, {Component} from 'react';
import FacebookLoginButton from "react-facebook-login/dist/facebook-login-render-props";
import config from "../../config";
import {Button} from "reactstrap";
import {connect} from "react-redux";

class FacebookLogin extends Component {
    render() {
        return (
            <FacebookLoginButton
                appId={config.facebookAppId}
                fields="name, email, picture"
                render={renderProps => {
                    return (
                        <Button onClick={renderProps.onClick}>
                            Login with Facebook
                        </Button>
                    )
                }}
                callback={response => {
                    if (response.id) {
                        this.props.facebookLogin(response);
                    }
                }}
            />
        );
    }
}

export default FacebookLogin;