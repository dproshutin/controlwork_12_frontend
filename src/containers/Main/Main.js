import React, {Component} from 'react';
import {connect} from "react-redux";
import {closePopUp, fetchPictures} from "../../store/actions";
import Picture from "../../components/Picture/Picture";
import {Button, Modal, ModalBody, ModalFooter, Row} from "reactstrap";
import config from "../../config";

class Main extends Component {
    state = {
        modal: false,
        fade: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const user = query.get('user');
        this.props.onFetchPictures(user);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState === null) {
            if (prevProps.location.search !== this.props.location.search) {
                const query = new URLSearchParams(this.props.location.search);
                const user = query.get('user');
                this.props.onFetchPictures(user);
                return;
            }
        } else {
            if (prevState.pictures !== this.props.pictures) {
                const query = new URLSearchParams(this.props.location.search);
                const user = query.get('user');
                this.props.onFetchPictures(user);
            }
        }
    }

    render() {
        let str = config.apiURL + "/uploads/" + this.props.selectedPicture;
        let stylesImg = {
            width: '100%',
            height: 'auto'
        };
        return (
            <>
                <Row>
                    {
                        this.props.pictures.map(picture => {
                            let userId;
                            if (this.props.user && this.props.user._id) {
                                userId = this.props.user._id;
                            } else {
                                userId = "";
                            }

                            return (
                                <Picture
                                    key={picture._id}
                                    id={picture._id}
                                    title={picture.title}
                                    image={picture.image}
                                    createdBy={picture.createdBy.displayName}
                                    creatorId={picture.createdBy._id}
                                    ifTheSameUser={picture.createdBy._id === userId}
                                    click={this.toggle}
                                />
                            );
                        })
                    }
                </Row>
                <div>
                    <Modal
                        isOpen={this.state.modal}
                        size="lg"
                        fade={this.state.fade}
                        toggle={this.toggle}
                        onClosed={this.props.deselectPicture}
                    >
                        <ModalBody>
                            <img
                                style={stylesImg}
                                src={str}
                                alt=""
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        pictures: state.pictures.pictures,
        selectedPicture: state.pictures.selectedPicture,
        user: state.users.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchPictures: (query) => dispatch(fetchPictures(query)),
        deselectPicture: () => dispatch(closePopUp())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
