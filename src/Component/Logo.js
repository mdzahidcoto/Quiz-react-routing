import React from "react";
import "../Styles/Global.css";

const Logo = ({children}) => {
  return (
    <>
      <header className="logoHeader">
        <div className="logo">
          <p>
            <a href="/">Qz</a>
          </p>
        </div>
      </header>
      <div>{children}</div>
    </>
  );
};

export default Logo;
