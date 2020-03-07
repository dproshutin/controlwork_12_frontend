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

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.location.search !== this.props.location.search || prevState.pictures !== this.props.pictures) {
    //         const query = new URLSearchParams(this.props.location.search);
    //         const user = query.get('user');
    //         this.props.onFetchPictures(user);
    //     }
    // }

    render() {

        return (
            <>
                <Row>
                    {
                        this.props.pictures.map(picture => {
                            return (
                                <Picture
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
