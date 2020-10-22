import React, { Component } from "react";
import "./App.scss";
import TodoList from "./containers/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App container">
        <BrowserRouter>
          <Route exact path="" component={TodoList}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
