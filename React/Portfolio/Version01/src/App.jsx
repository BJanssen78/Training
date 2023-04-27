import { Center, Heading } from "@chakra-ui/react";
import { productCard } from "../public/ProductCard";
export const App = () => {
  return (
    <>
      <Heading
        color={"lightblue"}
        bg={"yellow"}
        fontSize={"3rem"}
        textAlign={"center"}
      >
        Dit is de titel van de pagina
      </Heading>
      <h1>Vite + React</h1>
      <productCard />
    </>
  );
};

export default App;
