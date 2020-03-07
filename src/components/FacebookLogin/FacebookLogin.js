import React, {Component} from 'react';
import FacebookLoginButton from "react-facebook-login/dist/facebook-login-render-props";
import config from "../../config";
import {Button} from "reactstrap";
import {connect} from "react-redux";
import {facebookLogin} from "../../store/actions";

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

const mapDispatchToProps = dispatch => {
    return {
        facebookLogin: data => dispatch(facebookLogin(data))
    };
};

export default connect(null, mapDispatchToProps) (FacebookLogin);