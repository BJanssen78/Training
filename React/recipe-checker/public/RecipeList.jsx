import {
  Card,
  CardBody,
  CardHeader,
  Text,
  Image,
  Flex,
  Tag,
  Stack,
} from "@chakra-ui/react";

export const RecipeList = ({ recipes, userSelect }) => {
  return (
    <Flex
      flexDir={"row"}
      flexWrap={"wrap"}
      margin={"15px"}
      justifyContent={"center"}
      alignContent={"center"}
    >
      {recipes.map((item) => (
        <>
          <Card
            width={"20em"}
            height={"500px"}
            margin={"10px"}
            shadow={"5px 5px"}
            borderRadius={"25px"}
            key={item.label}
            align={"center"}
            cursor={"pointer"}
            _hover={{ shadow: "-5px -5px" }}
            onClick={() => userSelect(item.label)}
          >
            <CardBody padding={"0"}>
              <Image
                src={item.image}
                alt={item.label}
                fallbackSrc="https://via.placeholder.com/150"
                borderRadius={"25px 25px 0 0"}
                padding={"0"}
                width={"100%"}
                height={"150px"}
                objectFit={"cover"}
              />
              <Stack align={"center"}>
                <Text align={"center"}>{item.mealType}</Text>
                <CardHeader fontSize={"1.2em"} fontWeight={"bold"}>
                  {item.label}
                </CardHeader>
                <Tag bg={"purple.100"}>{item.healthLabels[2]}</Tag>
                <Tag bg={"lightgreen"}>{item.dietLabels}</Tag>
                <Text>Dish: {item.dishType}</Text>
                <Text>Cautions:</Text>
                <Tag bg={"lightpink"}>{item.cautions[0]}</Tag>
                <Tag bg={"lightpink"}>{item.cautions[1]}</Tag>
              </Stack>
            </CardBody>
          </Card>
        </>
      ))}
    </Flex>
  );
};
