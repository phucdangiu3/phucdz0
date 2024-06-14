import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";
Header.propTypes = {};

function Header(props) {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes the
          finest ingredients and culinary expertise. Our mission is to satisfy
          your dining experience,one delicious meal at a time. your crafted
          with.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
