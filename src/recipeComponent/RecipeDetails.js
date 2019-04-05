import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Image_1 from "./pictures/1.jpg";
import Image_2 from "./pictures/2.jpg";
import Image_3 from "./pictures/3.jpg";
import Image_4 from "./pictures/4.jpg";
import Image_5 from "./pictures/5.jpg";
import Image_6 from "./pictures/6.jpg";
import Image_7 from "./pictures/7.jpg";
import Image_8 from "./pictures/8.jpg";
import Image_9 from "./pictures/9.jpg";
import Image_10 from "./pictures/10.jpg";
import Image_11 from "./pictures/11.jpg";
import Image_12 from "./pictures/12.jpg";
import Image_13 from "./pictures/13.jpg";
import Image_14 from "./pictures/14.jpg";
import Image_15 from "./pictures/15.jpg";
import Image_16 from "./pictures/16.jpg";
import Image_17 from "./pictures/17.jpg";
import Image_18 from "./pictures/18.jpg";
import Image_19 from "./pictures/19.jpg";
import Image_20 from "./pictures/20.jpg";

export default class Recipe extends Component {
  state = {
    image: [
      Image_1,
      Image_2,
      Image_3,
      Image_4,
      Image_5,
      Image_6,
      Image_7,
      Image_8,
      Image_9,
      Image_10,
      Image_11,
      Image_12,
      Image_13,
      Image_14,
      Image_15,
      Image_16,
      Image_17,
      Image_18,
      Image_19,
      Image_20
    ]
  };
  render() {
    const { image } = this.state;
    const { handleIndex } = this.props;
    const { id, title, ingredients } = this.props.recipes;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-6">
              <button
                style={{ margin: "10px" }}
                onClick={() => handleIndex(1)}
                className="btn btn-success text-capitalize fontOne"
              >
                Back to recipe list
              </button>
              <Image src={image[id - 1]} rounded fluid />
            </div>
            <div className="col-10 mx-auto col-md-6 my-6">
              <h2 style={{ fontWeight: "bolder" }} className="fontTwo">
                {title}
              </h2>
              <ul className="list-group mt-4">
                <h3 className="fontFive">Ingredients</h3>
                {ingredients.map((item, index) => {
                  return (
                    <li key={index} className="list-group-item fontFour">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
