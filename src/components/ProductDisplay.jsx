import { Link } from "react-router-dom";
import arrowright from "../assets/shared/desktop/icon-arrow-right.svg";
import speakers from "../assets/shared/desktop/image-speakers.png";
import earphones from "../assets/shared/desktop/image-earphones.png";
import headphones from "../assets/shared/desktop/image-headphones.png";

function ProductDisplay() {
  return (
    <section className="product-display">
      <div className="product-box">
        <img className="product-box-image" src={headphones} alt="" />
        <h2>Headphones</h2>
        <Link to="../headphones">
          Shop <img src={arrowright} alt="" />
        </Link>
      </div>
      <div className="product-box">
        <img className="product-box-image" src={speakers} alt="" />
        <h2>Speakers</h2>
        <Link to="../speakers">
          Shop <img src={arrowright} alt="" />
        </Link>
      </div>
      <div className="product-box">
        <img className="product-box-image" src={earphones} alt="" />
        <h2>Earphones</h2>
        <Link to="../earphones">
          Shop <img src={arrowright} alt="" />
        </Link>
      </div>
    </section>
  );
}

export default ProductDisplay;
