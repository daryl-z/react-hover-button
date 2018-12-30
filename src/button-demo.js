import React, { Component } from "react";
import { render } from "react-dom";
import AnimationButton from "./react-hover-button";
import "./styles.scss";

function ButtonDemoList() {
  return (
    <div>
      <AnimationButton
        hoverBackColor="#0093ff"
        background={"linear-gradient(to right, #6dd5ed, #2193b0)"}
      >
        确定
      </AnimationButton>
    </div>
  );
}
render(<ButtonDemoList />, document.getElementById("root"));
