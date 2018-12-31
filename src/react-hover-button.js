import React, { useRef, useEffect, useState, Component } from "react";
import styled from "styled-components";

export default function AnimationButton({
  color,
  width = "12em",
  height,
  background,
  hoverBack,
  children = "Hover me",
  onClick
}) {
  const btnEle = useRef(null);
  const [btnWidth, setWidth] = useState(0);
  const [btnHeight, setHeight] = useState(0);
  const [diagonal, setDiagonal] = useState(0);
  const [maskRotateDeg, setDeg] = useState(0);
  useEffect(_ => {
    const { offsetHeight, offsetWidth } = btnEle.current;
    setWidth(offsetWidth);
    setHeight(offsetHeight);
    setDiagonal(
      Math.sqrt(Math.pow(offsetWidth, 2) + Math.pow(offsetHeight, 2))
    );
    setDeg(Math.atan(offsetHeight / offsetWidth) * (-180 / Math.PI));
  }, []);

  const Mask = styled.a`
    --p: 0;
    --q: calc(1 - var(--p));
    overflow: hidden;
    position: relative;
    display: block;
    z-index: 1;
    width: ${width}px;
    background: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : "#fff"};
    color: #000;
    font: 700 1.125em/ 3 trebuchet ms, sans-serif;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    &:before,
    &:after {
      --i: var(--p);
      --j: calc(1 - var(--i));
      position: absolute;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: calc(var(--j) * (100% - ${diagonal}px));
      width: ${diagonal}px;
      transform-origin: calc(var(--j) * 100%) calc(var(--i) * 100%);
      transform: rotate(${maskRotateDeg}deg)
        translate(calc(var(--q) * (1 - 2 * var(--i)) * -100%));
      box-shadow: 0 0 0 1px currentcolor;
      background: currentcolor;
      color: ${({ hoverBack }) => (hoverBack ? hoverBack : "#ef4654")};
      transition: transform 0.5s ease-in-out;
      content: "";
    }
    &:after {
      --i: var(--q);
    }
    &:hover,
    &:focus {
      --p: 1;
    }
  `;
  return (
    <>
      <Mask
        hoverBack={hoverBack}
        onClick={onClick}
        backgroundColor={background}
        ref={btnEle}
      >
        {children}
      </Mask>

      {/* <a className="react-hover-btn" id="react-hover-btn" href="#">
        buy tickets
      </a> */}
    </>
  );
}
