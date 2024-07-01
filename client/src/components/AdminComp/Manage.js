import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Stack, Text, Button,Spinner } from '@chakra-ui/react'
import axios from 'axios';


function Manage() {
   const location=useLocation();
   const [event,setEvent]=useState({});
   const [wait,setWait]=useState(true);


   const deleteEvent= async(id)=>{
    const body={
      _id:id
    }
     const config={
      headers:{
      'content-type': 'application/x-www-form-urlencoded',
    }};
    console.log(body);
    const  list =await axios.post('http://localhost:8000/event/delete',body,config);
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
      {wait? <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
              /> :
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
          <Button variant="outline" colorScheme="yellow" >
              Edit Event
            </Button>
          <Button variant="outline" colorScheme="red"  onClick={()=>deleteEvent(e._id)}>
            Delete Event
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

export default Manage;