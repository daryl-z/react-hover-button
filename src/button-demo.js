import React, { Component } from "react";
import { render } from "react-dom";
import { HoverButtonDiagonal } from "../lib/index";
import "./styles.css";

function ButtonDemoList() {
  return (
    <div>
      <HoverButtonDiagonal width={300} color="#333" maskColor="#eb512c">
        Buy Ticket
      </HoverButtonDiagonal>
    </div>
  );
}
render(<ButtonDemoList />, document.getElementById("root"));
