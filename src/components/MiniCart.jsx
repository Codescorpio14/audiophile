import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { emptyCart } from "../redux/features/cartSlice";
import { toggleCart } from "../redux/features/togglesSlice";
import data from "../assets/data.json";
import CartItems from "./CartItems";

function MiniCart() {
  const { cart, total, count } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const matchingProducts = data.filter((item) =>
    cart.some((product) => product.id === item.id)
  );

  const productElm = matchingProducts.map((item) => (
    <CartItems key={item.id} {...item} />
  ));

  return (
    <div className="mini-cart">
      <p className="cart-count">cart ({count})</p>
      <p className="cart-remove-btn" onClick={() => dispatch(emptyCart())}>
        Remove all
      </p>
      <div className="cart-products">{productElm}</div>
      <p className="cart-total">total</p>
      <p className="total-price">$ {total}</p>
      <Link
        to="checkout"
        onClick={() => dispatch(toggleCart())}
        className="cart-checkout-btn"
      >
        Checkout
      </Link>
    </div>
  );
}

export default MiniCart;
