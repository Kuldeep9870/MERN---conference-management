import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios'
import {Navigate} from 'react-router-dom'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react'

export default function Login({setUser,setSucess}) {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [valid,setvalid]=useState('');
  const [dash,setDash]=useState(false);
  const [bodyData,setBody]=useState({});

  async function verify(e){
    e.preventDefault();
    const body={
      email:email,
      password:password,
    }
     const config={
      headers:{
      'content-type': 'application/x-www-form-urlencoded',
    }};
    const data =await axios.post('http://localhost:8000/user/register',body,config);
    console.log(body);
    if(data.data.success=== true){
      
      setDash(true);
      setBody(body)
      setvalid('');

    }
    else
      setvalid('show');
    
  }



  return (
    <>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign up</Heading>
          {/* <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text> */}
        </Stack>
        <Box
          rounded={'lg'}
          
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </FormControl>
            <FormControl id="password" pb={10}>
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e)=>{setPassword(e.target.value)}} />
            </FormControl>
            <Stack spacing={10}>
              {/* <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack> */}
              {
                valid==='show'?<Text color={'red'}>Wrong Credentials</Text>:<Text></Text>
              }
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} onClick={(e)=>{verify(e)}}
                >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    {dash && <Navigate to='/userdashboard' state={bodyData} replace={true} />}
    </>
  )
}
