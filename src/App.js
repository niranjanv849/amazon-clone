import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    //BEM
    <div className="app">
      <Header />
      <Home />
      {/* <Checkout/> */}
    </div>
  );
}

export default App;