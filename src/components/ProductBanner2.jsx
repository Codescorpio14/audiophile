import { Link } from "react-router-dom";

function ProductBanner2() {
  return (
    <article className="banner-2">
      <div>
        <h3>ZX7 Speaker</h3>
        <button>
          <Link to="5">See product</Link>
        </button>
      </div>
    </article>
  );
}

export default ProductBanner2;
