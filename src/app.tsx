import * as React from "react";
import img from "./assets/img/postcard.png";

import './app.scss'

const App: React.FC = () => {
  return (
    <>
      <h2>Hi, bitch</h2>
      <img src={img} alt="img" />
    </>);
};

export default App;
