import { Box, Flex, Text } from '@chakra-ui/react'
// import { motion, AnimatePresence } from "framer-motion"
import React from 'react'
import Fade from 'react-reveal/Fade';
// import { useHistory } from 'react-router-dom';

const Index = () => {
    // const history = useHistory();

    // const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    // const handleJoinNow = () => {
    //     if (currentUser) {
    //         // alert("You are already logged In ")
    //         history.push("/enroll-now")
    //     }
    //     else {
    //         history.push("/login")
    //     }
    // }
    return (
        <Flex height="90vh" alignItems="center" color="white">
            {/* <AnimatePresence> */}
            {/* <motion.div initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}> */}

            <Box w={["65%", "80%", "40%", "40%"]} ml="14">

                <Fade delay={200} >
                    <Text letterSpacing="wide" fontSize={["x-large", "x-large", "3xl", "5xl"]} color="crimson" mb="10">Me's Gym</Text>
                </Fade>
                <Fade delay={500}>

                    <Text letterSpacing="wide" fontSize={["x-large", "x-large", "3xl", "6xl"]}>
                        Get The Result What you want..</Text>
                </Fade>
                <Fade delay={700}>

                    {/* <Button onClick={handleJoinNow} borderRadius="20" px="7" boxShadow="lg" _hover={{ color: "white", backgroundColor: "gray" }} backgroundColor="crimson" fontWeight="light" fontSize="xl" letterSpacing="wide" color="white" my={["8", "8", "", ""]} mt="5">Join Now</Button> */}
                </Fade>

            </Box>
            {/* </motion.div> */}
            {/* </AnimatePresence> */}
        </Flex>
    )
}

export default Index
