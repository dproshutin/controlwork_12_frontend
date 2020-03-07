import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Col, Form, FormGroup} from "reactstrap";
import FormElement from "../../components/UI/FormElement/FormElement";
import {createPicture} from "../../store/actions";

class AddPicture extends Component {
    state = {
        title: "",
        image: ""
    };

    submitFormHandler = (e) => {
        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        e.preventDefault();
        this.props.onPictureCreated(formData);
    };

    inputChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    fileChangeHandler = (e) => {
        this.setState({image: e.target.files[0]});
    };

    render() {
        return (
            <>
                <legend>Add new picture</legend>
                <Form onSubmit={this.submitFormHandler}>
                    <FormElement
                        label="Title"
                        onChange={this.inputChangeHandler}
                        propertyName="title"
                        required={true}
                        type="text"
                        value={this.state.title}
                    />
                    <FormElement
                        label="Picture"
                        onChange={this.fileChangeHandler}
                        propertyName="image"
                        required={true}
                        type="file"
                    />
                    <FormGroup row>
                        <Col sm={{offset: 2, size: 10}}>
                            <Button type="submit" color="primary">Create picture</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPictureCreated: (picture) => dispatch(createPicture(picture))
    };
};

export default connect(null, mapDispatchToProps) (AddPicture);