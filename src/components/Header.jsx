import logo from "/assets/shared/desktop/logo.svg";
import cart from "/assets/shared/desktop/icon-cart.svg";
import hamburger from "/assets/shared/tablet/icon-hamburger.svg";
import { NavLink } from "react-router-dom";
import MiniCart from "./MiniCart";
import MiniNav from "./MiniNav";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart, toggleNav } from "../redux/features/togglesSlice";

function Header() {
  const { cartOpen, navOpen } = useSelector((state) => state.toggle);
  const dispatch = useDispatch();

  return (
    <header>
      <nav>
        <img
          className="hamburger"
          src={hamburger}
          onClick={() => dispatch(toggleNav())}
          alt="hamburger menu button"
        />
        <img src={logo} alt="audiophile logo" />
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="headphones">Headphones</NavLink>
          </li>
          <li>
            <NavLink to="speakers">Speakers</NavLink>
          </li>
          <li>
            <NavLink to="earphones">Earphones</NavLink>
          </li>
        </ul>
        {navOpen && <MiniNav />}
        <img
          className="cart-icon"
          src={cart}
          onClick={() => dispatch(toggleCart())}
          alt="cart icon"
        />
      </nav>
      {cartOpen && <MiniCart />}
    </header>
  );
}

export default Header;
