import React, { Component } from "react";
import styled from "styled-components";

export default function AnimationButton({
  color,
  background,
  hoverBackColor,
  children = "Hover me",
  onClick
}) {
  const Mask = styled.a`
    --p: 0;
    --q: calc(1 - var(--p));
    overflow: hidden;
    position: relative;
    display: block;
    z-index: 1;
    width: 12em;
    background: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : "#444"};
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
      left: calc(var(--j) * (100% - 12.36932em));
      width: 12.36932em;
      transform-origin: calc(var(--j) * 100%) calc(var(--i) * 100%);
      transform: rotate(-14.03624deg)
        translate(calc(var(--q) * (1 - 2 * var(--i)) * -100%));
      box-shadow: 0 0 0 1px currentcolor;
      background: currentcolor;
      color: ${({ hoverBackColor }) =>
        hoverBackColor ? hoverBackColor : "#ef4654"};
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
        hoverBackColor={hoverBackColor}
        onClick={onClick}
        backgroundColor={background}
      >
        {children}
      </Mask>
    </>
  );
}
