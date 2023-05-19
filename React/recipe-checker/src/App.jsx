import { useState } from "react";
import { recipes } from "../db/dbRecipes";
import { RecipeList } from "../public/RecipeList";
import { Heading } from "@chakra-ui/react";
import { SearchRecipe } from "../public/SearchRecipe";
import { RecipeDetailCard } from "../public/RecipeDetailsCard";

function App() {
  // const [selectRecipe, setSelectRecipe] = useState();
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

  // const userSearch = (label) => {
  //   const filterLabel = recipeArrayResults.filter((recipe) =>
  //     recipe.label.toLowerCase().includes(label)
  //   );
  //   return setRecipeList(filterLabel);
  // };

  // const userSearch = (searchTerm) => {
  //   const lowerCaseSearchTerm = searchTerm.toLowerCase();
  //   const filterLabel = recipeArrayResults.filter((recipe) => {
  //     for (let key in recipe) {
  //       if (
  //         typeof recipe[key] === "string" &&
  //         recipe[key].toLowerCase().includes(lowerCaseSearchTerm)
  //       ) {
  //         console.log([key]);
  //         return true;
  //       }
  //     }
  //     return false;
  //   });
  //   setRecipeList(filterLabel);
  // };

  //1. zoeken in de eerste laag van de array
  //2. als entry een string is of een nummer, zoek de vergelijking, indien match, dan true, anders false.
  //3. als de entry een array is, doorzoek de array naar vergelijking, indien match, dan true, anders false.

  const userSearch2 = (searchTerm2) => {
    const filterSearchTerm = recipeArrayResults.filter((recipe) => {
      for (let key in recipe) {
        if (Array.isArray(key)) {
          for (let keys in key) {
            if (
              (typeof key[keys] === "string" || typeof key[keys] === Number) &&
              key[keys].toLowerCase().includes(searchTerm2)
            ) {
              //waarde waar
              console.log(keys);
              return true;
            }
          }
          if (
            (typeof recipe[key] === "string" ||
              typeof recipe[key] === Number) &&
            recipe[key].toLowerCase().includes(searchTerm2)
          ) {
            console.log(key);
            return true;
          } else {
            return false;
          }
        }
      }
    });
    setRecipeList(filterSearchTerm);
  };

  return (
    <>
      <Heading textAlign={"center"} color={"whiteAlpha.900"}>
        Winc Recipe Checker
      </Heading>
      <SearchRecipe userSearch={userSearch2} />

      {userSelectRecipe ? (
        <RecipeDetailCard recipes={userSelectRecipe} reset={resetUserSelect} />
      ) : (
        console.log("Hallo")
      )}
      {recipeList ? (
        <RecipeList recipes={recipeList} />
      ) : (
        <RecipeList recipes={recipeArrayResults} userSelect={userSelect} />
      )}

      {/* <RecipeDetailCard recipes={userSelectRecipe} /> */}
    </>
  );
}

export default App;
