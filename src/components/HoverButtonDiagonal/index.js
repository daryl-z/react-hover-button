import React, { useRef, useEffect, useState } from "react";
import "./index.css";

export default function HoverButtonDiagonal({
  color = "#000",
  width = "12em",
  height,
  background,
  maskColor,
  children = "Hover me",
  onClick
}) {
  const btnEle = useRef(null);
  const beforeBtn = useRef(null);
  const afterBtn = useRef(null);
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

  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      beforeBtn.current.style.setProperty(
        "transform",
        `rotate(${maskRotateDeg}deg) translate(calc(var(--q) * (1 - 2 * var(--i)) * -100%))`
      );
      afterBtn.current.style.setProperty(
        "transform",
        `rotate(${maskRotateDeg}deg) translate(calc(var(--q) * (1 - 2 * var(--i)) * -100%))`
      );

      beforeBtn.current.style.setProperty("width", `${diagonal}px`);
      afterBtn.current.style.setProperty("width", `${diagonal}px`);
      beforeBtn.current.style.setProperty(
        "left",
        `calc(var(--j) * (100% - ${diagonal}px))`
      );
      afterBtn.current.style.setProperty(
        "left",
        `calc(var(--j) * (100% - ${diagonal}px))`
      );
    }
  });

  // 在css中定义变量 然后用js控制那些需要用react控制的变量
  return (
    <>
      <a
        className="hover-button-diagonal"
        style={{
          background: background ? backgroundColor : "#fff",
          height: typeof height === "number" ? `${height}px` : height,
          lineHeight: typeof height === "number" ? `${height}px` : height,
          width: typeof width === "number" ? `${width}px` : width,
          color: color
        }}
        href="#"
        ref={btnEle}
        onClick={onClick}
      >
        <div
          className="btn-before"
          style={{ color: maskColor ? maskColor : "#fff" }}
          ref={beforeBtn}
        />
        {children}
        <div
          className="btn-after"
          style={{ color: maskColor ? maskColor : "#fff" }}
          ref={afterBtn}
        />
      </a>
    </>
  );
}
