import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import DisplayCartItems from '../components/CartItems/DisplayCartItems'
import Navbar from '../components/Navbar/Navbar'

const Cart = () => {
    return (
        <Box>
            <Box backgroundColor="black">
                <Navbar />
            </Box>
            <DisplayCartItems />
        </Box>

    )
}

export default Cart
