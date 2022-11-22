import React from "react";
import { Navbar, Home, Packages, Services, Contact, Rights } from "../layouts";

const Mockup = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home id={"home"} />
      <Packages id={"pricing"} />
      <Services id={"services"} />
      <Contact id={"contact-us"} />
      <Rights />
    </React.Fragment>
  );
};

export default Mockup;
