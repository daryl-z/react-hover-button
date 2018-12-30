import React, { Component } from "react";
import "./styles.scss";

export default function AnimationButton({ color }) {
  return (
    <a className="a" style={{ color: color }}>
      Click me
    </a>
  );
}
