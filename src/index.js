import React from "react";
import ReactDOM from "react-dom";

// import GoodMorning from "./components/GoodMorning";
// import { GoodAfternoon, GoodEvening } from "./components/ Multiples";
// import Salutation from "./components/ Salutation";

import Father from "./components/Father";
import Son from "./components/Son";

ReactDOM.render(
  <div>
    <Father name="Paulo" lastname="Moura" />
    <Son name="Pedro" />
    <Son name="Luis" />
    <Son name="Carla" />
  </div>,
  document.getElementById("root")
);
