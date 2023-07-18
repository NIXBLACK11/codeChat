import { useState } from 'react';
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, Button } from '@chakra-ui/react';

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick = () => setShow(!show);

  const submitHandler = () => {};

  return (
    <VStack spacing='5px' color="black">
      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type='email'
          placeholder='Enter Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder='Enter Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              h='1.75rem'
              size='sm'
              onClick={handleClick}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme='yellow'
        width='100%'
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>
      <Button
        colorScheme='red'
        width='100%'
        style={{ marginTop: 15 }}
        onClick={() => {
          setEmail("guest@email.com");
          setPassword("12345678");
        }}
      >
        Get gest user credentials
      </Button>
    </VStack>
  );
};

export default Login;
