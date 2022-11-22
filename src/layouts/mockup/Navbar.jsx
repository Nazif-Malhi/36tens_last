import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  ButtonWrapper,
  SideNavMenu,
  SideNavLink,
  SideNavBtn,
} from "../../components/navbar/navelements";
import { Logo } from "../../assets";

const SideNavBarComponent = styled.div`
  .side_navbar {
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #ced4da;
    //  #232323;
    transition: 0.5s ease;
    overflow-x: hidden;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .active {
    width: 100%;
  }
  .inactive {
    width: 0%;
  }
  @media screen and (min-width: 768px) {
    .side_navbar {
      width: 0%;
    }
  }
`;

const SideNavbar = ({ isActive }) => {
  return (
    <SideNavBarComponent>
      <div className={`side_navbar ${isActive ? "active" : "inactive"}`}>
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <Row style={{ marginBottom: "20px" }}>
            <NavLink to="/">
              <img src={Logo} alt="logo" />
            </NavLink>
          </Row>
          <Row>
            <SideNavMenu>
              <SideNavLink
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                style={{ color: "#202BA3" }}
              >
                Home
              </SideNavLink>
            </SideNavMenu>
            <SideNavMenu>
              <SideNavLink
                to="pricing"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Pricing
              </SideNavLink>
            </SideNavMenu>
            <SideNavMenu>
              <SideNavLink
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Services
              </SideNavLink>
            </SideNavMenu>
            <SideNavMenu>
              <SideNavLink
                to="contact-us"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact Us
              </SideNavLink>
            </SideNavMenu>
          </Row>
          <Row style={{ margin: "20px 0px" }}>
            <SideNavBtn>
              <NavBtnLink to="/36tens/authentication/login">LogIn</NavBtnLink>
            </SideNavBtn>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <SideNavBtn>
              <NavBtnLink to="/36tens/authentication/signup">SignUp</NavBtnLink>
            </SideNavBtn>
          </Row>
        </Container>
      </div>
    </SideNavBarComponent>
  );
};

const StandardNavBar = ({ handleActive }) => {
  return (
    <Nav>
      <NavLink to="/">
        <img src={Logo} alt="logo" />
      </NavLink>
      <Bars
        style={{
          zIndex: "100",
        }}
        onClick={() => {
          handleActive();
        }}
      />

      <NavMenu>
        <NavLink
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          style={{ color: "#202BA3" }}
        >
          Home
        </NavLink>
        <NavLink
          to="pricing"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Pricing
        </NavLink>
        <NavLink
          to="services"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Services
        </NavLink>
        <NavLink
          to="contact-us"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Contact Us
        </NavLink>
      </NavMenu>
      <ButtonWrapper>
        <NavBtn>
          <NavBtnLink to="/36tens/authentication/login">LogIn</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/36tens/authentication/signup">SignUp</NavBtnLink>
        </NavBtn>
      </ButtonWrapper>
    </Nav>
  );
};
const Navbar = () => {
  const [isActive, setActive] = useState(false);
  return (
    <React.Fragment>
      <SideNavbar isActive={isActive} />
      <StandardNavBar
        handleActive={() => {
          setActive(!isActive);
        }}
      />
    </React.Fragment>
  );
};

export default Navbar;
