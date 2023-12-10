import React from "react";
import { Nav, Logo, Menu, MenuLink, HamburgerIcon } from "./Navbar.style.jsx";
import { menuIcon } from "../../helper/iconData.js";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo>Eypes Library</Logo>
      <HamburgerIcon onClick={() => setShowMenu(!showMenu)}>
        {menuIcon}
      </HamburgerIcon>
      <Menu showMenu={showMenu}>
        <MenuLink>Home</MenuLink>
        <MenuLink>About</MenuLink>
        <MenuLink>Register</MenuLink>
        <MenuLink>Login</MenuLink>
        <MenuLink>Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;