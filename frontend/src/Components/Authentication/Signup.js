import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack ,Button, useToast} from '@chakra-ui/react';

const Signup = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [pic, setPic] = useState();
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const history = useHistory();
    
    const handleClick1 = () => setShow1(!show1);
    const handleClick2 = () => setShow2(!show2);

    const postDetails = (pics) => {
        setLoading(true);
    
        if (pics === undefined) {
          toast({
            title: "Please Select an Image!",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          return;
        }
    
        if (pics.type !== "image/jpeg" && pics.type !== "image/png") {
          toast({
            title: "Please Select a JPEG or PNG Image!",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          setLoading(false);
          return;
        }
    
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
    
          const data = new FormData()
          data.append("file", pics)
          data.append("upload_preset", "CODECHAT")
          data.append("cloud_name", "dnnxj568j")
          axios.post("https://api.cloudinary.com/v1_1/dnnxj568j/image/upload", data)
            .then((response) => {
              console.log("Cloudinary response:", response);
              setPic(response.data.url.toString());
              setLoading(false);
              toast({
                title: "Image uploaded successfully!",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });
            })
            .catch((error) => {
              console.log("Cloudinary error:", error);
              setLoading(false);
            });
        }
    }

    const submitHandler = async () => {
        setLoading(true);
        if(!name || !email || !password || !confirmpassword)
        {
            toast({
                title: "Please fill all the Fields",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }
        if(password !== confirmpassword)
        {
            toast({
                title: "Passwords do not match",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }
        try{
            const config = {
                headers: {
                    "Content-type": "application/json", 
                },
            };
            const { data } = await axios.post(
                "/api/user",
                { name, email, password, pic },
                config
            );

            toast({
                title: "Registration Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            localStorage.setItem('userInfo', JSON.stringify(data));
            setLoading(false);
            history.push('/chats');
        }catch(error){
            toast({
                title: "Error Occured!",
                description: error.response.data.message,
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
        }
    };

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
                style={{ marginTop: 15 }}
                onClick={submitHandler}
                isLoading={loading}
            >
                Sign Up
            </Button>
        </VStack>
    )
}

export default Signup