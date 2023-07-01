import { Card } from "@chakra-ui/react";
import { EventList } from "./pages/EventsList";
import { Header } from "./ui-components/Header";
// import { FetchServer } from "../functions/fetchServer";

function App() {
  return (
    <>
      <Header />
      <Card
        width={"100px"}
        height={"100px"}
        bg={"blackAlpha.900"}
        color={"whiteAlpha.900"}
        borderRadius={"25%"}
      >
        hallo
      </Card>
      <EventList />
    </>
  );
}

export default App;
