import React from "react";
import ReactDOM from "react-dom";

// import GoodMorning from "./components/GoodMorning";
import { GoodAfternoon, GoodEvening } from "./components/ Multiples";

ReactDOM.render(
  <div>
    <GoodAfternoon name="Polyane" />
    <GoodEvening name="Polyane" />
  </div>,
  document.getElementById("root")
);
