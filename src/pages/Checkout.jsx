import { Link } from "react-router-dom";
import CheckoutBox from "../components/CheckoutBox";
import SummeryBox from "../components/SummeryBox";
import ModelComplete from "../components/ModelComplete";
import { useSelector } from "react-redux";

function Checkout() {
  const { purchaseComplete } = useSelector((state) => state.checkout);
  return (
    <section className="checkout">
      <div className="go-back-link">
        <Link to="..">Go Back</Link>
      </div>
      <div className="checkout-container">
        <CheckoutBox />
        <SummeryBox />
      </div>

      {purchaseComplete && <ModelComplete />}
    </section>
  );
}

export default Checkout;
