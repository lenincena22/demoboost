import React from "react";
import { Header, About, Result, Banner, Footer } from "./containers/export";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Result />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
