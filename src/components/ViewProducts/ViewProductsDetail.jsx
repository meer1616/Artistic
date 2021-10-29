import { Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
// import fire from '../../firebase/firebaseInit'
import { fire } from '../../firebase/firebaseInit'
const ViewProductsDetail = () => {

    const [loading, setLoading] = useState(false)


    // const ref = firebase.firestore().collection("artisGymProducts")

    if (loading) {
        return <Text>loading...</Text>
    }

    return (
        <Box>
            ProductDetail
        </Box>
    )
}

export default ViewProductsDetail
