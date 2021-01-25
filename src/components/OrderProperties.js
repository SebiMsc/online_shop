import React from "react";
import React, { useContext, useState, Link, useEffect } from "react";
import { DataContext } from "./DataProvider";

const OrderProperties = () => {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  return <div></div>;
};

export default OrderProperties;
