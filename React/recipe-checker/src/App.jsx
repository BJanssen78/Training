import { useState } from "react";
import { recipes } from "../db/dbRecipes";
import { RecipeList } from "../public/RecipeList";
import { Heading } from "@chakra-ui/react";
import { SearchRecipe } from "../public/SearchRecipe";

function App() {
  const [selectRecipe, setSelectRecipe] = useState();
  const [recipeList, setRecipeList] = useState(recipes.toLowerCase());
  // const breakpoints = {
  //   sm: "30em", // 480px
  //   md: "48em", // 768px
  //   lg: "62em", // 992px
  //   xl: "80em", // 1280px
  //   "2xl": "96em", // 1536px
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
  };
  return (
    <>
      <Heading textAlign={"center"} color={"whiteAlpha.900"}>
        Winc Recipe Checker
      </Heading>
      <SearchRecipe recipes={recipeList} userSearch={userSearch} />
      <RecipeList recipes={recipeList} userselect={userSelectRecipe} />
    </>
  );
}

export default App;
