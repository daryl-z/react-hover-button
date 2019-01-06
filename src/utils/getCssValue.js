const getCssValue = value => (typeof value === "number" ? `${value}px` : value);

export default getCssValue;
