import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleNav } from "../redux/features/togglesSlice";

function MiniNav() {
  const dispatch = useDispatch();

  return (
    <ul className="mobile-nav">
      <li>
        <Link onClick={() => dispatch(toggleNav())} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link onClick={() => dispatch(toggleNav())} to="headphones">
          Headphones
        </Link>
      </li>
      <li>
        <Link onClick={() => dispatch(toggleNav())} to="speakers">
          Speakers
        </Link>
      </li>
      <li>
        <Link onClick={() => dispatch(toggleNav())} to="earphones">
          Earphones
        </Link>
      </li>
    </ul>
  );
}

export default MiniNav;
