import React from "react";
import { Link } from "react-router-dom";
import { currency } from "../../static/contants";

const Product = (props) => (
  <div className="card" key={props.id}>
    <Link to={`/products/${props.id}`}>
      <img src={props.image} />
    </Link>
    <div className="box">
      <h3 title={props.title}>
        <Link to={`/products/${props.id}`}>{props.title}</Link>
      </h3>
      <p>{props.description}</p>
      <h4>
        {currency}
        {props.price}
      </h4>
      <button onClick={() => props.addProduct(props.id)}>Add to cart</button>
    </div>
  </div>
);

export default Product;
