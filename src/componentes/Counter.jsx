import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>El contador esta en: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar Contador</button>
      <button onClick={() => setCount(count - 1)} disabled={count <= 0}>
        Decrementar Contador
      </button>
    </div>
  );
};
