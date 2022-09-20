import React from "react";
import "../components/Header.css";

const Header = () => {
  return (
    <div className="header">
      <h2 className="header__title">Inc. This Morning</h2>
      <h1 className="header__span">
        <span className="header__all">"</span>Work Done<span className="header__all">"</span>
      </h1>
      <p className="header__dis">
        Awesome place to make oneself
        <br /> productive and entertained through daily updates.
      </p>
    </div>
  );
};

export default Header;
