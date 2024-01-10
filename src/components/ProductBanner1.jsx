import { Link } from "react-router-dom";
import zx9 from "/assets/home/desktop/image-speaker-zx9.png";

function ProductBanner1() {
  return (
    <article className="banner-1">
      <img src={zx9} alt="" />
      <div className="banner-1-texts">
        <h3>
          zx9 <br /> speaker
        </h3>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button>
          <Link to="6">see product</Link>
        </button>
      </div>
    </article>
  );
}

export default ProductBanner1;
