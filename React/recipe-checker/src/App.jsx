import { useState } from "react";
import { recipes } from "../db/dbRecipes";
import { RecipeList } from "../public/RecipeList";
import { Heading } from "@chakra-ui/react";
import { SearchRecipe } from "../public/SearchRecipe";
import { ConvertDb } from "../db/Convert";

function App() {
  const [selectRecipe, setSelectRecipe] = useState();
  const [recipeList, setRecipeList] = useState(ConvertDb);

  ConvertDb();
  // const setRecipeDB = function () => {
  //   for (let i in recipes.hits) recipeList.push(recipes.hits[i].recipe);
  // };

  const userSelectRecipe = function (label) {
    const userSelectedRecipe = recipes.filter(
      (recipe) => recipe.label === label
    );
    setSelectRecipe(userSelectedRecipe);
  };
  const userSearch = (label) => {
    const filterLabel = recipeList.filter((recipe) =>
      recipe.label.includes(label)
    );
    setRecipeList(filterLabel);
    // console.log(label);
    console.log(recipeList);
  };
  return (
    <>
      <Heading textAlign={"center"} color={"whiteAlpha.900"}>
        Winc Recipe Checker
      </Heading>
      <SearchRecipe userSearch={userSearch} />
      <RecipeList recipes={recipeList} userselect={userSelectRecipe} />
    </>
  );
}

export default App;
