import React from "react";
import classes from "./navbar.module.css";
import Button from "./Button";
import Logo from "./Logo";
import { Links } from "./Links";
export const Navbar = () => {
  return (
    <div className={classes.navBar}>
      <div className={classes.navBar2}>
        <div>
        <Logo />
        </div>
        <div>
          <Links name="Services"/>
          <Links name="Projects"/>
          <Links name="About"/>
        </div>
        <div>
          <Button name="Contact" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
