import React, { useContext } from "react";

import { DataContext } from "../components/DataProvider";
import Store from "../static/svg/store-img.jpg";
import SmartProduct from "../components/Product";

const Home = () => {
  const value = useContext(DataContext);
  const [products] = value.products;

  const randomProducts = products
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  return (
    <>
      <div className="home-img">
        <img src={Store} style={{ width: "100%" }} />
      </div>
      <h2>Recommended products</h2>

      <div className="products">
        {randomProducts.map((product) => (
          <SmartProduct
            id={product._id}
            image={product.images[0]}
            title={product.title}
            decription={product.description}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
