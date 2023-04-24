import { useState } from "react";
import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkItem } from "./components/DrinkItems";
import { DrinkSearch } from "./components/DrinkSerach";

export const App = () => {
  const greeting = "Welcome to our cafe!";
  const [userDrink, setUserDrink] = useState(coffee);

  return (
    // <div className="app">
    //   {userDrink ? (
    //     <DrinkChoice drink={userDrink} />
    //   ) : (
    //     <>
    //       <h1>{greeting}</h1>

    //       <DrinkSearch />
    //       <DrinkItem />
    //     </>
    //   )}
    // </div>

    <div>
      <InputDrink />
      {userDrink ? null : <h1>{greeting}</h1>}
      {userDrink ? null : (
        <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
      )}
      {userDrink ? <DrinkChoice drink={userDrink} /> : "Please select a drink"}
    </div>
  );
};
