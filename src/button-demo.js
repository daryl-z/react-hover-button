import React, { Component } from "react";
import { render } from "react-dom";
import AnimationButton from "./react-hover-button";

function ButtonDemoList() {
  return (
    <div>
      <AnimationButton />
    </div>
  );
}
render(<ButtonDemoList />, document.getElementById("root"));
