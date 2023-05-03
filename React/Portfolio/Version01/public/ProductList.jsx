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
  return (
    <>
      <HStack
        spacing={"20px"}
        flexDir={"row"}
        flexWrap={"wrap"}
        m={"15px"}
        justifyContent={"center"}
      >
        {products.map((item) => (
          <>
            <Card
              key={item.id}
              bg={"lightblue"}
              maxW={"40vw"}
              shadow={"5px 5px"}
              m={"15px"}
            >
              <CardBody
                borderRadius={"15px"}
                cursor={"pointer"}
                bg={"white"}
                maxW={"35vw"}
                margin={"15px"}
                onClick={() => userSelect(item.id)}
              >
                <Image
                  alt={item.imgalt}
                  src={item.imgsrc}
                  borderRadius={"15px"}
                  border={"1px"}
                />
                <Heading key={item.id}>{item.name}</Heading>
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
