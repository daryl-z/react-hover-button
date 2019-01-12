import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import getCssValue from "../../utils/getCssValue";
import "./index.css";

function HoverButtonPosition({
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
  return (
    <a href="javascript:;" className="react-hover-button-position">
      {children}
      <span />
    </a>
  );
}

export default React.memo(HoverButtonPosition);
