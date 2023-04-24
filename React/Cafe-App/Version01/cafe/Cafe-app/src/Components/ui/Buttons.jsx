import { AvailableDrinks } from "../../Resources/data";
import "./Buttons.css";

export const Button = () =>
  AvailableDrinks.forEach(function (DrinkName) {
    <button className="button" type="button">
      {DrinkName.name}
    </button>;
  });
  // <button className="button" value={text}>
  //   {text}
  // </button>
