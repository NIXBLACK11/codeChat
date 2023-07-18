import React, {useState} from 'react';
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack ,Button} from '@chakra-ui/react';

const Signup = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [pic, setPic] = useState();
    
    const handleClick1 = () => setShow1(!show1);
    const handleClick2 = () => setShow2(!show2);

    const postDetails = (pics) => {};

    const submitHandler = () => {};

    return (
        <VStack spacing='5px' color="black">
            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                    <Input 
                        placeholder='Enter Your Name' 
                        onChange={(e) => setName(e.target.value)}
                    />
            </FormControl>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                    <Input 
                        type='email'
                        placeholder='Enter Your Email' 
                        onChange={(e) => setEmail(e.target.value)}
                    />
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input 
                            type={show1 ? "text" : "password"}
                            placeholder='Enter Your Password' 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputRightElement width="4.5rem">
                            <Button 
                                h='1.75rem' size='sm' 
                                onClick={handleClick1}>
                                {show1 ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>Confirm Password</FormLabel>
                    <InputGroup>
                        <Input 
                            type={show2 ? "text" : "password"}
                            placeholder='Confirm Password' 
                            onChange={(e) => setConfirmpassword(e.target.value)}
                        />
                        <InputRightElement width="4.5rem">
                            <Button 
                                h='1.75rem' size='sm' 
                                onClick={handleClick2}>
                                {show2 ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
            </FormControl>
            <FormControl id='pic'>
                <FormLabel>Upload the picture</FormLabel>
                    <Input 
                        type='file'
                        p='1.5'
                        accept='image/*'
                        onChange={(e) => postDetails(e.target.files[0])}
                    />
            </FormControl>
            <Button
                colorScheme='yellow'
                width='100%'
                style={{ margitop: 15 }}
                onClick={submitHandler}
            >
                Sign Up
            </Button>
        </VStack>
    )
}

export default Signup