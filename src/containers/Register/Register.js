import React, {Component} from 'react';
import {Button, Col, Form, FormGroup} from "reactstrap";
import {registerUser} from "../../store/actions";
import {connect} from "react-redux";
import FormElement from "../../components/UI/FormElement/FormElement";
import FacebookLogin from "../../components/FacebookLogin/FacebookLogin";

class Register extends Component {
    state = {
        displayName: "",
        username: "",
        password: "",
        avatarImage: ""
    };

    inputChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    fileChangeHandler = (e) => {
        this.setState({avatarImage: e.target.files[0]});
    };

    formSubmitHandler = (e) => {
        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        e.preventDefault();
        this.props.onRegisterUser(formData);
    };

    getFieldError = fieldName => {
        return this.props.error && this.props.error.errors &&
            this.props.error.errors[fieldName] && this.props.error.errors[fieldName].message;
    };

    render() {
        console.log([this.props.registerError]);
        return (
            <>
                <h2>Register new user</h2>
                <Form onSubmit={this.formSubmitHandler}>
                    <FormElement
                        propertyName="displayName"
                        label="Display name"
                        onChange={this.inputChangeHandler}
                        value={this.state.displayName}
                        required={true}
                        type="text"
                        error={this.getFieldError("displayName")}
                    />
                    <FormElement
                        propertyName="username"
                        label="Username"
                        onChange={this.inputChangeHandler}
                        value={this.state.username}
                        required={false}
                        type="text"
                        error={this.getFieldError("username")}
                    />
                    <FormElement
                        propertyName="password"
                        label="Password"
                        onChange={this.inputChangeHandler}
                        value={this.state.password}
                        required={false}
                        type="password"
                        error={this.getFieldError("password")}
                    />
                    <FormElement
                        label="Image"
                        onChange={this.fileChangeHandler}
                        propertyName="avatarImage"
                        required={false}
                        type="file"
                    />
                    <FormGroup row>
                        <Col sm={{offset: 2, size: 10}}>
                            <Button type="submit" color="primary">
                                Register
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
        error: state.users.registerError
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRegisterUser: userData => dispatch(registerUser(userData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);