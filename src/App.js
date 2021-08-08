import { BrowserRouter as Router, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import React from "react";
import landingPage from "./pages/landingPage";
function App() {
  return (
    <>
      <Router>
        <Route path="/" component={landingPage}></Route>
      </Router>
    </>
  );
}

export default App;
