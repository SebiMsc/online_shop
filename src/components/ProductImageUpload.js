import React, { Component } from "react";
import ImageCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

class ProductImageUpload extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-md-12">
            <div className="card">
              <div className="card-header">
                <input type="file" />
              </div>
              <div className="card-body"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-6">
            <div className="card">
              <div className="card-header"></div>
              <div className="card-body"></div>
            </div>
          </div>

          <div className="col col-md-6">
            <div className="card">
              <div className="card-header"></div>
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductImageUpload;
