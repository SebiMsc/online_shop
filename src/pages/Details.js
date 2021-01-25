import React, { useContext, useState, Link } from "react";
import { DataContext } from "../components/DataProvider";
import { useParams } from "react-router-dom";
import Colors from "../components/Colors";
import Sizes from "../components/Sizes";
import DetailsThumb from "./DetailsThumb";

const Details = () => {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products] = value.products;
  const addProduct = value.addProduct;

  const [index, setIndex] = useState(0);

  const details = products.filter((product, index) => {
    return product._id === id;
  });

  //   console.log(details, "details");

  return (
    <>
      {details.map((product) => (
        <div className="details" key={product._id}>
          <div
            className="img-container"
            style={{ backgroundImage: `url(${product.images[index]})` }}
          />
          <div className="box-details">
            <h2 title={product.title}>{product.title}</h2>
            <h3>${product.price}</h3>
            <Colors colors={product.colors} />
            <Sizes sizes={product.sizes} />
            <p>{product.description}</p>
            <p>{product.content}</p>
            <DetailsThumb images={product.images} setIndex={setIndex} />
          </div>
          <button className="cart" onClick={() => addProduct(product._id)}>
            Add to cart
          </button>
        </div>
      ))}
    </>
  );
};

export default Details;
