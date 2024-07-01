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
                <Heading size='md'> Register for Conferences</Heading>
            </CardHeader>
            <CardBody>
                <Text>Checkout all available Conferences</Text>
            </CardBody>
            <CardFooter>
            <Link to={`/register`}><Button colorScheme='blue'>View here</Button></Link>
                
            </CardFooter>
        </Card>
        <Card align='center' variant={'outline'}>
            <CardHeader>
                <Heading size='md'> View Schedules</Heading>
            </CardHeader>
            <CardBody>
                <Text>Check schedules</Text>
            </CardBody>
            <CardFooter>
            <Link to={`/viewreg`}><Button colorScheme='blue'>View here</Button></Link>
            </CardFooter>
        </Card>
        <Card align='center' variant={'outline'}>
            <CardHeader>
                <Heading size='md'> Submit Feedback</Heading>
            </CardHeader>
            <CardBody>
                <Text>Provide Feedback for attended Confernces</Text>
            </CardBody>
            <CardFooter>
            <Link to={`/feedback`}><Button colorScheme='blue'>View here</Button></Link>
            </CardFooter>
        </Card>
    </div>
  )
}

export default Dashboard