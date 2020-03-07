import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchPictures} from "../../store/actions";
import Picture from "../../components/Picture/Picture";
import {Row} from "reactstrap";

class Main extends Component {
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
                                />
                            );
                        })
                    }
                </Row>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        pictures: state.pictures.pictures,
        user: state.users.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchPictures: (query) => dispatch(fetchPictures(query))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
