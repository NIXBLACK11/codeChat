import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Box, Text } from "@chakra-ui/layout";
import { Menu, Tooltip } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';

const SideDrawer = () => {
  const [state, setState] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  return (
    <Box 
      d="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      w="100%"
      p="5px 10px 5px 10px"
      borderWidth="5px"
    >
      <Tooltip 
        label = "Search Users to chat"
        hasArrow
        placement='bottom-end'
      >
      <Button variant="ghost">
        <FontAwesomeIcon icon={faSearch} />
        <Text d={{ base: "none", md: "flex" }} px="4">
          Search User
        </Text>
      </Button>
      </Tooltip>
      <Text fontSize="2xl" fontFamily="Work-sans">
        Code-Chat
      </Text>
      <div>
        <Menu>
          o
          
        </Menu>
      </div>
    </Box>
  )
}

export default SideDrawer