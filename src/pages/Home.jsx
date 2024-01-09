import ProductBanner1 from "../components/ProductBanner1";
import ProductBanner2 from "../components/ProductBanner2";
import ProductBanner3 from "../components/ProductBanner3";
import ProductDisplay from "../components/ProductDisplay";
import Hero from "../components/hero";

function Home() {
  return (
    <div>
      <Hero />
      <ProductDisplay />
      <section className="banners">
        <ProductBanner1 />
        <ProductBanner2 />
        <ProductBanner3 />
      </section>
    </div>
  );
}

export default Home;
