import { Box } from '@chakra-ui/react'
import React from 'react'
import AddProductForm from '../components/AddProduct/AddProductForm'
import Navbar from '../components/Navbar/Navbar'

const AddProducts = () => {
    return (
        <Box  >
            <Box backgroundColor="black">
                <Navbar />
            </Box>
            <AddProductForm />
        </Box>
    )
}

export default AddProducts
