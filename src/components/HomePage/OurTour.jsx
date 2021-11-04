import { Box, Flex, Image, Text, Button } from '@chakra-ui/react'
// import { BsCheck2Circle } from "react-icons/bs"
import { CheckCircleIcon } from '@chakra-ui/icons'
import React from 'react'

const OurTour = () => {
    return (
        <Flex justifyContent="center" className="roboto" letterSpacing="wide" height={["", "", "", "100vh"]} backgroundColor="black" color="white" alignItems="center" flexDirection={["column"]}>
            <Box>

                <Text textAlign="center" color="crimson" className="roboto"
                    className="roboto" fontSize={["xl", "xl", "2xl", "2xl"]} fontWeight="bold" letterSpacing="wider" mt={["5", "5", "", ""]} >Our Tour</Text>
                <Text textAlign="center" className="roboto" fontSize={["2xl", "2xl", "2xl", "3xl"]}>Why Must Be </Text>
                <Text textAlign="center" className="roboto" fontSize={["2xl", "2xl", "2xl", "3xl"]}>With Us ?</Text>
                <Text border="2px solid white" w="20%" m="auto" textAlign="center" backgroundColor="white" my="2" mb="8"></Text>
            </Box>
            <Flex mt="5" justifyContent="center" alignItems="center" w="80%" flexDir={["column", "column", "row", "row"]}>
                <Box w={["100%", "100%", "50%", "50%"]}><Image src="./w6.jpg" ></Image></Box>
                <Box w={["100%", "100%", "50%", "50%"]}>
                    <Box w={["100%", "100%", "90%", "80%"]} margin="auto">
                        <Text fontSize={["2xl", "2xl", "2xl", "3xl"]} className="roboto" mt={["5", "5", "", ""]}>There is No Word Of </Text>
                        <Text fontSize={["2xl", "2xl", "2xl", "3xl"]} className="roboto" mb={["5", "5", "10", "10"]} >Being Bored With Us! </Text>
                        <Flex my="1"> <Box fontSize="2xl" > <CheckCircleIcon mt="-3" color="green" fontSize="md" /></Box>  <Text mx="3" fontSize={["l", "l", "l", "xl"]}> There is a Interesting team to play</Text></Flex>
                        <Flex my="1"> <Box fontSize="2xl" > <CheckCircleIcon mt="-3" color="green" fontSize="md" />  </Box><Text mx="3" fontSize={["l", "l", "l", "xl"]}> Number of competitors to compete</Text></Flex>
                        <Flex my="1"> <Box fontSize="2xl" > <CheckCircleIcon mt="-3" color="green" fontSize="md" />  </Box><Text mx="3" fontSize={["l", "l", "l", "xl"]}> Availabilty of Appratus to perform</Text></Flex>
                        <Flex my="1"> <Box fontSize="2xl" > <CheckCircleIcon mt="-3" color="green" fontSize="md" />  </Box><Text mx="3" fontSize={["l", "l", "l", "xl"]}> Game day every week</Text></Flex>
                        <Button mt="10" borderRadius="20" px="7" boxShadow="lg" _hover={{ color: "white", backgroundColor: "gray" }} backgroundColor="crimson" color="white" mb={["8", "8", "", ""]}>Join Now</Button>
                    </Box>

                </Box>
            </Flex>

        </Flex>
    )
}

export default OurTour
