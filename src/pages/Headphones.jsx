import data from "../assets/data.json";
import ProductPageItem from "../components/ProductPageItem";

function Headphones() {
  const Matchedproducts = data.filter(
    (products) => products.category === "headphones"
  );

  const productElm = Matchedproducts.map((product) => (
    <ProductPageItem key={product.id} {...product} />
  ));

  return (
    <section className="products-page">
      <h1 className="products-page-title">Headphones</h1>
      <div className="product-list">{productElm}</div>
    </section>
  );
}

export default Headphones;
