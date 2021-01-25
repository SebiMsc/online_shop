import React, { useContext } from "react";

import { DataContext } from "../../components/DataProvider";
import Product from "./Product";

const SmartProduct = (props) => {
  const data = useContext(DataContext);

  return <Product {...props} addProduct={data.addProduct} />;
};

export default SmartProduct;
