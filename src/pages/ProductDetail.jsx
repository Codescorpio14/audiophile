import { Link, useParams } from "react-router-dom";
import data from "../assets/data.json";
import ProdcutDisplay from "../components/ProductDisplay";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  addToCart,
  reduceQuantity,
} from "../redux/features/cartSlice";

function ProductDetail() {
  const { productId } = useParams();

  const product = data.find(
    (product) => product.id == productId || product.slug === productId
  );

  const { quantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {product ? (
        <section className="product-details">
          <div className="go-back-link">
            <Link to="..">Go Back</Link>
          </div>
          <div className="flex-wrapper">
            <img
              src={product.image.desktop}
              alt={product.name}
              className="product-image"
            />

            <div className="product-details-texts">
              {product.new && <p className="new-product">New Product</p>}
              <h1>{product.name}</h1>
              <p className="product-description">{product.description}</p>
              <p className="product-price">$ {product.price}</p>
              <div className="product-buttons">
                <div className="cart-quantity">
                  <button onClick={() => dispatch(reduceQuantity())}>-</button>
                  <p>{quantity}</p>
                  <button onClick={() => dispatch(addQuantity())}>+</button>
                </div>
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({ id: product.id, price: product.price })
                    )
                  }
                  className="add-to-cart-btn"
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>

          <article className="product-feature-box">
            <div className="product-features">
              <h1>features</h1>
              <p>{product.features}</p>
            </div>
            <div className="box-content">
              <h1>In the box</h1>
              <ul>
                {product.includes.map((include) => (
                  <li key={include.item}>
                    <p>
                      <span>{include.quantity}x </span> {include.item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </article>
          <article className="featured-images">
            <img
              className="img1"
              src={product.gallery.first.desktop}
              alt="image 1"
            />
            <img
              className="img2"
              src={product.gallery.second.desktop}
              alt="image 2"
            />
            <img
              className="img3"
              src={product.gallery.third.desktop}
              alt="image 3"
            />
          </article>
          <article className="product-suggestions">
            <h1 className="suggest-title">You may also like</h1>
            <div className="suggested-products">
              {product.others.map((other) => (
                <div className="suggested-product" key={other.name}>
                  <img src={other.image.desktop} alt={other.slug} />
                  <h2>{other.name}</h2>
                  <button>
                    <Link to={"../" + other.slug}>see product</Link>
                  </button>
                </div>
              ))}
            </div>
          </article>

          <ProdcutDisplay />
        </section>
      ) : (
        <div className="error-msg">
          <h1>No page found or a broken link..</h1>
          <Link to="/">Return to Home page...</Link>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
