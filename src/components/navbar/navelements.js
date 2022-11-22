import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  z-index: 10;
`;

export const NavLink = styled(ScrollLink)`
  color: #8b8b8b;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
  &:hover {
    color: #232340;
  }
`;
export const SideNavLink = styled(ScrollLink)`
  color: #8b8b8b;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 25px;
  &.active {
    color: #15cdfc;
  }
  &:hover {
    color: #232340;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #232340;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SideNavMenu = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;
  margin: 10px 0px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 12px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const SideNavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 12px;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #232340;
  padding: 12px 25px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #a600a0;
    color: white;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;
