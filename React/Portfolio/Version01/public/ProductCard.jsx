import {
  Card,
  Image,
  CardBody,
  Heading,
  Text,
  Tag,
  HStack,
  Button,
} from "@chakra-ui/react";

export const ProductCard = ({ product }) => {
  return (
    <>
      <HStack
        spacing={"15px"}
        flexDir={"row"}
        flexWrap={"wrap"}
        m={"15px"}
        justifyContent={"center"}
      >
        {product.map((product) => (
          <>
            <Button
              float={"right"}
              position={"absolute"}
              zIndex={1}
              top={100}
              right={20}
              bg={"lightblue"}
            >
              Back
            </Button>
            <Card
              key={product.id}
              bg={"lightblue"}
              maxH={"500vh"}
              maxW={"50vw"}
            >
              <CardBody
                bg={"white"}
                // maxW={"280px"}
                margin={"15px"}
                onClick={<ProductCard product={product.id} />}
              >
                <Image alt={product.imgalt} src={product.imgsrc} />
                <Heading>{product.name}</Heading>
                <Text>Made by : {product.brand}</Text>
                <label>Discription :</label>
                <Text>{product.long_discription}</Text>
                <Tag>Source : {product.source}</Tag>
              </CardBody>
            </Card>
          </>
        ))}
      </HStack>
    </>
  );
};
