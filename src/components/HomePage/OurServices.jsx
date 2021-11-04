import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import React from 'react'

const OurServices = () => {
    return (
        <Flex alignItems="center" className="roboto" justifyContent="center" height={["", "", "", "100vh"]} flexDir={["column-reverse", "column-reverse", "row", "row"]} mt={["16", "10", "", ""]}>

            <Box w={["85%", "85%", "40%", "40%"]}   >
                <Text fontSize={["2xl", "2xl", "3xl", "3xl"]} fontWeight="bold" my="5" color="crimson" >Our Servies.</Text>
                <Text fontSize={["xl", "2xl", "3xl", "4xl"]} className="boldFont" opacity="0.8" >Providing Best Practice to Players</Text>
                <Text border="2px solid black" w="7%" backgroundColor="black" my="2"></Text>
                <Flex mt="5"><CheckCircleIcon color="green" fontSize="sm" mr="2" mt="2" /> <Text color="gray" fontSize={["l", "lg", "lg", "lg"]}>Providing Unlimited chalk Powder.</Text></Flex>
                <Flex ><CheckCircleIcon color="green" fontSize="sm" mr="2" mt="2" /> <Text color="gray" fontSize={["l", "lg", "lg", "lg"]}>Providing Extra Practice to selected Players.</Text></Flex>
                <Flex ><CheckCircleIcon color="green" fontSize="sm" mr="2" mt="2" /> <Text color="gray" fontSize={["l", "lg", "lg", "lg"]}>Providing Leotards from Academy itself</Text></Flex>
                <Flex ><CheckCircleIcon color="green" fontSize="sm" mr="2" mt="2" /> <Text color="gray" fontSize={["l", "lg", "lg", "lg"]}>Providing Hand grips for Appratus Training</Text></Flex>
                <Button borderRadius="20" px="7" mt="5" boxShadow="lg" _hover={{ color: "white", backgroundColor: "gray" }} backgroundColor="crimson" color="white" mb={["8", "8", "", ""]} >Join Now</Button>
            </Box>
            <Box w={["85%", "85%", "40%", "40%"]} >
                <Flex justifyContent="center" alignItems="center" position="relative">
                    <Box zIndex="-1"> <Image src="./crimsonsq3.png" position="absolute" top={["-7", "-9", "-10", "-12"]} w="40%" left="2"></Image> </Box>
                    <Box zIndex="-1"> <Image src="./crimsonsq3.png" position="absolute" bottom={["-7", "-9", "-10", "-12"]} w="40%" right="2"></Image> </Box>

                    <Image boxShadow="0 0 15px black" src="./videogif.gif" alt="image" w="80%" ></Image>
                </Flex>
            </Box>
        </Flex >
    )
}

export default OurServices
