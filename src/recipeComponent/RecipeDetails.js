import React, { Component } from "react";
import { recipes } from "./../recipeList";
import { Image } from "react-bootstrap";

export default class RecipeDetails extends Component {
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
              <Image src={image[id - 1]} fluid rounded />
            </div>
            <div className="col-10 mx-auto col-md-6 my-6">
              <h2 style={{ fontWeight: "bolder" }} className="fontTwo">
                {title}
              </h2>
              <ul className="list-group mt-4">
                <h3 className="fontFive">Ingredients</h3>
                {ingredients.map((item, index) => {
                  return (
                    <li key={item} className="list-group-item fontFour">
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
