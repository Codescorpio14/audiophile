import { Link } from "react-router-dom";
import yx1 from "../assets/home/desktop/image-earphones-yx1.jpg";

function ProductBanner3() {
  return (
    <article className="banner-3">
      <img src={yx1} alt="yx1 earphone photo" />
      <div className="banner-3-texts">
        <h3>YX1 Earphones</h3>
        <button>
          <Link to="1">See product</Link>
        </button>
      </div>
    </article>
  );
}

export default ProductBanner3;
