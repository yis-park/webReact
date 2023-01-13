import React from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Web from "./components/Web";
import Menu from "./components/Menu";
import "./assets/style/WebStyle.css";

import { Reset } from "styled-reset";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <h1>App.js</h1> */}
      <Reset />
      <Menu />
      <Web />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Footer />
    </>
  );
}

export default App;
