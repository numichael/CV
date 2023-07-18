import React from "react";
import "./Footer.css";

import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

import Wave from "../../img/wave.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>numichael.dev@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/numichael_dev/" target="_blank">
            <img src={Instagram} alt="" />
            <Instagram color="white" size="3rem" />
          </a>
          <a
            href="https://www.facebook.com/nwachukwu.michael.5076/"
            target="_blank"
          >
            <Facebook color="white" size="3rem" />
          </a>

          <a href="https://github.com/numichael/" target="_blank">
            <img src={Github} alt="" />
            <Github color="white" size="3rem" />
          </a>
        </div>
      </div>
      <span></span>
    </div>
  );
};

export default Footer;
