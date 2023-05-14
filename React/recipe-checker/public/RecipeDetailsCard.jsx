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
  Tag,
  Button,
} from "@chakra-ui/react";

export const RecipeDetailCard = ({ recipes, reset }) => {
  const nutrients = [];
  const extraxtNutrients = () => {
    for (let i in recipes[0].totalNutrients)
      nutrients.push(recipes[0].totalNutrients[i]);
  };
  extraxtNutrients();
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
                <Button
                  position={"absolute"}
                  right={"10px"}
                  top={"160px"}
                  bg={"blue.100"}
                  _hover={{ backgroundColor: "blue.500" }}
                  onClick={reset}
                >
                  Back
                </Button>
                <Text paddingTop={"15px"}>{item.mealType}</Text>
                <CardHeader fontSize={"1.2em"} fontWeight={"bold"}>
                  {item.label}
                </CardHeader>
                <Grid templateColumns={"repeat(2, 1fr)"}>
                  <Stack>
                    <Text>Total cooking time: {item.totalTime} minutes</Text>
                    <Text>Servings: {item.yield}</Text>
                    <Text fontWeight={"bold"}>Ingredients:</Text>
                    <List padding={"0 0 15px 15px "} minWidth={"200px"}>
                      {item.ingredientLines.map((ingredients) => {
                        return (
                          <ListItem key={ingredients}>{ingredients}</ListItem>
                        );
                      })}
                    </List>
                  </Stack>
                  <Stack
                    wrap={"wrap"}
                    flexDir={"row"}
                    gap={2}
                    paddingBottom={"15px"}
                  >
                    <Text width={"100%"}>Health labels:</Text>
                    {item.healthLabels.map((healthLabel) => {
                      return (
                        <Tag
                          key={healthLabel}
                          width={"max-content"}
                          height={"max-content"}
                          bg={"purple.100"}
                        >
                          {healthLabel}
                        </Tag>
                      );
                    })}
                    <Text width={"100%"}>Diet:</Text>
                    {item.dietLabels.map((dietLabel) => {
                      return (
                        <Tag
                          key={dietLabel}
                          width={"max-content"}
                          height={"max-content"}
                          bg={"green.100"}
                        >
                          {dietLabel}
                        </Tag>
                      );
                    })}
                    <Text width={"100%"}>Cautions:</Text>
                    {item.cautions.map((caution) => {
                      return (
                        <Tag
                          key={caution}
                          width={"max-content"}
                          height={"max-content"}
                          bg={"pink.100"}
                        >
                          {caution}
                        </Tag>
                      );
                    })}
                    <Text width={"100%"}>Nutrients:</Text>
                    <Text>
                      Calories: {Math.trunc(nutrients[0].quantity)}{" "}
                      {nutrients[0].unit}
                    </Text>
                    <Text>
                      Fat: {Math.trunc(nutrients[1].quantity)}{" "}
                      {nutrients[1].unit}
                    </Text>
                    <Text>
                      Carbs: {Math.trunc(nutrients[6].quantity)}{" "}
                      {nutrients[6].unit}
                    </Text>
                    <Text>
                      Protein: {Math.trunc(nutrients[11].quantity)}{" "}
                      {nutrients[11].unit}
                    </Text>
                  </Stack>
                </Grid>
              </Stack>
            </CardBody>
          </Card>
        </>
      ))}
    </Flex>
  );
};
