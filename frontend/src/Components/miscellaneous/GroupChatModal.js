import React, { useState } from 'react';
import { Input, FormControl, useDisclosure, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, Button, useToast } from '@chakra-ui/react';
import { ChatState } from '../../Context/ChatProvider';
import axios from 'axios';
const GroupChatModal = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { GroupChatName, setgroupChatName } = useState();
    const { selectedUsers, setselectedUsers } = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const toast = useToast();

    const { user, chats, setChats } = ChatState();

    const handleSearch = async(query) => {
        setSearch(query);
        if(!query)
        {
            return;
        }
        try {
            setLoading(true);
      
            const config = {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            };
      
            const { data } = await axios.get(`/api/user?search=${search}`, config);
      
            setLoading(false);
            console.log(data);
            setSearchResult(data);
          } catch (error) {
            toast({
              title: "Error Occured!",
              description: "Failed to Load the Search Results",
              status: "error",
              duration: 5000,
              isClosable: true,
              position: "bottom-left",
            });
        }
    };
    const handleSubmit = () => {};
    return (
        <>
          <span onClick={onOpen}>{children}</span>
    
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
                fontSize="35px"
                fontFamily="Work sans"
                display="flex"
                justifyContent="center"
              >
                Create Group Chat
                </ModalHeader>
              <ModalCloseButton />
              <ModalBody display="flex" flexDir="column" alignItems="center">
                <FormControl>
                    <Input placeholder="Chat Name" mb={3} onChange={(e) => setgroupChatName(e.target.value)}/>
                </FormControl>
                <FormControl>
                    <Input placeholder="Add Users" mb={1} onChange={(e) => handleSearch(e.target.value)}/>
                </FormControl>
                {/* selected users */}
                {/* render searched users */}
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='blue' onClick={handleSubmit}>
                  Create Chat
                </Button>
                <Button variant='ghost'>Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
    )
}

export default GroupChatModal