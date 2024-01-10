import { Link } from "react-router-dom";

function ProductPageItem({ name, description, image, id }) {
  return (
    <div className="page-item">
      <img src={image.desktop} alt={name} />
      <div className="page-item-texts">
        <p className="new-product">New product</p>
        <h1>{name}</h1>
        <p className="product-des">{description}</p>
        <Link to={`/${id}`} className="page-btn">
          see product
        </Link>
      </div>
    </div>
  );
}

export default ProductPageItem;
