import "./Header.css";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <>
      <header className="Header">
        <a href="#" title="web title" className="header-title-link">
          <h1 className="Main-Title">Brown Cafe</h1>
        </a>
        <Navigation />
      </header>
    </>
  );
};
