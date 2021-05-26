import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./cartSlice";

const GlassesStore = (props) => {
  const shop = useSelector((state) => state.cart.shop);
  const glasses = useSelector((state) => state.cart.glasses);
  const dispatch = useDispatch();

  return (
    <div>
      <div id="shop">
        <ul>
          {shop.map((item, index) => (
            <li key={index} onClick={() => dispatch(addToCart(item))}>
              {item.name + " - " + item.price + " - " + item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div id="cart">
        <ul>
          {glasses.map((item, index) => (
            <li key={index} onClick={() => dispatch(removeFromCart(item))}>
              {item.name + " - " + item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => props.setScreen(1)}>Carrello</button>
    </div>
  );
};

export default GlassesStore;
