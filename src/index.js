import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
  // failing the test
    return false
    })

ReactDOM.render(<App />, document.getElementById("root"));