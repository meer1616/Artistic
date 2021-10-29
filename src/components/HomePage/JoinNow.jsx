import { Box, Flex, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'

const JoinNow = () => {
    return (
        <Flex height="100vh" justifyContent="center" alignItems="center">
            <Box w="50%" border="1px">
                <Image src="./w2.jpg"></Image>
            </Box>
            <Flex justifyContent="center" alignItems="center" w="50%">
                <Box border="1px" height="80%" w="60%" p="10" m="auto">
                    <Text>Join The Fun</Text>
                    <Text>Email</Text>
                    <Input></Input>
                    <Text>Password</Text>
                    <Input></Input>



                </Box>
            </Flex>
        </Flex>
    )
}

export default JoinNow
