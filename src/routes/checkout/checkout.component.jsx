import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext);

  return (
    <div>
      <div className="">
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id} className="">
              <h2>{name}</h2>
              <span onClick={() => removeItemToCart(cartItem)}>-</span>
              <span>{quantity}</span>
              <span onClick={() => addItemToCart(cartItem)}>+</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Checkout