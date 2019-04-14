import React, { Component } from "react";
import RecipeList from "./recipeComponent/RecipeList";
import CustomNavbar from "./CustomNavbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <CustomNavbar />
        <RecipeList />
      </div>
    );
  }
}

export default App;
