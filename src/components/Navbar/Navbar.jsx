import { Flex, Box, Text, useToast, Button, Icon } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useMediaQuery, useDisclosure } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icon"
import { FaAlignRight } from "react-icons/fa"
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react"

const Navbar = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    console.log("currentUser in Nav", currentUser);
    const [isLargerThan1280] = useMediaQuery("(min-width: 700px)")
    const history = useHistory()
    const toast = useToast()
    const { logout } = useAuth()
    const handleLogout = async () => {
        console.log("logout");
        await logout()
        localStorage.setItem("currentUser", null)
        toast({
            position: "top-right",
            title: "Log out",
            description: "User is log out successfully.",
            status: "success",
            duration: 4000,
            isClosable: true,
        })
        history.push("/login")

    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()




    return (
        <>
            {isLargerThan1280 ? <Flex color="white" className="navbar" justifyContent="space-between" alignItems="center" w="90%" mt="5" m="auto" py="5" >
                <Box>
                    Logo
                </Box>
                <Flex>
                    {currentUser && <Text mx="5"><Link to="/">Home</Link> </Text>}
                    {currentUser && <Text mx="5"><Link to="/contact">Contact</Link> </Text>}
                    {currentUser && <Text mx="5"><Link to="/view-products">View Products</Link> </Text>}
                    {currentUser && <Text mx="5"><Link to="/add-product">Add Product</Link> </Text>}
                    {!currentUser && <Text mx="5"> <Link to="/login">Login</Link></Text>}
                    {!currentUser && <Text mx="5"><Link to="/signup">Sign up</Link> </Text>}
                    {currentUser && <Text mx="5" onClick={handleLogout} cursor="pointer"> Log out </Text>}
                    {/* <Link to="/">Home</Link> */}
                </Flex>
            </Flex> :
                <Flex className="navbar" justifyContent="space-between" alignItems="center" w="90%" m="auto" pt="3" >
                    <Box color="white">
                        Logo
                    </Box>
                    <Box>
                        <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>

                            {/* <HamburgerIcon /> */}
                            <Icon as={FaAlignRight} color="white"></Icon>
                        </Box>
                        <Drawer
                            isOpen={isOpen}
                            placement="right"
                            onClose={onClose}
                            finalFocusRef={btnRef}
                        >
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton />
                            </DrawerContent>
                        </Drawer>
                    </Box>

                </Flex>
            }

        </>
    )
}

export default Navbar
