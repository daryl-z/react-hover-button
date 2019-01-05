import React, { useRef, useEffect, useState } from "react";
import "./index.css";

export default function HoverButtonDiagonal({
  color = "#000",
  width = "12em",
  height,
  background,
  maskColor,
  children = "Hover me",
  onClick,
  style,
  maskStyle,
  disabled = false, // TODO
  ...params
}) {
  const btnEle = useRef(null);
  const beforeBtn = useRef(null);
  const afterBtn = useRef(null);
  const [diagonal, setDiagonal] = useState(0);
  const [maskRotateDeg, setDeg] = useState(0);

  // didMount
  useEffect(_ => {
    const { offsetHeight, offsetWidth } = btnEle.current;
    setDiagonal(
      Math.sqrt(Math.pow(offsetWidth, 2) + Math.pow(offsetHeight, 2))
    );
    setDeg(Math.atan(offsetHeight / offsetWidth) * (-180 / Math.PI));
  }, []);

  // didUpdate
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      const commonStyleMap = {
        "--maskRotateDeg": maskRotateDeg + "deg",
        "--diagonal": diagonal + "px"
      };
      for (let prop in commonStyleMap) {
        if (commonStyleMap.hasOwnProperty(prop)) {
          btnEle.current.style.setProperty(prop, commonStyleMap[prop]);
        }
      }
    }
  });

  const pseudoColor = { color: maskColor ? maskColor : "#fff" };
  const judgeCSSValue = value =>
    typeof value === "number" ? `${value}px` : value;

  return (
    <>
      <a
        className="hover-button-diagonal"
        style={{
          background: background ? backgroundColor : "#fff",
          height: judgeCSSValue(height),
          lineHeight: judgeCSSValue(height),
          width: judgeCSSValue(width),
          color: color,
          ...style
        }}
        href="#"
        ref={btnEle}
        onClick={onClick}
        disabled={disabled}
        {...params}
      >
        <div
          className="btn-before"
          style={{ ...pseudoColor, ...maskStyle }}
          ref={beforeBtn}
        />
        {children}
        <div
          className="btn-after"
          style={{ ...pseudoColor, ...maskStyle }}
          ref={afterBtn}
        />
      </a>
    </>
  );
}
