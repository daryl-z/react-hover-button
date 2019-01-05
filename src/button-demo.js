import React, { Component } from "react";
import { render } from "react-dom";
import { HoverButtonDiagonal } from "../lib/index";
import "./styles.css";

function ButtonDemoList() {
  return (
    <div>
      <HoverButtonDiagonal width={300} color="#333" maskColor="#179be2">
        Hover me!
      </HoverButtonDiagonal>
    </div>
  );
}
render(<ButtonDemoList />, document.getElementById("root"));
