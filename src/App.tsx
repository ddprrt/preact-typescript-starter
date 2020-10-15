import { render } from "preact";

function App() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

const el = jsx("div", { class: "Hello" });

const node = document.querySelector("#app");
if (node) {
  render(<App />, node);
}

export default {};
