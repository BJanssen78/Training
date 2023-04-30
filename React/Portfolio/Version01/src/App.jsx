import { Heading } from "@chakra-ui/react";
import { products } from "../resources/db";
import { ProductCard } from "../public/ProductCard";

function App() {
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
      <ProductCard products={products} />
    </>
  );
}

export default App;
