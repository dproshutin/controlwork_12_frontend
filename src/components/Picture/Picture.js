import React from 'react';
import {Button, Card, CardBody, CardText, CardTitle, Col, FormGroup} from "reactstrap";
import {Link} from "react-router-dom";
import PictureThumbnail from "../PictureThumbnail/PictureThumbnail";
import {connect} from "react-redux";
import {deletePicture, selectPicture} from "../../store/actions";

const Picture = props => {
    return (
        <Col md={4}>
            <Card>
                <CardBody>
                    <PictureThumbnail image={props.image} onClick={() => this.props.selectPicture()}/>
                    <CardTitle>{props.title}</CardTitle>
                    <CardText>
                        posted by
                        <Link to={`/pictures?user=${props.creatorId}`}> {props.createdBy}</Link>
                    </CardText>
                </CardBody>
                {
                    (props.ifTheSameUser) ?
                        <FormGroup row>
                            <Col sm={{offset: 2, size: 10}}>
                                <Button type="button" id={props.id} color="danger"
                                        onClick={() => props.deletePicture(props.id)}>Delete</Button>
                            </Col>
                        </FormGroup>
                        : null
                }
            </Card>
        </Col>
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
        selectPicture: () => dispatch(selectPicture(otherProps.image)),
        deletePicture: (id) => dispatch(deletePicture(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Picture);