import React, { Component } from "react";
import { recipes } from "./../recipeList";
import { Image } from "react-bootstrap";

export default class RecipeDetails extends Component {
  render() {
    const { handleIndex } = this.props;
    const { image_src, title, ingredients } = this.props.recipes;
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
              <Image src={image_src} fluid rounded />
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
