import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

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
    Textarea
  } from '@chakra-ui/react'

function NewEntry() {
    const [name,setName]=useState("");
    const [detail,setDetail]=useState("");
    const [valid,setvalid]=useState('');
    const [dash,setDash]=useState(false);
    const [bodyData,setBody]=useState({});
  
    async function verify(e){
      e.preventDefault();
      const body={
        name:name,
        detail:detail,
      }
       const config={
        headers:{
        'content-type': 'application/x-www-form-urlencoded',
      }};
      const data =await axios.post('http://localhost:8000/event/add',body,config);
      if(data.data.success=== true){

        setDash(true);
        setBody(body)
  
      }
      
    }
  
  
  
    return (
      <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Conference Management</Heading>
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
                <FormLabel>Conference Name</FormLabel>
                <Input type="email" onChange={(e)=>{setName(e.target.value)}}/>
              </FormControl>
              <FormControl id="password" pb={10}>
                <FormLabel>Conference Detail</FormLabel>
                <Textarea
                      name="message"
                      placeholder="Enter Detail"
                      rows={6}
                      resize="none"
                      onChange={(e)=>{setDetail(e.target.value)}}
                    />
                {/* <Input type="password" onChange={(e)=>{setPassword(e.target.value)}} /> */}
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
                  Add Event
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      {dash && <Navigate to='/admindashboard' state={bodyData} replace={true} />}
      </>
    )
}

export default NewEntry