import React, { Component } from "react";
import { Image } from "react-bootstrap";

export default class Recipe extends Component {
  state = {
    image: [
      "./pictures/1.jpg",
      "./pictures/2.jpg",
      "./pictures/3.jpg",
      "./pictures/4.jpg",
      "./pictures/5.jpg",
      "./pictures/6.jpg",
      "./pictures/7.jpg",
      "./pictures/8.jpg",
      "./pictures/9.jpg",
      "./pictures/10.jpg",
      "./pictures/11.jpg",
      "./pictures/12.jpg",
      "./pictures/13.jpg",
      "./pictures/14.jpg",
      "./pictures/15.jpg",
      "./pictures/16.jpg",
      "./pictures/17.jpg",
      "./pictures/18.jpg",
      "./pictures/19.jpg",
      "./pictures/20.jpg"
    ]
  };
  render() {
    const { title, image_src, id } = this.props.recipes;
    const { image } = this.state;
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
              src={image[id - 1]}
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
