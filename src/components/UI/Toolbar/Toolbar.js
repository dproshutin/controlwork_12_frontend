import React from "react";
import {NavLink as RouterNavLink} from "react-router-dom";
import {
    Container,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink
} from "reactstrap";
import AnonymousMenu from "./Menus/AnonymousMenu";
import UserMenu from "./Menus/UserMenu";

const Toolbar = ({user, logout}) => {
    return (
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand tag={RouterNavLink} to="/">Photo Gallery</NavbarBrand>

                <Nav className="ml-auto" navbar>
                    {
                        user ?
                            <UserMenu user={user} logout={logout}/>
                            :
                            <AnonymousMenu/>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Toolbar;