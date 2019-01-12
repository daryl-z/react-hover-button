import React, { useEffect, useRef, useState } from "react";
import { render } from "react-dom";
// import { HoverButtonDiagonal } from "../../lib/index";
import { HoverButtonDiagonal, HoverButtonPosition } from "../../src/index";
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
    return () => {
      hoverBtn.current.removeEventListener(
        "click",
        _ => switchLoading(prev => !prev),
        false
      );
    };
  }, []);

  return (
    <>
      <div ref={hoverBtn}>
        <HoverButtonDiagonal
          width={300}
          color="#333"
          maskColor="#00a3fe"
          loading={loading}
          disabled={false}
        >
          Confirm
        </HoverButtonDiagonal>
      </div>
      <div style={{ marginTop: 30 }}>
        <HoverButtonPosition loading={loading} disabled={false}>
          Delete
        </HoverButtonPosition>
      </div>
    </>
  );
}
render(<ButtonDemoList />, document.getElementById("root"));
