import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Index = () => {
    return (
        <Flex height="90vh" alignItems="center" color="white">

            <Box w={["65%", "80%", "40%", "40%"]} ml="14">
                <Text letterSpacing="wide" fontSize={["x-large", "x-large", "3xl", "5xl"]} color="crimson" mb="10">Me's Gym</Text>
                <Text letterSpacing="wide" fontSize={["x-large", "x-large", "3xl", "6xl"]}>
                    Get The Result What you want..</Text></Box>
        </Flex>
    )
}

export default Index
