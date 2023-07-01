import React, { useEffect, useState } from "react";
import { FetchServer } from "../../functions/fetchServer";
import { Card, CardBody, CardHeader, Flex, Text } from "@chakra-ui/react";

export const EventList = () => {
  const [serverData, setServerData] = useState();

  const fetchServerData = async (data) => {
    try {
      const setDataToState = await fetch(data);
      if (data !== null || data !== "" || data !== undefined) {
        console.log(data);
        setServerData(data);
        console.log(serverData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   fetchServerData();
  // }, []);

  console.log(serverData?.fetchedEventList);

  return (
    <>
      <FetchServer onDataFetched={fetchServerData} />
      <Flex
        flexDir={"row"}
        flexWrap={"wrap"}
        margin={"15px"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        {serverData ? (
          serverData?.fetchedEventList.lenght > 0 ? (
            serverData?.fetchedEventList.map((item) => {
              console.log(item);
              return (
                <React.Fragment key={item.eventID}>
                  <Card
                    width={"20em"}
                    height={"2em"}
                    border={"1px solid black"}
                    bg={"whiteAlpha.100"}
                  >
                    <CardBody>
                      <CardHeader>{item.eventName}</CardHeader>
                      <Text>{item.eventShortDescr}</Text>
                    </CardBody>
                  </Card>
                </React.Fragment>
              );
            })
          ) : (
            <p>No events have been found</p>
          )
        ) : (
          <p>Loading...</p>
        )}
      </Flex>
    </>
  );
};
export default EventList;
