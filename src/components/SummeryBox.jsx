import { useDispatch, useSelector } from "react-redux";
import data from "../assets/data.json";
import CartItems from "./cartItems";
import { formValidation } from "../redux/features/checkoutSlice";

function SummeryBox() {
  const { cart, total, vat } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const matchingProducts = data.filter((item) =>
    cart.some((product) => product.id === item.id)
  );

  const productElm = matchingProducts.map((item) => (
    <CartItems key={item.id} {...item} />
  ));
  return (
    <article className="summary">
      <h1>Summary</h1>
      <div className="summary-grid">
        <div className="checkout-items">{productElm}</div>
        <p>Total</p>
        <p className="sum-num">$ {total}.00</p>
        <p>Shipping</p>
        <p className="sum-num">$ {cart.length > 0 ? "10.00" : "0.00"}</p>
        <p>Vat(15%)</p>
        <p className="sum-num">$ {vat.toFixed(2)}</p>
        <hr />
        <p className="accent">Grand Total</p>
        <p className="sum-num accent">
          $ {cart.length > 0 ? (total + vat + 10).toFixed(2) : "0.00"}
        </p>
        <button onClick={() => dispatch(formValidation())}>
          Continue & pay
        </button>
      </div>
    </article>
  );
}

export default SummeryBox;
