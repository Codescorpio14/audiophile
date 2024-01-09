import { useDispatch, useSelector } from "react-redux";
import { closeModel, confirmOrder } from "../redux/features/checkoutSlice";
import { emptyCart } from "../redux/features/cartSlice";

function ModelComplete() {
  const { formInput } = useSelector((state) => state.checkout);
  const { total, vat, count } = useSelector((state) => state.cart);
  const { place, zip, city } = formInput.address;
  const dispatch = useDispatch();

  return (
    <section className="model">
      <div className="confirm-model">
        <div>
          <h3>Confirm Order</h3>
          <p>Name: {formInput.name}</p>
          <p>Phone: {formInput.phone}</p>
          <p>Address: {`${place}, ${city}- ${zip}`} </p>
          <p>Orders: {count}</p>
          <p>Total: ${(total + vat + 10).toFixed(2)}</p>
        </div>
        <div className="model-btn">
          <button onClick={() => dispatch(closeModel())} className="cancel-btn">
            Close
          </button>
          <button
            onClick={() => {
              dispatch(emptyCart());
              dispatch(confirmOrder());
            }}
            className="confirm-btn"
          >
            Confirm
          </button>
        </div>
      </div>
    </section>
  );
}

export default ModelComplete;
