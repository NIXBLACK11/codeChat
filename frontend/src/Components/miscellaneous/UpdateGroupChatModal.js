import React from 'react';
import { FormControl, Input, useToast, Box, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { useDisclosure } from '@chakra-ui/hooks';
import { ChatState } from '../../Context/ChatProvider';
import { useState } from 'react';
import UserBadgeItem from '../UserAvatar/UserBadgeItem';
import axios from 'axios';

const UpdateGroupChatModal = ({ fetchAgain, setFetchAgain }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [groupChatName, setGroupChatName] = useState();
  const [search, setSearchResults] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [renameloading, setRenameloading] = useState(false);
  const toast = useToast();

  const { selectedChat, setSelectedChat, user } = ChatState();

  const handleRemove = () => {};
  const handleRename = async() => {
    if(!groupChatName) return;
    try {
      setRenameloading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.put('/api/chat/rename', {
        chatId: selectedChat._id,
        chatName: groupChatName,
      },
      config
      );

      setSelectedChat(data);
      setFetchAgain(!fetchAgain);
      setRenameloading(false);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setRenameloading(false);

      setGroupChatName("");
    }
  };
  const handleSearch = () => {
    setSearchResult(query);
    if(!query){
      return;
    }
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data }
    } catch (error) {
      
    }
  };
  
  return (
    <>
      <IconButton display={{ base: "flex" }} icon={<ViewIcon/>}onClick={onOpen}/>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="35px" fontFamily="Work sans" display="flex" justifyContent="center">
            {selectedChat.chatName.toUpperCase()}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              w="100%" display="flex" flexWrap="wrap" pb={3}
            >
              {selectedChat.users.map((u) => (
              <UserBadgeItem 
              key={user._id} 
              user={u}
              handleFunction={() => handleRemove(u)}
            />
            ))}</Box>
            <FormControl display="flex">
                <Input
                  placeHolder="Chat Name"
                  mb={3}
                  value={groupChatName}
                  onChange={(e) => setGroupChatName(e.target.value)}
                />
                <Button
                  variant="solid" colorScheme="teal" ml={1} isLoading={renameloading} onClick={handleRename}
                >
                  Update
                </Button>
            </FormControl>
            <FormControl display="flex">
                <Input
                  placeHolder="Add user to group"
                  mb={1}
                  onChange={(e) => handleSearch(e.target.value)}
                />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' onClick={() => handleRemove(user)}>
              Leave Group
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default UpdateGroupChatModal