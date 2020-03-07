import React from 'react';
import {Col, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import PropTypes from "prop-types";

const FormElement = props => {
    let options;

    if (props.options && props.type === "select") {
        options = props.options.map(option => {
            return <option value={option._id} key={option._id}>{option.name}</option>
        });

        options.unshift(<option value="" key={1}>Select {props.label}</option>);
    }
    return (
        <FormGroup row>
            <Label sm={2} for={props.propertyName}>{props.label}</Label>
            <Col sm={10}>
                <Input
                    type={props.type}
                    required={props.required}
                    name={props.propertyName}
                    id={props.propertyName}
                    value={props.value}
                    onChange={props.onChange}
                    invalid={!!props.error}
                >
                    {options}
                </Input>
                {
                    props.error &&
                    <FormFeedback>
                        {props.error}
                    </FormFeedback>
                }
            </Col>
        </FormGroup>
    );
};

FormElement.propTypes = {
    propertyName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    type: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
};

export default FormElement;