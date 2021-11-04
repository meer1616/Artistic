import { Box, Flex, Icon, Image, ListItem, Text, UnorderedList, Link } from '@chakra-ui/react'
import React from 'react'
import { FaInstagram, FaFacebook, FaPinterestP, FaTwitter, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return (
        <Box backgroundColor="black" color="white">
            <Flex alignItems="center" justifyContent="center"  >
                <Image src="./M.svg" className="icons" height="20" alt="img" mt="16"></Image>
            </Flex>

            <Flex alignItems="center" justifyContent="center" flexDir="column">
                <Text fontSize={["xl", "2xl", "2xl", "4xl"]} my="5">Eat, Sleep Practice and Repeat </Text>
                <UnorderedList mt="5" listStyleType="none">
                    <Flex flexDir={["column", "column", "row", "row"]}>
                        <Link href="https://google.com"><ListItem fontSize={["medium", "lg", "x-large", "x-large"]} textAlign={["center", "center", "", ""]} mx="5">Contact Us</ListItem></Link>
                        <Link href="https://google.com"><ListItem fontSize={["medium", "lg", "x-large", "x-large"]} textAlign={["center", "center", "", ""]} mx="5">Our Tour</ListItem></Link>
                        <Link href="https://google.com"><ListItem fontSize={["medium", "lg", "x-large", "x-large"]} textAlign={["center", "center", "", ""]} mx="5">Images</ListItem></Link>
                        <Link href="https://google.com"><ListItem fontSize={["medium", "lg", "x-large", "x-large"]} textAlign={["center", "center", "", ""]} mx="5">Videos</ListItem></Link>
                        <Link href="https://google.com"><ListItem fontSize={["medium", "lg", "x-large", "x-large"]} textAlign={["center", "center", "", ""]} mx="5">Training System</ListItem></Link>
                    </Flex>
                </UnorderedList>
                <UnorderedList mt="12" mb="8" listStyleType="none">
                    <Flex >
                        <Link href="https://google.com"><Icon as={FaInstagram} _hover={{ color: "lightblue" }} fontSize="x-large" mx={["3", "3", "5", "5"]}> Our Tour </Icon></Link>
                        <Link href="https://google.com"><Icon as={FaFacebook} _hover={{ color: "lightblue" }} fontSize="x-large" mx={["3", "3", "5", "5"]}>Contact Us </Icon></Link>
                        <Link href="https://google.com"><Icon as={FaPinterestP} _hover={{ color: "lightblue" }} fontSize="x-large" mx={["3", "3", "5", "5"]}> Training System</Icon> </Link>
                        <Link href="https://google.com"><Icon as={FaTwitter} _hover={{ color: "lightblue" }} fontSize="x-large" mx={["3", "3", "5", "5"]}>Images</Icon> </Link>
                        <Link href="https://google.com"><Icon as={FaYoutube} _hover={{ color: "lightblue" }} fontSize="x-large" mx={["3", "3", "5", "5"]}>Videos</Icon></Link>
                    </Flex>
                </UnorderedList>
            </Flex >


        </Box >
    )
}

export default Footer
