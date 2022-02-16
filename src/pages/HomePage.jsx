import React from 'react'
import Navbar from '../components/Navbar/Navbar'
// import { useAuth } from '../context/AuthContext'
import HomePageIndex from '../components/HomePage/Index'
import { Box } from '@chakra-ui/react'
// import Partners from '../components/HomePage/Partners'
import About from '../components/HomePage/About'
import OurTour from '../components/HomePage/OurTour'
// import JoinNow from '../components/HomePage/JoinNow'
import Footer from '../components/HomePage/Footer'
import OurServices from '../components/HomePage/OurServices'
import OurProfessionals from '../components/HomePage/OurProfessionals'
import { motion } from "framer-motion"
const HomePage = () => {
    // const { currentUser } = useAuth()
    return (
        <motion.div transition={{ duration: 0.5 }} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} exit={{ scaleY: 0 }}>

            <Box backgroundColor="white">
                <Box height="100vh" className="HomePageBackgroundOuter">
                    <Box className="HomePageBackground">

                        <Navbar />
                        <HomePageIndex />
                    </Box>
                </Box>
                <Box>

                    <About />
                    <OurTour />
                    <OurServices />
                    <OurProfessionals />
                    <Footer />
                </Box>
            </Box>
        </motion.div>
    )
}


export default HomePage
