import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { sideNavbar } from "../../assets";
import { MasterOptions } from "../../components";
import { useSelector } from "react-redux";

const SideNavComponent = styled.div`
  width: 60px;
  background: #f7f8fa;

  height: calc(100% - 70px);
  border-right: 2px solid #edeff2;
  flex-direction: column;
  align-items: center;
  display: flex;
  position: fixed;
  .isActive {
    background: #9c27b0;
    color: white;
    :hover {
      background: #9c27b0;
      color: white;
    }
  }
`;

const Circle = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  text-align: center;
  color: #80858e;
  margin: 5px;
  font-size: 1.2rem;
  :hover {
    background: #232340;
    color: white;
  }
`;

const AdminSideNav = () => {
  const navigate = useNavigate();

  const { user_data } = useSelector(
    (state) => state.user_data
  );

  const [isActive, setActive] = useState("Dashboard");
  const [mastersOptionsModal, setMasterOptionsModal] = React.useState(false);
  const [url_path_name, setUrlPathname] = useState("");
  const [prev_active, setPrevActive] = useState("");

  //is_superuser

  const handleClick = (e) => {
    setPrevActive(isActive);
    setActive(e);
    if (e === "Master") {
      setUrlPathname(window.location.pathname);
      setMasterOptionsModal(true);
    }
  };

  const handleClose = () => {
    if(isActive=== "Master"){
    setActive(prev_active);
    setPrevActive("")
    navigate(url_path_name);
    }
    
    setMasterOptionsModal(false);
  }

  return (
    <SideNavComponent>
      <br />
      {sideNavbar.map((val, id) => {
        if(val.title === "Master" && !user_data.is_superuser){
          return null;
        }
        else if(val.title === "WorkForce" && user_data.type === "Indvidual"){
          return null;
        }
        return (
          <Circle
            key={id}
            to={val.path}
            className={val.title === isActive ? "isActive" : ""}
            onClick={() => {
              handleClick(val.title);
            }}
          >
            {val.icon}
          </Circle>
        );
      })}
      <MasterOptions
        show={mastersOptionsModal}
        onHide={() => {
          handleClose();
        }}
      />
    </SideNavComponent>
  );
};

export default AdminSideNav;
