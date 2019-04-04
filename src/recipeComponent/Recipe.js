import React, { Component } from "react";
import { Image } from "react-bootstrap";

export default class Recipe extends Component {
  render() {
    const { title, image_src, id } = this.props.recipes;
    return (
      <React.Fragment>
        <div
          style={{ padding: "5px" }}
          className="col-10 mx-auto col-md-6 col-lg-3 my-3"
        >
          <div className="card">
            <Image
              style={{ height: "14rem" }}
              className="img-card-top"
              src={image_src}
              rounded
              fluid
            />
            <h2 style={{ textAlign: "center" }} className="fontTwo">
              {title}
            </h2>
            <div className="card-footer">
              <button
                onClick={() => this.props.displayDetails(0, id)}
                style={{ fontWeight: "bolder" }}
                className="btn btn-primary text-capitalize fontOne"
              >
                Recipe details
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
