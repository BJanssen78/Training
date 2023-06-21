import { memo } from "react";

export const AnswerMemo = memo(function Answer({ calculateFunction, number }) {
  const answer = calculateFunction(number);
  return (
    <p>
      Fibonacci number {number} is {answer}
    </p>
  );
});
