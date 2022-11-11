import "./styles.css";
import React from "react";

export default function App() {
  const [show, setShow] = React.useState(true);

  return (
    <>
      <button onclick={() => setShow(!show)}>
        {show ? "Hide Element Below" : "show Element Below"}
      </button>

      {show && <div>Toggle challenge</div>}
    </>
  );
}
