import React from 'react';
import { Card, CardHeader, CardBody, CardFooter,Text,Button,Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

function Dashboard() {
    const location=useLocation();
  return (
    <div>
    {console.log(location.state+ "hello")}
        <Card align='center' variant={'outline'}>
            <CardHeader>
                <Heading size='md'> Add New Conference</Heading>
            </CardHeader>
            <CardBody>
                <Text>Add new conference to Confernce Database</Text>
            </CardBody>
            <CardFooter>
            <Link to={`/new-event`}><Button colorScheme='blue'>View here</Button></Link>
                
            </CardFooter>
        </Card>
        <Card align='center' variant={'outline'}>
            <CardHeader>
                <Heading size='md'>Manage Conference</Heading>
            </CardHeader>
            <CardBody>
                <Text>Update conference Details </Text>
            </CardBody>
            <CardFooter>
                <Link to={`/manage`}><Button colorScheme='blue'>View here</Button></Link>
            </CardFooter>
        </Card>
        <Card align='center' variant={'outline'}>
            <CardHeader>
                <Heading size='md'>View Registration</Heading>
            </CardHeader>
            <CardBody>
                <Text>Checkout number of registrations for conference</Text>
            </CardBody>
            <CardFooter>
            <Link to={`/view`}><Button colorScheme='blue'>View here</Button></Link>
            </CardFooter>
        </Card>
    </div>
  )
}

export default Dashboard