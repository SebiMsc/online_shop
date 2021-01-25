import React, { useContext } from "react";
import { DataContext } from "../components/DataProvider";
import SmartProduct from "../components/Product";

const Products = () => {
  const data = useContext(DataContext);
  const [products] = data.products;

  return (
    <div className="products">
      {products.map((product) => (
        <SmartProduct
          id={product._id}
          image={product.images[0]}
          title={product.title}
          decription={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Products;
