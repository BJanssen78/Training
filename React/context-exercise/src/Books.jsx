import { useContext } from "react";
import { LibaryContext } from "./Library";

export const Books = ({}) => {
  const { books } = useContext(LibaryContext);
  return (
    <>
      <h2>Books ({amount}):</h2>
      {children}
    </>
  );
};
