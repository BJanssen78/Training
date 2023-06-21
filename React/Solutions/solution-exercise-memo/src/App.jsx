import { useState, useMemo } from "react";

const fib = (n) => (n <= 2 ? 1 : fib(n - 1) + fib(n - 2));

const App = () => {
  const [count, rerender] = useState(0);
  const [number, setNumber] = useState(25);
  const answer = useMemo(() => fib(number), [number]);
  return (
    <div className="App">
      <h1>React Hooks Exercise Starter</h1>
      <p>
        Fibonacci number {number} is {answer}
      </p>
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
