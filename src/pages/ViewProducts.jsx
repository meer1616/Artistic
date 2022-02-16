import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ViewProductsDetail from '../components/ViewProducts/ViewProductsDetail'
import { motion } from "framer-motion"

const ViewProducts = () => {
    return (
        <motion.div transition={{ duration: 0.5 }} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} exit={{ scaleY: 0 }}>

            <div>
                <Box backgroundColor="black">
                    <Navbar />
                </Box>
                <Box backgroundColor="white">
                    <ViewProductsDetail />
                </Box>
            </div>
        </motion.div>
    )
}

export default ViewProducts
