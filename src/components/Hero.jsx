import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-text-new">New product </p>
        <h1 className="hero-title">
          XX99 Mark II <br /> Headphones
        </h1>
        <p className="hero-text-detail">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="btn">
          <Link to="4">See product</Link>
        </button>
      </div>
    </section>
  );
}

export default Hero;
