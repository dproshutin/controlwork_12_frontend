import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const UserMenu = ({user, logout}) => {
    return (
        <>
            <NavItem>
                <NavLink tag={RouterNavLink} to="/pictures/new" exact>Add Picture</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Hello, {user.displayName}!
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem
                        onClick={logout}
                    >
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UserThumbnail
                avatarImage={user.avatarImage}
                facebookId={user.facebookId}
            />
        </>
    );
};

export default UserMenu;