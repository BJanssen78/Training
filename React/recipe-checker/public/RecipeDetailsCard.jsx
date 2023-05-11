import {
  Card,
  CardBody,
  CardHeader,
  Text,
  Image,
  Flex,
  Stack,
  ListItem,
  List,
  Grid,
} from "@chakra-ui/react";

export const RecipeDetailCard = ({ recipes, reset }) => {
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
            width={"80%"}
            // height={"500px"}
            margin={"10px"}
            shadow={"5px 5px"}
            borderRadius={"25px"}
            key={item.label}
            align={"left"}
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
              <Stack align={"left"} paddingLeft={"15px"}>
                <Text paddingTop={"15px"}>{item.mealType}</Text>
                <CardHeader fontSize={"1.2em"} fontWeight={"bold"}>
                  {item.label}
                </CardHeader>
                <Grid templateColumns={"repeat(2, 1fr)"}>
                  <Stack>
                    <Text>Total cooking time: {item.totalTime} minutes</Text>
                    <Text>Servings: {item.yield}</Text>
                    <Text fontWeight={"bold"}>Ingredients:</Text>
                    <Text width={"20%"} fontSize={"0.9em"}>
                      <List padding={"0 0 15px 15px "} minWidth={"200px"}>
                        {item.ingredientLines.map((ingredients) => {
                          return <ListItem>{ingredients}</ListItem>;
                        })}
                      </List>
                    </Text>
                  </Stack>
                </Grid>
                {/* <Tag bg={"purple.100"}>{item.healthLabels[2]}</Tag> */}
                {/* <Tag bg={"lightgreen"}>{item.dietLabels}</Tag> */}
                {/* <Text>Dish: {item.dishType}</Text> */}
                {/* <Text>Cautions:</Text> */}
                {/* <Tag bg={"lightpink"}>{item.cautions[0]}</Tag> */}
                {/* <Tag bg={"lightpink"}>{item.cautions[1]}</Tag> */}
              </Stack>
            </CardBody>
          </Card>
        </>
      ))}
    </Flex>
  );
};
