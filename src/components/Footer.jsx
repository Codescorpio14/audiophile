import logo from "/assets/shared/desktop/logo.svg";
import facebook from "/assets/shared/desktop/icon-facebook.svg";
import insta from "/assets/shared/desktop/icon-instagram.svg";
import twitter from "/assets/shared/desktop/icon-twitter.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-left">
          <img src={logo} alt="" />
          <p className="footer-detail">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li>
              <Link to="/" href="#">
                Home
              </Link>
            </li>
            <li>
              <Link to="headphones" href="#">
                Headphones
              </Link>
            </li>
            <li>
              <Link to="speakers" href="#">
                Speakers
              </Link>
            </li>
            <li>
              <Link to="earphones" href="#">
                Earphones
              </Link>
            </li>
          </ul>
          <div className="footer-icons">
            <a href="#">
              <img src={facebook} alt="facebook-icon" />
            </a>
            <a href="#">
              <img src={insta} alt="instagram icon" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
