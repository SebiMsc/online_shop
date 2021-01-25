import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../components/DataProvider";
import Colors from "../components/Colors";
import Sizes from "../components/Sizes";
import Checkout from "./Checkout";

const Cart = () => {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  const orderTotal = value.orderTotal;
  console.log("order total in cart", orderTotal);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const decrease = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };
  const increase = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this item?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  if (cart.length === 0)
    return (
      <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart is empty</h2>
    );

  return (
    <>
      {cart.map((product) => (
        <div className="details cart" key={product._id}>
          <div
            className="img-container"
            style={{ backgroundImage: `url(${product.images[0]})` }}
          />
          <div className="box-details">
            <h2 title={product.title}>{product.title}</h2>
            <h3>${product.price}</h3>
            <Colors colors={product.colors} />
            <Sizes sizes={product.sizes} />
            <p>{product.description}</p>
            <p>{product.content}</p>
            <div className="amount">
              <button className="count" onClick={() => decrease(product._id)}>
                {" "}
                -{" "}
              </button>
              <span>{product.count}</span>
              <button className="count" onClick={() => increase(product._id)}>
                {" "}
                +{" "}
              </button>

              <div
                className="delete"
                onClick={() => removeProduct(product._id)}
              >
                X
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="total">
        <Link to="/payment">Payment</Link>
        <h3>Total 123</h3>
      </div> */}

      {/* Sendig data through LInk !!! */}
      <div className="total">
        <Link to={{ pathname: "/checkout" }}>
          <button
          // onClick={() => {
          //   setplm({ total });
          // }}
          >
            Checkout
          </button>
        </Link>

        <h3>Total: $ {total}</h3>
      </div>
    </>
  );
};

export default Cart;
