import React, { createContext, useState, useEffect } from "react";
import productData from "../static/productsData.json";
import appUsers from "../static/appUsers.json";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState(productData);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(appUsers);

  // const localStorageCart = JSON.parse(localStorage.dataCart);
  // const orderTotal = localStorageCart.reduce(
  //   (acc, curr) => acc + curr.price * curr.count,
  //   0
  // );

  const [client, setClient] = useState([]); // client info from checkout form

  const addProduct = (id) => {
    const isNotAddedToCart = cart.every((item) => item._id !== id);

    if (isNotAddedToCart) {
      const productToAdd = products.find((products) => products._id === id);

      setCart([...cart, productToAdd]);
    } else {
      alert("Product was already added to cart");
    }
  };

  // useEffect(() => {
  //   const dataCart = JSON.parse(localStorage.getItem("dataCart"));
  //   if (dataCart) {
  //     setCart(dataCart);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("dataCart", JSON.stringify(cart));
  // }, [cart]);

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addProduct,
    // orderTotal,
    client: [client, setClient],
    user,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
