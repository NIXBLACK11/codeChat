import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Box, Text } from "@chakra-ui/layout";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar, DrawerContent, DrawerOverlay, Menu, MenuButton, MenuDivider, MenuIcon, MenuItem, MenuList, Tooltip, useDisclosure, Drawer, DrawerHeader, DrawerBody, Input, useToast, Spinner } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from './ProfileModal';
import { useHistory } from 'react-router-dom';
import ChatLoading from '../ChatLoading';
import axios from 'axios';
import UserListItem from '../UserAvatar/UserListItem';

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  const { user, setSelectedChat, chats, setChats } = ChatState();
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logoutHandler = () => {
      localStorage.removeItem("userInfo");
      history.push("/");
  };

  const toast = useToast();

  const handleSearch = async () => {
    if(!search){
      toast({
        title: "Please enter something to serach",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
    });
    return;
    }
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const {data} = await axios.get(`/api/user?search=${search}`, config)
      if(!chats.find((c) => c._id === data._id)) setSelectedChat(data)
      {
        setChats([data, ...chats]);
      }
      setLoadingChat(false);
      setSearchResult(data);
    }catch(error){
      toast({
        title: "Error Occured!",
        description: "Failed to load the search results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
    });
    }
  };

  const accessChat = async (userId) =>{
    try {
      setLoading(true);
      const config = {
        headers: {
          "Content-type":"application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const {data} = await axios.post('/api/chat', {userId}, config);

      setSelectedChat(data);
      setLoading(false);
      onClose();
    } catch (error) {
      toast({
        title: "Error fetching the chat",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
    });
    }
  };
  return (
    <>
    <Box 
      display="flex"
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
      <Button variant="ghost" onClick={onOpen}>
        <FontAwesomeIcon icon={faSearch} />
        <Text d={{ base: "none", md: "flex" }} px="4">
          Search User
        </Text>
      </Button>
      </Tooltip>
        <Text fontSize="2xl" fontFamily="Work sans">
          Code-Chat
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize="2xl" m={1}/>
            </MenuButton>
            <MenuList>
              
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
              <Avatar 
                size="sm" 
                cursor="pointer" 
                name={user.name}
                src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModal user = {user}>
                <MenuItem>My Profile</MenuItem>
              </ProfileModal>
              <MenuDivider></MenuDivider>
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
    </Box>
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay/>
      <DrawerContent>
        <DrawerHeader boredrBottomWidth="1px">Search Users</DrawerHeader>
        <DrawerBody>
        <Box display="flex" pb={2}>
          <Input
            placeholder="Search by name or email"
            mr={2}
            value={search}
            onChange={(e) => {
              console.log('Input value:', e.target.value);
              setSearch(e.target.value);
            }}
          />
          <Button 
            onClick={handleSearch}
          >Go</Button>
        </Box>
        {loading ? (
          <ChatLoading/>
        ) : (
          searchResult?.map((user) => (
            <UserListItem
              key={user._id}
              user={user}
              handleFunction={()=>accessChat(user._id)}
            />
          ))
        )
      }
      {loadingChat && <Spinner ml="auto" display="flex" />}
      </DrawerBody>
      </DrawerContent>
    </Drawer>
    </>
  );
};

export default SideDrawer