import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FreeShipping from "../adminData.json";
import { DataContext } from "../components/DataProvider";
import "./checkout.css";
import CheckOutForm from "../components/CheckOutForm";

const Checkout = () => {
  const value = useContext(DataContext);
  console.log("datacontext checkout", value);
  const [checkoutCart, setCart] = value.cart;

  const orderTotal = value.orderTotal;

  const fShip =
    FreeShipping[0]
      .freeShippingAmount; /** value margin to be met for free shipping */
  const shipCost = FreeShipping[0].shippingCost;

  const isShippingFree = orderTotal > fShip ? true : false;

  // Order number
  const orderNumber =
    Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000;

  return (
    <>
      <div className="container">
        <div className="window">
          <div className="order-info">
            <div className="order-info-content">
              <h2>Order Summary</h2>
              <div className="line"></div>
              {checkoutCart.map((item) => (
                <div>
                  <table className="order-table">
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src={item.images[0]}
                            className="full-width"
                          ></img>
                        </td>
                        <td>
                          <span className="thin"> {/*TITLE*/} </span>

                          {item.title}
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="price">${item.price}</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="line"></div>
                </div>
              ))}

              <div className="total">
                <span style={{ float: "left" }}>
                  <div className="thin dense">Shipping</div>
                  TOTAL
                </span>
                <span style={{ float: "right", textalign: "right" }}>
                  <div className="thin dense">
                    ${isShippingFree ? "Free" : shipCost}
                  </div>
                  <div>
                    {isShippingFree ? orderTotal : orderTotal + shipCost}
                    $$$$$
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="credit-info">
            <div className="credit-info-content">
              <table className="half-input-table">
                <tr>
                  <td>Your order number is: </td>

                  <span>#{orderNumber}</span>
                </tr>
              </table>
              <img
                src="https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png"
                height="80"
                className="credit-card-image"
                id="credit-card-image"
              ></img>
              <CheckOutForm />
              {/* Full Name
              <input className="input-field"></input>
              Adress
              <input className="input-field"></input>
              City
              <input className="input-field"></input>
              <table className="half-input-table">
                <tr>
                  <td>
                    {" "}
                    Country
                    <input className="input-field"></input>
                  </td>
                  <td>
                    State
                    <input className="input-field"></input>
                  </td>
                </tr>
              </table>
              <Link to={{ pathname: "/checkoutform" }}>
                <button className="pay-btn">Submit Order</button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
