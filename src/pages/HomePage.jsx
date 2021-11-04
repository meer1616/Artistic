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
const HomePage = () => {
    // const { currentUser } = useAuth()
    return (
        <Box>
            <Box height="100vh" className="HomePageBackground">
                <Navbar />
                <HomePageIndex />
                {/* {JSON.stringify(currentUser, null, 2)} */}
            </Box>
            {/* <Partners /> */}
            <About />
            <OurTour />
            {/* <JoinNow /> */}
            <OurServices />
            <OurProfessionals />
            <Footer />
        </Box>
    )
}


export default HomePage
