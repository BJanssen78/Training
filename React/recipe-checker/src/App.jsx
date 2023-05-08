import { useState } from "react";
import { recipes } from "../db/dbRecipes";
import { RecipeList } from "../public/RecipeList";
import { Heading } from "@chakra-ui/react";
import { SearchRecipe } from "../public/SearchRecipe";

function App() {
  // const [selectRecipe, setSelectRecipe] = useState();
  const [recipeList, setRecipeList] = useState();
  const recipeArrayResults = [];

  let recipesDb = () => {
    for (let c in recipes.hits) recipeArrayResults.push(recipes.hits[c].recipe);
  };
  recipesDb();
  // const userSelectRecipe = function (label) {
  //   const userSelectedRecipe = recipes.filter(
  //     (recipe) => recipe.label === label
  //   );
  //   setSelectRecipe(userSelectedRecipe);
  // };
  const userSearch = (label) => {
    const filterLabel = recipeList.filter((recipe) =>
      recipe.label.includes(label)
    );
    setRecipeList(filterLabel);
    // console.log(recipeArrayResults);
  };

  return (
    <>
      <Heading textAlign={"center"} color={"whiteAlpha.900"}>
        Winc Recipe Checker
      </Heading>
      <SearchRecipe userSearch={userSearch} />
      <RecipeList recipes={recipeArrayResults} />
    </>
  );
}

export default App;
