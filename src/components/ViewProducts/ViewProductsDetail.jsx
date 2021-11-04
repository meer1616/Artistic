import { Box, Button, Flex, Text, Spinner, Input, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
// import { getDatabase, ref } from "firebase/database"
import { db } from '../../firebase/firebaseInit'
import { collection, getDocs } from 'firebase/firestore'

const ViewProductsDetail = () => {
    // const [itemRef, setItemRef] = useState([])
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [addToCartItems, setaddToCartItems] = useState([])
    // const listRef = ref(storage, 'images/');


    useEffect(() => {
        setLoading(true)
        async function getProducts() {
            try {

                const ProductArr = []

                const querySnapshot = await getDocs(collection(db, "artisGymProducts"));
                querySnapshot.forEach((doc) => {
                    ProductArr.push(doc.data())

                });

                setProducts(ProductArr)
                setLoading(false)
            }
            catch (e) {
                console.log("err", e);
            }
        }

        getProducts()

    }, [])


    const addToCart = (item) => {
        if (addToCartItems.length > 0) {
            const temp = addToCartItems.find(element => element.id === item.id)
            if (temp) {
                alert("same Item Found")
            }
            else {
                setaddToCartItems([...addToCartItems, item])
            }
        }
        else {
            setaddToCartItems([...addToCartItems, item])
        }

    }

    localStorage.setItem("gymCartItems", JSON.stringify(addToCartItems))

    if (loading) {
        return (
            <Flex justifyContent="center" alignItems="center" height="100vh" backgroundColor="lightgray">
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                />
            </Flex>
        )
    }



    return (
        <Box>
            <Box>
                {/* <Box backgroundColor="lightgray">
                    <Input w="30%" border="2px solid red"></Input>
                </Box> */}
                <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
                    {products.length === 0 ? <Box>No Products available</Box> :
                        <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
                            {products.map((item) => {
                                return (
                                    <Box borderRadius="2xl" boxShadow="0 0 5px gray" key={item.id} width={["100%", "100%", "50%", "30%"]} margin="10" p={["6", "5", "6", "10"]}>
                                        <Flex alignItems="center" justifyContent="center">
                                            <Image src={item.imgUrl} height="200px" width="400px" alt="image"></Image>
                                        </Flex>
                                        <Text mt="2"><span style={{ fontWeight: "bold" }}>Name: </span>{item.name}</Text>
                                        <Text><span style={{ fontWeight: "bold" }}>Title: </span>{item.title}</Text>
                                        <Text><span style={{ fontWeight: "bold" }}>Description: </span>{item.description}</Text>
                                        <Text><span style={{ fontWeight: "bold" }}>Address: </span>{item.address}</Text>
                                        <Text><span style={{ fontWeight: "bold" }}>Contact No: </span>{item.contactNo}</Text>
                                        {/* <Button onClick={() => addToCart(item)}>Add to cart</Button> <Button>Buy</Button> */}
                                    </Box>
                                )
                            })}</Flex>
                    }
                </Flex>

            </Box>
        </Box>
    )
}

export default ViewProductsDetail
