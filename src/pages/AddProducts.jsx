import { Box } from '@chakra-ui/react'
import React from 'react'
import AddProductForm from '../components/AddProduct/AddProductForm'
import Navbar from '../components/Navbar/Navbar'
import { motion } from 'framer-motion'

const AddProducts = () => {
    return (
        // <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <motion.div transition={{ duration: 0.5 }} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} exit={{ scaleY: 0 }}>


            <Box backgroundColor="white" >
                <Box backgroundColor="black">
                    <Navbar />
                </Box>
                <Box >
                    <AddProductForm />
                </Box>

            </Box>
        </motion.div>
    )
}

export default AddProducts
