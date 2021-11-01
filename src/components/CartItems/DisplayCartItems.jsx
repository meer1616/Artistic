import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const DisplayCartItems = () => {


    const gymCartItems = JSON.parse(localStorage.getItem("gymCartItems")) || []
    const [removeFromCartItems, setRemoveFromCartItems] = useState(gymCartItems)

    const removeFromCart = (item) => {
        const arr = removeFromCartItems.filter(elem => elem != item)
        setRemoveFromCartItems(arr)
    }

    const removedItem = localStorage.setItem("gymCartItems", JSON.stringify(removeFromCartItems))

    return (
        <Box>
            {
                removeFromCartItems.length > 0 ? <Flex flexWrap="wrap" >
                    {removeFromCartItems.map(item => {
                        return (
                            <Box border="1px solid black" key={item.id} width="30%" margin="10">
                                <Text>{item.name}</Text>
                                <Text>{item.title}</Text>
                                <Text>{item.description}</Text>
                                <Text>{item.address}</Text>
                                <Text>{item.contactNo}</Text>
                                <Button onClick={() => removeFromCart(item)}>Remove</Button> <Button>Buy</Button>
                            </Box>
                        )
                    })}
                </Flex> : <Box><Text>Cart is Empty</Text></Box>
            }


        </Box>
    )
}

export default DisplayCartItems
