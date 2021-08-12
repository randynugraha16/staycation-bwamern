import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/scss/app.scss";
import React from "react";
import landingPage from "./pages/landingPage";
import DetailsPage from "./pages/DetailsPage";
import Example from "./pages/Example";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={landingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route exact path="/checkout" component={Checkout}></Route>
        <Route exact path="/example" component={Example}></Route>
      </Router>
    </>
  );
}

export default App;
