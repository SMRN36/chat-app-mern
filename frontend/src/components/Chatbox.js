import "./styles.css";
import SingleChat from "./SingleChat";
import { Box } from "@chakra-ui/layout";


const Chatbox = ({
  selectedChat,
  user,
  setSelectedChat,
  fetchAgain,
  setFetchAgain,
}) => {



  return (
    <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat
        setSelectedChat={setSelectedChat}
        selectedChat={selectedChat}
        user={user}
        fetchAgain={fetchAgain}
        setFetchAgain={setFetchAgain}
      />
    </Box>
  );
};

export default Chatbox;