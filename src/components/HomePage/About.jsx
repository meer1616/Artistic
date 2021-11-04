import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useHistory } from 'react-router-dom'

const About = () => {
    const history = useHistory();

    const currentUser = JSON.parse(localStorage.getItem("currentUser"))

    const handleJoinNow = () => {
        if (currentUser) {
            // alert("You are already logged In ")
            history.push("/add-product")
        }
        else {
            history.push("/login")
        }
    }

    return (
        <Flex height={["", "", "", "100vh"]} alignItems="center" w={["95%", "95%", "90%", "80%"]} m="auto" justifyContent="space-between" flexDir={["column-reverse", "column-reverse", "row", "row"]}>
            <Box w={["90%", "90%", "40%", "40%"]} >
                <Text fontSize={["2xl", "2xl", "xl", "3xl"]} fontWeight="bold" my="5" color="crimson" >About.</Text>
                <Text fontSize={["lg", "2xl", "2xl", "4xl"]} className="boldFont" opacity="0.8" >Number of Benefits of Gymnastics </Text>
                <Text border="2px solid black" w="7%" backgroundColor="black" my="2"></Text>
                <Text my="5" color="gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eius ducimus dolorem asperiores sint voluptates necessitatibus, laudantium vel eaque soluta quia omnis fugit ratione voluptate numquam impedit unde! Aperiam doloribus ad tenetur harum omnis quibusdam quisquam cum tempore quo ex accusantium quis, facilis dolorum nesciunt.</Text>
                <Button onClick={handleJoinNow} borderRadius="20" px="7" boxShadow="lg" _hover={{ color: "white", backgroundColor: "gray" }} backgroundColor="crimson" color="white" mb={["8", "8", "", ""]} >Join Now</Button>
            </Box>
            <Flex position="relative" justifyContent="center" alignItems="center" mt={["16", "16", "", ""]} w={["100%", "100%", "50%", "50%"]} >
                <Box zIndex="-1"> <Image src="./crimsonsq3.png" position="absolute" top={["-7", "-9", "-10", "-12"]} w="40%" left="2"></Image> </Box>
                <Box zIndex="-1"> <Image src="./crimsonsq3.png" position="absolute" bottom={["-7", "-9", "-10", "-12"]} w="40%" right="2"></Image> </Box>

                <Image src="./w3.jpg" alt="image" w="80%" ></Image>
            </Flex>
        </Flex>
    )
}

export default About
