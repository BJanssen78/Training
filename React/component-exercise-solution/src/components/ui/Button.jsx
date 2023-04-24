import "./Button.css";

export const Button = ({ text }) => (
  <button className="button" value={text}>
    {text}
  </button>
);
