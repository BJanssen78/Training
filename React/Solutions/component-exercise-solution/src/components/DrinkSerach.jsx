import { useState } from "react";
import { AvailableDrinks } from "./utils/data";
import { DrinkItem } from "./DrinkItems";
import { InputDrink } from "./ui/InputDrink";

export const DrinkSearch = () => {
  const [searchField, setSearchField] = useState("test drink");

  return (
    <>
      <label htmlFor="input-Drink">type your drink below</label>
      <InputDrink />
      <p>{searchField}</p>
      <DrinkItem drinks={AvailableDrinks} />
    </>
  );
};
