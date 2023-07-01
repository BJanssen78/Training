import React, { useState } from "react";
import { FetchServer } from "../../functions/fetchServer";
import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Text,
  Spacer,
  Stack,
} from "@chakra-ui/react";

export const EventList = () => {
  const [serverData, setServerData] = useState(null);

  const fetchServerData = (data) => {
    setServerData(data);
  };

  return (
    <>
      <FetchServer onDataFetched={fetchServerData} />
      <Flex flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
        <Stack spacing={"25px"}>
          {serverData && serverData.fetchedEventList.length > 0 ? (
            serverData.fetchedEventList.map((item) => (
              <React.Fragment key={item.eventID}>
                <Card
                  width={"60vw"}
                  height={"10em"}
                  bg={"whiteAlpha.300"}
                  // margin={"25px"}
                  gap={"25px"}
                  rowGap={"25px"}
                >
                  <CardBody>
                    <CardHeader
                      color={"blackAlpha.900"}
                      textDecoration={"underline"}
                      textTransform={"uppercase"}
                      padding={"0"}
                      fontSize={"1.5em"}
                      fontWeight={"bold"}
                    >
                      {item.eventName}
                    </CardHeader>
                    <Text>{item.eventShortDescr}</Text>
                    <Text
                      justifyItems={"flex-end"}
                      alignItems={"flex-end"}
                      justifyContent={"flex-end"}
                    >
                      Date : {item.eventDate}
                    </Text>
                  </CardBody>
                </Card>
              </React.Fragment>
            ))
          ) : (
            <p>No events found</p>
          )}
        </Stack>
      </Flex>
    </>
  );
};
export default EventList;
