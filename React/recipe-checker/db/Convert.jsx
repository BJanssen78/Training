import { recipes } from "./dbRecipes";

const recipeArrayResults = [];
// const recipeArrayResults2 = [];

export const ConvertDb = () => {
  for (let c in recipes.hits) recipeArrayResults.push(recipes.hits[c].recipe);

  // recipeArrayResults.forEach((item) => {
  //   recipeArrayResults2.push(item.toLowerCase());
  // });

  // console.log(recipeArrayResults);
  // console.log(recipeArrayResults2);
  console.log(recipes.hits[c]);
  return <></>;
};
