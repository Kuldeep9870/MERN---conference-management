import React from 'react'
import {Link} from 'react-router-dom';
import Firstpage from './Firstpage';
import { Card, CardHeader, CardBody, CardFooter,Text,Button,SimpleGrid,Heading,Flex,useColorModeValue } from '@chakra-ui/react'

function Usertype() {
  return (
    <>
    <Heading size='lg' textAlign={'center'} pt={10}><Firstpage/></Heading>
    <Flex
      direction={'row'}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' p={0} m={0}>
        <Card>
          <CardHeader>
            <Heading size='md'> User Login</Heading>
          </CardHeader>
          <CardBody>
            <Text>Login to view events and register for them.</Text>
          </CardBody>
          <CardFooter>
          <Link to='/users'><Button mr={5}>Login </Button></Link>
          <Link to='/user-register'><Button>Sign Up</Button></Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size='md'> Admin Login</Heading>
          </CardHeader>
          <CardBody>
            <Text>Admin User Login Panel</Text>
          </CardBody>
          <CardFooter>
          <Link to='/admin'><Button>CLick Here !</Button></Link>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Flex>
    </>
  )
}

export default Usertype