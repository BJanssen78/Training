import { useState } from "react";
import { Heading } from "@chakra-ui/react";
import { products } from "../resources/db";
import { ProductList } from "../public/ProductList";
import { ProductCard } from "../public/ProductCard";

function App() {
  const [selectProductCard, setSelectProductCard] = useState();

  const userSelect = function (id) {
    const selectedProductcard = products.filter((card) => card.id === id);
    setSelectProductCard(selectedProductcard);
  };

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
      {/* <ProductList products={products} userSelect={userSelect} /> */}
      {selectProductCard ? (
        <ProductCard product={selectProductCard} />
      ) : (
        <ProductList products={products} userSelect={userSelect} />
      )}
    </>
  );
}

export default App;
