import React, {useState} from "react";
import styled from "styled-components";
import { BsPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Nav, NavLink, NavMenu } from "../../components";
import { Logo } from "../../assets";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

const Navbar = styled.div`
background: #f7f8fa;
z-index:100;
  width: 100%;
  height: 70px;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  position:sticky;
  top: 0;
  left: 0;
  .left {
    width: 100%;
    padding-left: 20px;
    display: flex;
    .logo {
      width: 120px;
      height: auto;
    }
  }
  .right {
    display: flex;
    margin: auto 0;
    height: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    .dropdown-toggle {
      border:none;
      background: #f7f8fa;
      width: 160px;
      height: 100%;
      align-items: center;
      justify-content: center;
      align-items: center;
      display: flex;
      justify-content: center;
      cursor: pointer;
      :hover{
        border:1px solid #3b4048;
            }
      p {
        margin: 0px;
        color:#3b4048;        font-weight: 500;
        
      }
    }
    .dropdown-menue{
      
    }


    .circle {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background:#3b4048;      border-radius: 50%;
      width: 40px;
      height: 40px;
      text-align: center;
      color: white;
      font-size: small;
      margin: 5px;
      
    }
    
`;

const AltNavLink = styled(NavLink)`
  font-weight: 500;
`;

const AdminNav = () => {
  const navigate = useNavigate();
  //  const [show, setShow] = useState(false);
  //  const handleClick = (event) => {
  //    setShow(true);
  //  };
  //  const handleClose = () => {
  //    setShow(false);
  //  };

  const handleProfile = () => {

    navigate("profile");

  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/36tens");
    window.location.reload();
  };

  return (
    <Navbar>
      <div className="left">
        <img className="logo" src={Logo} alt="logo" />
        <Nav>
          <NavMenu>
            <AltNavLink to="/">About Us</AltNavLink>
            <AltNavLink to="/contact-us">Contact Us</AltNavLink>
          </NavMenu>
        </Nav>
      </div>
      <div className="right">
        {/* <div className="button"> */}
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <div className="circle">
            <BsPersonFill />
          </div>
          <div className="text">
            <p>Jan Doe</p>
          </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handleProfile}>Profile</Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          
        </div>
      {/* </div> */}
      
      {/* <Menu
        id="basic-menu"
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() =>{handleProfile()}}>Profile</MenuItem>
        <MenuItem onClick={() => {handleLogout()}}>Logout</MenuItem>
      </Menu> */}
    </Navbar>
  );
};

export default AdminNav;
