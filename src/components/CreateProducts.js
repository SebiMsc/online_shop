import React, { Component } from "react";
import ImageCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import ProductImageUpload from "./ProductImageUpload";

const CreateProducts = () => {
  return (
    <>
      <div>Create Products</div>;
      <ProductImageUpload />
    </>
  );
};

export default CreateProducts;
