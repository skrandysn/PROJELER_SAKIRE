import React from "react";
import { Nav, Logo, Menu, MenuLink, HamburgerIcon } from "./Navbar.style.jsx";
import { menuIcon } from "../../helper/iconData.js";
import { useState } from "react";

const Navbar = ({ currentUser, setCurrentUser }) => {
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setCurrentUser(false);
    sessionStorage.clear();
  };

  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo>Eypes Library</Logo>
      <HamburgerIcon onClick={() => setShowMenu(!showMenu)}>
        {menuIcon}
      </HamburgerIcon>
      <Menu showMenu={showMenu}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        {/* <MenuLink>Register</MenuLink>
        <MenuLink>Login</MenuLink>
        <MenuLink>Logout</MenuLink> */}

        {currentUser ? (
          <MenuLink onClick={logout} to="/logout">
            Logout
          </MenuLink>
        ) : (
          <>
            <MenuLink to="/register">Register</MenuLink>
            <MenuLink to="/login">Login</MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
