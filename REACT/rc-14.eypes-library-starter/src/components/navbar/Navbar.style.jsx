import styled from "styled-components";
import Flex from "../../styles/Flex";
import { NavLink } from "react-router-dom";

export const Nav = styled(Flex)`
  background: ${({ theme }) => theme.colors.navbarBgColor};
  padding: 1rem 2rem;
`;

export const Logo = styled(NavLink)`
  padding: 1rem 0;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.logoColor};
`;

export const Menu = styled(Flex)`
  font-weight: bold;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    width: 100%;
    transition: all 0.3s ease-in;
    max-height: ${({ showMenu }) => (showMenu ? "300px" : "0")};
    overflow: hidden;
  }
`;

export const MenuLink = styled(NavLink)`
  text-align: center;
  cursor: pointer;
  padding: 1rem 2rem;
  text-decoration: none;
  transition: all 0.3s ease-in;
  color: ${({ theme }) => theme.colors.linkColor};
  &:hover {
    color: ${({ theme }) => theme.colors.linkHoverColor};
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
`;