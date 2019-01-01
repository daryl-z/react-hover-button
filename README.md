<center>
<img src="./assets/btn.gif">
</center>

<center style="color:#4d4d4d">A Button Component of React.Inspired By <a href="https://codepen.io/thebabydino/pen/vQNVQe/">Hover/focus effects</a></center>

## Get Started

### install

```bash
npm i react-hover-button
```

### usage

```jsx
import React from "react";
import { render } from "react-dom";
import AnimationButton from "react-hover-button";

function ButtonDemoList() {
  return (
    <div>
      <AnimationButton width={300} color="#333">
        Buy Ticket
      </AnimationButton>
    </div>
  );
}
render(<ButtonDemoList />, document.getElementById("root"));
```

#### Props List

```
  color = "#000",
  width = "12em",
  height,
  background,
  hoverBackColor,
  children = "Hover me",
  onClick
```
