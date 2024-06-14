import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./FoodItem.scss";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

FoodItem.propTypes = {
  id: PropTypes.isRequired,
  name: PropTypes.isRequired,
  price: PropTypes.isRequired,
  description: PropTypes.isRequired,
  image: PropTypes.isRequired,
  rating: PropTypes.isRequired, // Assuming you have ratings
};

function FoodItem({ id, name, price, description, image, rating }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />

        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}
export default FoodItem;
