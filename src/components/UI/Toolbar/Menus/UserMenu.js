import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown} from "reactstrap";
import {Link, NavLink as RouterNavLink} from "react-router-dom";
import UserThumbnail from "../../../UserThumbnail/UserThumbnail";

const UserMenu = ({user, logout}) => {
    return (
        <>
            <NavItem>
                <NavLink tag={RouterNavLink} to="/pictures/new" exact>Add Picture</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Hello, <Link to={`/pictures?user=${user._id}`}>{user.displayName}</Link>!
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