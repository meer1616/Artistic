import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import notFound from "../images/notFound.svg"

const NotfoundPage = () => {
    return (
        <Box height="100vh">
            <Flex alignItems="center" justifyContent="center" height="85%">
                <Image src={notFound} alt='Not Found' width="50%"></Image>
            </Flex>
            <Text textAlign="center" mt="8" fontSize="2xl" fontWeight="medium">
                <Link to="/">Back to Home</Link>
            </Text>
        </Box>
    )
}

export default NotfoundPage
