import React from 'react';
import {NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const AnonymousMenu = props => {
    return (
        <>
            <NavItem>
                <NavLink tag={RouterNavLink} to="/register" exact>Sign up</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={RouterNavLink} to="/login" exact>Sign in</NavLink>
            </NavItem>
        </>
    );
};

export default AnonymousMenu;