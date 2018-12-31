import React, { Component } from "react";
import { render } from "react-dom";
import AnimationButton from "./react-hover-button";
import "./styles.scss";

function ButtonDemoList() {
  return (
    <div>
      <AnimationButton
        width={300}
        // hoverBackColor="#0093ff"
      >
        确定
      </AnimationButton>
    </div>
  );
}
render(<ButtonDemoList />, document.getElementById("root"));
