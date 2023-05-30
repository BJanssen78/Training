import { useState } from "react";
import { recipes } from "../db/dbRecipes";
import { RecipeList } from "../public/RecipeList";
import { Heading } from "@chakra-ui/react";
import { SearchRecipe } from "../public/SearchRecipe";
import { RecipeDetailCard } from "../public/RecipeDetailsCard";

function App() {
  const [recipeList, setRecipeList] = useState();
  const [userSelectRecipe, setUserSelectRecipe] = useState();
  const recipeArrayResults = [];

  const recipesDb = () => {
    for (let c in recipes.hits) recipeArrayResults.push(recipes.hits[c].recipe);
  };
  recipesDb();

  const userSelect = (label) => {
    const filterRecipe = recipeArrayResults.filter(
      (recipe) => recipe.label === label
    );
    setUserSelectRecipe(filterRecipe);
  };

  const resetUserSelect = () => {
    setUserSelectRecipe();
  };

  const userSearch3 = (searchTerm3) => {
    const arrayFirstLvl = recipeArrayResults.filter((recipe) => {
      for (let key in recipe) {
        if (
          typeof recipe[key] === "string" ||
          typeof recipe[key] === "number"
        ) {
          if (
            recipe[key]
              .toString()
              .toLowerCase()
              .includes(searchTerm3.toLowerCase())
          ) {
            // console.log("True ");
            return true;
          }
        } else if (Array.isArray(recipe[key])) {
          for (let item of recipe[key]) {
            if (
              (typeof item === "string" || typeof item === "number") &&
              item.toString().toLowerCase().includes(searchTerm3.toLowerCase())
            ) {
              // console.log("True ");
              return true;
            }
          }
        }
      }
      return false;
    });

    setRecipeList(arrayFirstLvl);
  };

  return (
    <>
      <Heading textAlign={"center"} color={"whiteAlpha.900"}>
        Winc Recipe Checker
      </Heading>
      <SearchRecipe userSearch={userSearch3} />

      {userSelectRecipe ? (
        <RecipeDetailCard recipes={userSelectRecipe} reset={resetUserSelect} />
      ) : recipeList ? (
        <RecipeList recipes={recipeList} userSelect={userSelect} />
      ) : (
        <RecipeList recipes={recipeArrayResults} userSelect={userSelect} />
      )}
    </>
  );
}

export default App;
