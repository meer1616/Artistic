import { Box, Button, Flex, Text, Spinner, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getDatabase, ref } from "firebase/database"
import { db } from '../../firebase/firebaseInit'
import { collection, getDocs } from 'firebase/firestore'
const ViewProductsDetail = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [addToCartItems, setaddToCartItems] = useState([])

    // const test = collection(db, "artisGymProducts");
    // console.log("test", test);


    useEffect(() => {
        setLoading(true)
        async function getProducts() {
            try {

                // const prod = collection(db, "artisGymProducts")
                // console.log(prodSnap);
                // const prodSnap = await getDocs(prod)
                // const ProductList = prodSnap.docs.map((item) => {

                //     return item.data()
                // })

                // console.log("productList", ProductList);
                // setProducts(ProductList)

                const ProductArr = []

                const querySnapshot = await getDocs(collection(db, "artisGymProducts"));
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    ProductArr.push(doc.data())
                    // console.log(doc);
                    // console.log(doc.id, " => ", doc.data());

                });

                setProducts(ProductArr)
                setLoading(false)
            }
            catch (e) {
                console.log("err", e);
            }
        }
        getProducts()
        console.log("products", products);

    }, [])

    const addToCart = (item) => {
        if (addToCartItems.length > 0) {
            console.log("item.id", item.id);
            const temp = addToCartItems.find(element => element.id === item.id)
            console.log("temp", temp);
            if (temp) {
                alert("same Item Found")
            }
            else {
                setaddToCartItems([...addToCartItems, item])
                // localStorage.setItem("cartItems",)
            }
        }
        else {
            setaddToCartItems([...addToCartItems, item])
        }

    }
    // console.log("cartItems", addToCartItems);

    console.log("addToCartItems", addToCartItems);
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
                <Box backgroundColor="lightgray">
                    <Input w="30%" border="2px solid red"></Input>
                </Box>
                <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
                    {products.length === 0 ? <Box>No Products available</Box> :
                        <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
                            {products.map((item) => {
                                return (
                                    <Box border="1px solid black" key={item.id} width="30%" margin="10">
                                        <Text>{item.name}</Text>
                                        <Text>{item.title}</Text>
                                        <Text>{item.description}</Text>
                                        <Text>{item.address}</Text>
                                        <Text>{item.contactNo}</Text>
                                        <Button onClick={() => addToCart(item)}>Add to cart</Button> <Button>Buy</Button>
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
