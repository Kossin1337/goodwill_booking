import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <span>GoodWill Math</span>
      <span>CopyRight GoodWill</span>
      <a href="https://www.kossin.dev" target="_blank">
        <span className="dev-tag">Made By Kossin.dev</span>
      </a>
    </footer>
  );
};

export default Footer;
