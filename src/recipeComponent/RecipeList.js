import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeDetails from "./RecipeDetails";
import { recipes } from "./../recipeList";

export default class RecipeList extends Component {
  state = {
    recipes: recipes,
    details_recipe: {},
    pageIndex: 1
  };
  displayPage = index => {
    switch (index) {
      default:
      case 1:
        return this.state.recipes.map(recipe => (
          <Recipe
            key={recipe.id}
            recipes={recipe}
            displayDetails={this.displayDetails}
          />
        ));
      case 0:
        return (
          <RecipeDetails
            handleIndex={this.handleIndex}
            recipes={this.state.details_recipe}
          />
        );
    }
  };
  displayDetails = (index, id) => {
    let recipe = this.state.recipes.find(display => {
      return display.id === id;
    });
    this.setState({
      pageIndex: index,
      details_recipe: recipe
    });
  };
  handleIndex = index => {
    this.setState({
      pageIndex: index
    });
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ marginTop: "30px" }} className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 style={{ fontSize: "40px" }} className="fontFive">
                best recipes
              </h1>
            </div>
          </div>

          <div style={{ marginTop: "10px" }} className="row">
            {this.displayPage(this.state.pageIndex)}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
