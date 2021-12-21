import React from "react";
import "./Home.css";
import hero_container from "./hero_img.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div classname="home__container">
        <img className="home__image" src={hero_container} alt="" />

        <div className="home__row">
          <Product
            title="The Worst Book to Read at best situation: A practioner's guide"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg"
            rating={3}
          />
          <Product
            title="boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)"
            price={150.29}
            image="https://m.media-amazon.com/images/I/719elVA3FvL._SL1500_.jpg"
            rating={4}
          />
          {/* Product */}
        </div>

        <div className="home__row">
          <Product
            title="OnePlus Smart Band: 13 Exercise Modes"
            price={15.5}
            image="https://m.media-amazon.com/images/I/61XPTRJZcCL._SL1500_.jpg"
            rating={5}
          />
          <Product
            title="Apple iPhone XR (64GB) - White"
            price={36.0}
            image="https://m.media-amazon.com/images/I/51PuFBgBK4L._SL1024_.jpg"
            rating={3}
          />
          <Product
            title="Apple iPhone 12 Mini (128GB) - Green"
            price={250.5}
            image="https://m.media-amazon.com/images/I/71i+-WmxHWL._SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            title="AmazonBasics 109 cm (43 inches) 4K Ultra HD Smart LED Fire TV AB43U20PS (Black)"
            price={950.99}
            image="https://m.media-amazon.com/images/I/71AqQyCMmeL._SL1240_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
