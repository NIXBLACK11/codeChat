import React from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Container, Text, Tabs, Tab, TabPanel, TabList, TabPanels } from '@chakra-ui/react';
import Login from './../Components/Authentication/Login';
import Signup from '../Components/Authentication/Signup';

const Homepage = () => {

  const history = useHistory()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));
        if(user)
        {
            history.push('/chats');
        }
    }, [history]);

  return (
    <Container maxW='xl' justifyContent="center">
      <Box d="flex" textAlign="center" justifyContent="center"  p="3" bg="white" w="100%" m="40px 0px 15px 0px" borderRadius="lg" borderWidth="1px">
        <Text fontSize="4xl" fontFamily="Work sans" color="black">Code Chat</Text>
      </Box>
      <Box bg="white" w="100%" p="4" borderRadius="lg" borderWidth="1px">
        <Tabs variant='soft-rounded' colorScheme='yellow'>
          <TabList>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Homepage;