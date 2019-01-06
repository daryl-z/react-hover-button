import React, { useEffect, useRef, useState } from "react";
import { render } from "react-dom";
import { HoverButtonDiagonal } from "../lib/index";
// import { HoverButtonDiagonal } from "./index";
import "./styles.css";

function ButtonDemoList() {
  const hoverBtn = useRef(null);
  const [loading, switchLoading] = useState(false);
  useEffect(_ => {
    hoverBtn.current.addEventListener(
      "click",
      _ => switchLoading(prev => !prev),
      false
    );
  }, []);

  return (
    <div ref={hoverBtn}>
      <HoverButtonDiagonal width={300} color="#333" loading={loading}>
        Hover me!
      </HoverButtonDiagonal>
    </div>
  );
}
render(<ButtonDemoList />, document.getElementById("root"));
