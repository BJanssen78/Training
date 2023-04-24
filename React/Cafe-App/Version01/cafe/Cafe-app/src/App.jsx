// import { useState } from "react";
import "./reset.css";
import "./App.css";
import { AvailableDrinks } from "./Resources/data";
import { Header } from "./Components/Header";
import { Button } from "./Components/ui/Buttons";

function App() {
  const greeting = "Welcome to our Brown Cafe";

  return (
    <>
      <Header />
      <h2>{greeting}</h2>
      <Button text={AvailableDrinks.name} />
      {/* <p> {10 * 10}</p> */}
    </>
  );
}

export default App;
