import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Main from "./containers/Main/Main";
import AddPicture from "./containers/AddPicture/AddPicture";

const ProtectedRoute = props => {
    return props.isAllowed ? <Route {...props} /> : <Redirect to="/" />
};

const Routes = ({user}) => {


    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <ProtectedRoute
                path="/pictures/new"
                exact
                component={AddPicture}
                isAllowed={user}
            />
            <Route path="/pictures" component={Main} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route render={() => {
                return (
                    <div style={{textAlign: "center"}}>
                        <h1>404 <br/> Page Not Found!</h1>
                    </div>
                );
            }}/>
        </Switch>
    );
};

export default Routes;