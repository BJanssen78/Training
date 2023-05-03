import {
  Card,
  Image,
  CardBody,
  Heading,
  Text,
  Tag,
  HStack,
  Button,
  Divider,
  Link,
} from "@chakra-ui/react";

export const ProductCard = ({ product, back }) => {
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
              onClick={() => back()}
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
                margin={"15px"}
                borderRadius={"15px"}
                onClick={<ProductCard product={product.id} />}
              >
                <Image
                  alt={product.imgalt}
                  src={product.imgsrc}
                  borderRadius={"15px"}
                  border={"1px"}
                />
                <Divider
                  orientation="horizontal"
                  padding={"5px"}
                  borderColor={"black"}
                  opacity={"0.4"}
                />
                <Heading>{product.name}</Heading>
                <Text>Made by : {product.brand}</Text>
                <label>Discription :</label>
                <Text>{product.long_discription}</Text>
                <Link href={product.sourceLink} isExternal paddingTop={"10px"}>
                  <Tag borderBottom={"1px"} borderRight={"1px"}>
                    Source : {product.source}
                  </Tag>
                </Link>
              </CardBody>
            </Card>
          </>
        ))}
      </HStack>
    </>
  );
};
