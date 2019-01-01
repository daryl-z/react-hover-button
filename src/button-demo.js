import React, { Component } from "react";
import { render } from "react-dom";
import AnimationButton from "./react-hover-button";
import "./styles.css";

function ButtonDemoList() {
  return (
    <div>
      <AnimationButton width={300} color="#333">
        Buy Ticket
      </AnimationButton>
    </div>
  );
}
render(<ButtonDemoList />, document.getElementById("root"));
