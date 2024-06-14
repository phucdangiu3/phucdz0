import React from "react";
import PropTypes from "prop-types";
import "./AppDownload.scss";
import { assets } from "../../assets/assets";

AppDownload.propTypes = {};

function AppDownload(props) {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
}

export default AppDownload;
