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
        transform: `rotate(${maskRotateDeg}deg) translate(calc(var(--q) * (1 - 2 * var(--i)) * -100%))`,
        width: `${diagonal}px`,
        left: `calc(var(--j) * (100% - ${diagonal}px))`
      };
      [beforeBtn, afterBtn].forEach(btn => {
        for (let prop in commonStyleMap) {
          if (commonStyleMap.hasOwnProperty(prop)) {
            btn.current.style.setProperty(prop, commonStyleMap[prop]);
          }
        }
      });
    }
  });

  const pseudoColor = { color: maskColor ? maskColor : "#fff" };

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
          style={{ ...pseudoColor }}
          ref={beforeBtn}
        />
        {children}
        <div className="btn-after" style={{ ...pseudoColor }} ref={afterBtn} />
      </a>
    </>
  );
}
