import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ViewProductsDetail from '../components/ViewProducts/ViewProductsDetail'

const ViewProducts = () => {
    return (
        <div>
            <Box backgroundColor="black">
                <Navbar />
            </Box>
            <ViewProductsDetail />
        </div>
    )
}

export default ViewProducts
