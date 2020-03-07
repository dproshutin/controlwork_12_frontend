import React, {Component} from 'react';
import {Alert, Button, Col, Form, FormGroup} from "reactstrap";
import {loginUser} from "../../store/actions";
import {connect} from "react-redux";
import FormElement from "../../components/UI/FormElement/FormElement";
import FacebookLogin from "../../components/FacebookLogin/FacebookLogin";

class Login extends Component {
    state = {
        username: "",
        password: ""
    };

    inputChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };
    formSubmitHandler = (e) => {
        e.preventDefault();
        this.props.onLoginUser({...this.state});
    };


    render() {
        // console.log([this.props.registerError]);
        return (
            <>
                <h2>Login</h2>
                {
                    this.props.error &&
                    <Alert color="danger">{this.props.error.error}</Alert>
                }
                <Form onSubmit={this.formSubmitHandler}>
                    <FormElement
                        propertyName="username"
                        label="Username"
                        onChange={this.inputChangeHandler}
                        value={this.state.username}
                        required={false}
                        type="text"
                    />
                    <FormElement
                        propertyName="password"
                        label="Password"
                        onChange={this.inputChangeHandler}
                        value={this.state.password}
                        required={false}
                        type="password"
                    />
                    <FormGroup row>
                        <Col sm={{offset: 2, size: 10}}>
                            <Button type="submit" color="primary">
                                Login
                            </Button>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <FacebookLogin />
                    </FormGroup>
                </Form>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.users.loginError
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoginUser: userData => dispatch(loginUser(userData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);