import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import RecipeList from "./recipeComponent/RecipeList";
import CustomNavbar from "./CustomNavbar";
import Home from "./Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <CustomNavbar />
          <Route exact path="/" component={Home} />
          <Route path="/recipes" component={RecipeList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
