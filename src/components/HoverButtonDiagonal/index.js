import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import getCssValue from "../../utils/getCssValue";
import "./index.css";

function HoverButtonDiagonal({
  color = "#000",
  width = "12em",
  height,
  background,
  maskColor = "#ef4654",
  children = "Hover me",
  onClick,
  style,
  maskStyle,
  disabled = false,
  loading = false,
  ...params
}) {
  const btnEle = useRef(null);
  const beforeBtn = useRef(null);
  const afterBtn = useRef(null);
  const [diagonal, setDiagonal] = useState(0);
  const [maskRotateDeg, setDeg] = useState(0);

  // didMount
  useLayoutEffect(_ => {
    const { offsetHeight, offsetWidth } = btnEle.current;
    setDiagonal(
      Math.sqrt(Math.pow(offsetWidth, 2) + Math.pow(offsetHeight, 2))
    );

    setDeg(Math.atan(offsetHeight / offsetWidth) * (-180 / Math.PI));
  }, []);

  // didUpdate
  const mounted = useRef();
  useLayoutEffect(() => {
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

  const pseudoColor = { color: maskColor ? maskColor : "#ef4654" };

  return (
    <a
      className={`hover-button-diagonal ${
        loading && !disabled ? "button--loading" : ""
      } ${disabled ? "not-active" : ""}`}
      style={{
        background: background ? backgroundColor : "#fff",
        height: getCssValue(height),
        lineHeight: getCssValue(height),
        width: getCssValue(width),
        color: color,
        ...style
      }}
      href="javascript:;"
      ref={btnEle}
      onClick={onClick}
      {...params}
    >
      <div
        className="btn-before"
        style={{ ...pseudoColor, ...maskStyle }}
        ref={beforeBtn}
      />
      <span>{children}</span>
      <div
        className="btn-after"
        style={{ ...pseudoColor, ...maskStyle }}
        ref={afterBtn}
      />
    </a>
  );
}

export default React.memo(HoverButtonDiagonal);
