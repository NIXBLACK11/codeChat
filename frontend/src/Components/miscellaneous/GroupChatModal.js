import React, { useState } from 'react';
import { Input, FormControl, useDisclosure, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, Button, useToast } from '@chakra-ui/react';
import { ChatState } from '../../Context/ChatProvider';
const GroupChatModal = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { GroupChat, setgroupChat } = useState();
    const { selectedUsers, setselectedUsers } = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const toast = useToast();

    const { user, chats, setChats } = ChatState();

    const handleSearch = () => {};
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