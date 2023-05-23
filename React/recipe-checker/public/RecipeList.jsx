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
  const shortHealthLabelList = ["Vegetarian", "Vegan"];
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
            key={item.url}
            align={"center"}
            cursor={"pointer"}
            _hover={{ shadow: "-5px -5px" }}
            onClick={() => userSelect(item.label)}
          >
            <CardBody padding={"0"}>
              <Image
                key={item.image}
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
                <Text key={item.mealType} align={"center"}>
                  {item.mealType}
                </Text>
                <CardHeader
                  key={item.label}
                  fontSize={"1.2em"}
                  fontWeight={"bold"}
                >
                  {item.label}
                </CardHeader>

                {shortHealthLabelList.filter((v) => {
                  if (item.healthLabels.includes(v)) {
                    return console.log("match " + v);
                    // <Tag
                    //   key={v}
                    //   width={"max-content"}
                    //   height={"max-content"}
                    //   bg={"purple.100"}
                    // >
                    //   {v}
                    // </Tag>
                  } else {
                    console.log("no match");
                  }
                })}

                {/* {if (shortHealthLabelList.some(v => healthLabels.includes(v))){
                  return (
                    <Tag
                    key={item.healthLabels.indexOf(e) >= 0}
                    width={"max-content"}
                    height={"max-content"}
                    bg={"purple.100"}
                  >
                    {item.healthLabels.indexOf(e) >= 0}
                  </Tag>)
                }} */}
                {/* {shortHealthLabelList.some(function (v) {
                  console.log(v);
                  if (
                    shortHealthLabelList.some((v) =>
                      item.healthLabels.includes(v)
                    )
                  ) {
                    // console.log(shortHealthLabelList);
                    // console.log(
                    //   item.healthLabels.indexOf(v) >= 0 ||
                    //     item.healthLabels.indexOf(v) >= 1
                    // );
                    // console.log(item.healthLabels.indexOf("Vegetarian"));
                    console.log(item.healthLabels.indexOf("Vegan"));
                    console.log(v);
                    // console.log(item.healthLabels[v]);
                    // return (
                    <Tag
                      key={v}
                      width={"max-content"}
                      height={"max-content"}
                      bg={"purple.100"}
                    >
                      {v}
                    </Tag>;
                    // );
                  } else {
                    console.log("Waarom zie ik dit??????");
                  }
                })} */}

                {/* // {shortHealthLabelList.some((e) => {
                // //   return (
                // //     <Tag
                // //       key={item.healthLabels.indexOf(e) >= 0}
                // //       width={"max-content"}
                // //       height={"max-content"}
                // //       bg={"purple.100"}
                // //     >
                // //       {item.healthLabels.indexOf(e) >= 0}
                // //     </Tag>
                // //   );
                // // })}

                // // {item.healthLabels.map(function (e) {
                // //   // console.log(e);
                // //   if (item.healthLabels.includes(shortHealthLabelList)) {
                // //     return (
                // //       <Tag
                // //         key={e}
                // //         width={"max-content"}
                // //         height={"max-content"}
                // //         bg={"purple.100"}
                // //       >
                // //         {e}
                // //       </Tag>
                // //     );
                // //   }
                // //   // return shortHealthLabelList.includes(e);
                // // })}

                // {/* <Tag
                //   key={item.healthLabel}
                //   width={"max-content"}
                //   height={"max-content"}
                //   bg={"purple.100"}
                // >
                //   {item.healthLabel}
                // </Tag> */}
                {item.dietLabels.map((dietLabel) => {
                  return (
                    <Tag key={dietLabel} bg={"lightgreen"}>
                      {dietLabel}
                    </Tag>
                  );
                })}
                <Text key={item.dishType}>Dish: {item.dishType}</Text>
                <Text>Cautions:</Text>
                {item.cautions.map((caution) => {
                  return (
                    <Tag key={caution} bg={"lightpink"}>
                      {caution}
                    </Tag>
                  );
                })}
              </Stack>
            </CardBody>
          </Card>
        </>
      ))}
    </Flex>
  );
};
