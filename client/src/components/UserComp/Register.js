import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Stack, Text, Button } from '@chakra-ui/react'
import axios from 'axios';


function Register({user}) {
   const location=useLocation();
   const [event,setEvent]=useState({});
   const [wait,setWait]=useState(true);


   const addEvent= async(name,detail)=>{
    const body={
      name:name,
      detail:detail
    }
     const config={
      headers:{
      'content-type': 'application/x-www-form-urlencoded',
    }};
    console.log(body);
    const  list =await axios.post('http://localhost:8000/user/update',body,config);
    console.log(list);
    
 }
   

   useEffect(()=>{
    // setInterval(() => {
    //   setFlip(!flip);
    // }, 1000);
     const eventList= async()=>{
        const  list =await axios.get('http://localhost:8000/event');
        setEvent(list.data);
        setWait(false);
     }
     console.log(event);
     eventList();
   },[])
  return (
    <div >
      {wait? <div>Wait ... Loading</div> :
      <>
        <Text fontSize={{ base: 'xxx-large' }} textAlign={'center'} maxW={'4xl'}>
          Conference list
        </Text>
        {event.map((e)=> <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">{e.name}</Text>
      </Stack>
        
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
          {e.detail}
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Button variant="outline" colorScheme="green"  onClick={()=>addEvent(e.name,e.detail)}>
            Register
          </Button>
          {/* <Button colorScheme="green">OK</Button> */}
        </Stack>
      </Stack>
    </Stack>)}
        </>
    
      }
    </div>
  )
}

export default Register