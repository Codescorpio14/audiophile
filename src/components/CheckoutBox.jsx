import { useDispatch, useSelector } from "react-redux";
import {
  updateAddress,
  updateForm,
  updateMethod,
} from "../redux/features/checkoutSlice";

function CheckoutBox() {
  const { formInput, validationErrors } = useSelector(
    (state) => state.checkout
  );
  const dispatch = useDispatch();

  return (
    <article className="checkoutbox">
      <h1>Checkout</h1>
      <div className="checkout-input-con">
        <div className="grid-split">
          <h4>Billing details</h4>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              value={formInput.name}
              onChange={(e) =>
                dispatch(
                  updateForm({ name: e.target.name, value: e.target.value })
                )
              }
              placeholder="Jhon Doe"
            />
            <p className="invalid-input">{validationErrors.name}</p>
          </label>
          <label htmlFor="email">
            Email Address:
            <input
              type="email"
              name="email"
              value={formInput.email}
              onChange={(e) =>
                dispatch(
                  updateForm({ name: e.target.name, value: e.target.value })
                )
              }
              placeholder="jhondoe@mail.com"
            />
            <p className="invalid-input">{validationErrors.email}</p>
          </label>
          <label htmlFor="phone-no">
            Phone No:
            <input
              type="number"
              name="phone"
              value={formInput.phone}
              onChange={(e) =>
                dispatch(
                  updateForm({ name: e.target.name, value: e.target.value })
                )
              }
              placeholder="+123-456-7890"
            />
            <p className="invalid-input">{validationErrors.phone}</p>
          </label>
        </div>

        <div className="grid-split">
          <h4>Shipping info</h4>
          <label className="address-input" htmlFor="address">
            Address:
            <input
              type="text"
              name="place"
              value={formInput.address.place}
              onChange={(e) =>
                dispatch(
                  updateAddress({ name: e.target.name, value: e.target.value })
                )
              }
              placeholder="16 Dhanmondi 14"
            />
            <p className="invalid-input">{validationErrors.address}</p>
          </label>
          <label htmlFor="zip">
            Zip Code:
            <input
              type="number"
              name="zip"
              value={formInput.address.zip}
              onChange={(e) =>
                dispatch(
                  updateAddress({ name: e.target.name, value: e.target.value })
                )
              }
              placeholder="1562"
            />
            <p className="invalid-input">{validationErrors.zip}</p>
          </label>
          <label htmlFor="city">
            City:
            <input
              type="text"
              name="city"
              value={formInput.address.city}
              onChange={(e) =>
                dispatch(
                  updateAddress({ name: e.target.name, value: e.target.value })
                )
              }
              placeholder="Dhaka"
              required
            />
          </label>
          <label htmlFor="country">
            Country:
            <input
              type="text"
              name="country"
              value={formInput.address.country}
              onChange={(e) =>
                dispatch(
                  updateAddress({ name: e.target.name, value: e.target.value })
                )
              }
              placeholder="Bangladesh"
              required
            />
          </label>
        </div>

        <div className="payment-details">
          <h4>payment details</h4>
          <p>Payment method</p>

          <label className="select-method" htmlFor="e-money">
            <input
              id="e-money"
              checked={formInput.paymentMethod === "emoney"}
              onChange={(e) =>
                dispatch(updateMethod({ value: e.target.value }))
              }
              name="paymentMethod"
              type="radio"
              value={"emoney"}
            />
            e-Money
          </label>

          <label className="select-method" htmlFor="cash">
            <input
              id="cash"
              checked={formInput.paymentMethod === "cashondelivery"}
              onChange={(e) =>
                dispatch(updateMethod({ value: e.target.value }))
              }
              name="paymentMethod"
              type="radio"
              value={"cashondelivery"}
            />
            Cash on Delivery
          </label>

          {formInput.paymentMethod === "emoney" ? (
            <div>
              <label htmlFor="e-number">
                {" "}
                e-Money number
                <input
                  type="number"
                  name="Enumber"
                  value={formInput.Enumber}
                  onChange={(e) =>
                    dispatch(
                      updateForm({ name: e.target.name, value: e.target.value })
                    )
                  }
                  placeholder="123456-7890"
                />
                <p className="invalid-input">{validationErrors.Enumber}</p>
              </label>
              <label htmlFor="e-pin">
                e-money PIN
                <input
                  type="number"
                  name="Epin"
                  value={formInput.Epin}
                  onChange={(e) =>
                    dispatch(
                      updateForm({ name: e.target.name, value: e.target.value })
                    )
                  }
                  placeholder="123456"
                />
                <p className="invalid-input">{validationErrors.Epin}</p>
              </label>
            </div>
          ) : (
            <p>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default CheckoutBox;
