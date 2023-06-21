import { useState, useCallback } from "react";
import { AnswerMemo } from "./Answer";

const App = () => {
  const fib = (n) => (n <= 2 ? 1 : fib(n - 1) + fib(n - 2));
  const [count, rerender] = useState(0);
  const [number, setNumber] = useState(25);
  const fibCallback = useCallback(fib, []);
  return (
    <div className="App">
      <h1>React Hooks Exercise Starter</h1>
      <AnswerMemo calculateFunction={fibCallback} number={number} />
      <button onClick={() => setNumber(number + 1)}>
        Increase the number ({number})
      </button>
      <button onClick={() => rerender(count + 1)}>
        Force rerender (count: {count})
      </button>
    </div>
  );
};

export default App;
