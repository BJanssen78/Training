import { Container, Input } from "@chakra-ui/react";

export const SearchRecipe = ({ userSearch }) => {
  return (
    <>
      <Container>
        <Input
          bg={"whiteAlpha.800"}
          m={"25px auto"}
          type="text"
          placeholder="type your search"
          onChange={(e) => userSearch(e.target.value.toLowerCase())}
        ></Input>
      </Container>
    </>
  );
};
