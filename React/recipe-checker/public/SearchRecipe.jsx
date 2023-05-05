import { Container, Input } from "@chakra-ui/react";

export const SearchRecipe = ({ recipe, userSearch }) => {
  return (
    <>
      <Container>
        <Input
          type="text"
          placeholder="type your search"
          onChange={(e) => userSearch(e.target.value.toLowerCase())}
        ></Input>
      </Container>
    </>
  );
};
