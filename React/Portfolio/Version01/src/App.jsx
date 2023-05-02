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

  const backButton = function () {
    setSelectProductCard();
    console.log(JSON.stringify(selectProductCard));
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
        <ProductCard product={selectProductCard} back={backButton} />
      ) : (
        <ProductList products={products} userSelect={userSelect} />
      )}
    </>
  );
}

export default App;
