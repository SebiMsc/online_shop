import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Products from "./pages/Products";
import { DataProvider } from "./components/DataProvider";
import About from "./pages/About";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import CreateProducts from "./components/CreateProducts";
import OrderConfirmation from "./pages/OrderConfirmation";
import CheckOutForm from "./components/CheckOutForm";
import Login from "./components/Login/Login.js";

// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <div>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/products" exact>
                <Products />
              </Route>
              <Route path="/products/:id" exact>
                <Details />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route path="/cart" exact>
                <Cart />
              </Route>
              <Route path="/checkout" exact>
                <Checkout />
              </Route>
              <Route path="/createproducts" exact>
                <CreateProducts />
              </Route>
              <Route path="/checkoutform" exact>
                <CheckOutForm />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
