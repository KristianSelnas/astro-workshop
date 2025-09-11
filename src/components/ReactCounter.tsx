import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      Du har trykket <span id="count">{count}</span> gang{count !== 1 && "er"}.
      <div className="kls-button-group">
        <button className="kls-button" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button className="kls-button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </>
  );
}
