import { Box } from '@chakra-ui/react'
import React from 'react'
import ContactDeveloper from '../components/ContactDeveloper/ContactDevloper'
import Navbar from '../components/Navbar/Navbar'

const Contact = () => {
    return (

        <Box>
            <Box backgroundColor="black">
                <Navbar />
            </Box>
            <ContactDeveloper />
        </Box>
    )
}

export default Contact
