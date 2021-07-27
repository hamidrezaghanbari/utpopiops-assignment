import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BasketPage from "./pages/basket.page";
import EditPostPage from "./pages/edit-post.page";
import HomePage from "./pages/home.page";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          
          <Route exact path="/basket">
            <BasketPage />
          </Route>

          <Route  path="/edit/:userId/:id">
            <EditPostPage />
          </Route>
        </Switch>
    </Router>
  );
}
