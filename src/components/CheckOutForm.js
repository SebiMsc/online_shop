import React, { useContext, useState } from "react";
import { DataContext } from "../components/DataProvider";
import "../pages/checkout.css";

const CheckOutForm = () => {
  //   const value = useContext(DataContext);
  //   const client = value.client;
  //   console.log("clienttt", client);
  const value = useContext(DataContext);
  const [formData, updateFormData] = value.client;

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("context form dta: ", value);
    // console.log("form data: ", formData);

    alert(" Your order has been placed");
  };

  return (
    <>
      <label>
        Full Name:&nbsp;
        <input name="username" onChange={handleChange} />
      </label>
      <br />
      <label>
        Address:&nbsp;&nbsp;&nbsp;&nbsp;
        <input name="password" onChange={handleChange} />
      </label>
      <br />
      <label>
        City: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input name="asd" onChange={handleChange} />
      </label>
      <br />
      <label>
        Country:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input name="asd" onChange={handleChange} />
      </label>
      <br />
      <button className="pay-btn" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default CheckOutForm;
