import {
  Card,
  Image,
  CardBody,
  Heading,
  Text,
  Tag,
  HStack,
} from "@chakra-ui/react";

export const ProductList = ({ products, userSelect }) => {
  // const maxWith = 300;
  return (
    <>
      <HStack
        spacing={"15px"}
        flexDir={"row"}
        flexWrap={"wrap"}
        m={"15px"}
        justifyContent={"center"}
      >
        {products.map((item) => (
          <>
            <Card key={item.id} bg={"lightblue"} maxH={"500px"} maxW={"300px"}>
              <CardBody
                cursor={"pointer"}
                bg={"white"}
                maxW={"280px"}
                margin={"15px"}
                onClick={() => userSelect(item.id)}
              >
                <Image alt={item.imgalt} src={item.imgsrc} />
                <Heading>{item.name}</Heading>
                <Text>Made by : {item.brand}</Text>
                <label>Discription :</label>
                <Text noOfLines={(1, 2, 3, 4, 5, 6)}>
                  {item.short_discription}
                </Text>
                <Tag>Source : {item.source}</Tag>
              </CardBody>
            </Card>
          </>
        ))}
      </HStack>
    </>
  );
};
