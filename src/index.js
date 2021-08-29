import React from "react";
import ReactDOM from "react-dom";

// import GoodMorning from "./components/GoodMorning";
// import { GoodAfternoon, GoodEvening } from "./components/ Multiples";

import Salutation from "./components/ Salutation";

ReactDOM.render(
  <div>
    <Salutation type="Good morning" name="Poly" />
  </div>,
  document.getElementById("root")
);
