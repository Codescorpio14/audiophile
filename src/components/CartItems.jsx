import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, calculations } from "../redux/features/cartSlice";
import { useEffect } from "react";

function CartItems({ image, name, price, id, slug }) {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculations());
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const cartItem = cart.find((item) => item.id === id);

  return (
    <div className="cart-item">
      <img src={image.mobile} alt={slug} />
      <div className="cart-item-texts">
        <p className="cart-item-name">{name}</p>
        <p>$ {price}</p>
      </div>
      <div className="cart-item-quantity">
        <button onClick={() => dispatch(removeItem(cartItem.id))}>-</button>
        {cartItem.quantity}
        <button onClick={() => dispatch(addItem(cartItem.id))}>+</button>
      </div>
    </div>
  );
}

export default CartItems;
