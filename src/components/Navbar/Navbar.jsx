import { Flex, Box, Text, useToast, Icon, Image } from '@chakra-ui/react'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useMediaQuery, useDisclosure } from "@chakra-ui/react"
import { FaAlignRight } from "react-icons/fa"
import { GrUserAdd, GrView } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { IoLogInOutline } from "react-icons/io5"
import { MdAssignmentInd } from "react-icons/md"

import { FaHome } from "react-icons/fa"
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react"

const Navbar = () => {

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



    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    // console.log("currentUser in Nav", currentUser);
    return (
        <>
            {isLargerThan1280 ? <Flex color="white" className="navbar roboto" letterSpacing="wider" justifyContent="space-between" alignItems="center" w="90%" mt="5" m="auto" py="5" >
                <Box>
                    <Image className="icons" height="10" src="/M.svg"></Image>
                </Box>
                <Flex fontSize="xl">
                    {currentUser && <Text mx="5"><Link to="/">Home</Link> </Text>}
                    {currentUser && <Text mx="5"><Link to="/contact">Contact</Link> </Text>}
                    {currentUser && <Text mx="5"><Link to="/cart">Cart</Link> </Text>}
                    {currentUser && <Text mx="5"><Link to="/view-products">View Products</Link> </Text>}
                    {currentUser && <Text mx="5"><Link to="/add-product">Add Product</Link> </Text>}
                    {!currentUser && <Text mx="5"> <Link to="/login">Login</Link></Text>}
                    {!currentUser && <Text mx="5"><Link to="/signup">Sign up</Link> </Text>}
                    {currentUser && <Text mx="5" onClick={handleLogout} cursor="pointer"> Log out </Text>}
                    {/* <Link to="/">Home</Link> */}
                </Flex>
            </Flex> :
                <Flex className="navbar" justifyContent="space-between" alignItems="center" w="90%" m="auto" py="1" >
                    <Box color="white">
                        <Image className="icons" height="10" width="10" src="/M.svg"></Image>
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
                            <DrawerContent backgroundColor="black" color="white">
                                <Flex justifyContent="space-between" alignItems="center" mt="3" w="80%" m="10px auto" >
                                    <Box><Image className="icons" height="10" width="10" src="/M.svg"></Image></Box>
                                    <Box>
                                        <DrawerCloseButton />
                                    </Box>
                                </Flex>
                                <Box ml="5" mt="8" fontSize="2xl" className="navFont">

                                    {currentUser && <Flex alignItems="center"><Icon as={FaHome} /><Text mx="3"><Link to="/">Home</Link> </Text></Flex>}
                                    {/* {currentUser && <Text mx="5"><Link to="/contact">Contact</Link> </Text>} */}
                                    {/* {currentUser && <Text mx="5"><Link to="/cart">Cart</Link> </Text>} */}
                                    {currentUser && <Flex alignItems="center" ><Icon className="icons" as={GrView}></Icon><Text mx="3"><Link to="/view-products">View Products</Link> </Text></Flex>}
                                    {currentUser && <Flex alignItems="center" ><Icon className="icons" as={GrUserAdd} /><Text mx="3"><Link to="/add-product">Add Product</Link> </Text></Flex>}
                                    {!currentUser && <Flex ml="2" alignItems="center"><Icon as={IoLogInOutline} /><Text mx="3"> <Link to="/login">Login</Link></Text></Flex>}
                                    {!currentUser && <Flex ml="2" alignItems="center"><Icon as={MdAssignmentInd}></Icon><Text mx="3"><Link to="/signup">Sign up</Link> </Text></Flex>}
                                    {currentUser && <Flex alignItems="center"><Icon as={BiLogOut} /><Text mx="3" onClick={handleLogout} cursor="pointer"> Log out </Text></Flex>}
                                </Box>
                            </DrawerContent>
                        </Drawer>
                    </Box>

                </Flex>
            }

        </>
    )
}

export default Navbar
