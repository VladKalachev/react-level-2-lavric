import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxs("div", { children: [
    "Hello React! ",
    count,
    " ",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setCount(count + 1), children: "1 +" })
  ] });
}
const app = /* @__PURE__ */ jsx(App, {});
export {
  app as default
};
