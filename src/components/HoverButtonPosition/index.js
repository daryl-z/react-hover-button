import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import getCssValue from "../../utils/getCssValue";
import "./index.css";
import "../common/common.css";

function HoverButtonPosition({
  width,
  height,
  background,
  maskColor,
  children,
  onClick,
  style,
  maskStyle,
  disabled = false,
  loading = false,
  ...params
}) {
  const positionBtn = useRef(null);

  return (
    <a
      href="javascript:;"
      className={`react-hover-button-position ${
        loading && !disabled ? "button--loading" : ""
      } ${disabled ? "not-active" : ""}`}
      style={{
        background: background ? backgroundColor : "",
        height: getCssValue(height),
        lineHeight: getCssValue(height),
        width: getCssValue(width),
        ...style
      }}
      ref={positionBtn}
      onClick={onClick}
      {...params}
    >
      <span className="children">{children}</span>
      <span className="hover-mask" />
    </a>
  );
}

export default React.memo(HoverButtonPosition);
