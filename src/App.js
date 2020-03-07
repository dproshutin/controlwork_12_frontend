import React, {Component, Fragment} from 'react';
import Toolbar from "./components/UI/Toolbar/Toolbar";
import {Container} from "reactstrap";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {NotificationContainer} from "react-notifications";
import Routes from "./Routes";
import './App.css';
import {logoutUser} from "./store/actions";

class App extends Component {
  render() {
    return (
        <Fragment>
          <NotificationContainer />
          <header>
            <Toolbar
                user={this.props.user}
                logout={this.props.logoutUser}
            />
          </header>
          <main>
            <Container className="mt-5">
              <Routes user={this.props.user}/>
            </Container>
          </main>
        </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
