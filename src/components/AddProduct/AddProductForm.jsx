import { Box, Button, Flex, Icon, Input, Text, useToast } from '@chakra-ui/react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react'
import TextField from '../TextField/TextField'
import { BsFillCloudUploadFill } from "react-icons/bs"
import { v4 as uuid } from "uuid"
import { addDoc, collection, onSnapshot, setDoc, doc } from "firebase/firestore"
import * as Yup from "yup"
import { db } from '../../firebase/firebaseInit';
import { useHistory } from 'react-router-dom';
import ImageUpload from './ImageUpload';


const AddProductForm = () => {
    const toast = useToast()
    const history = useHistory()
    // const [image, setImage] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [inputFields, setInputFields] = useState({})

    const initialValues = {
        // id: uuid(),
        name: "",
        title: "",
        description: "",
        address: "",
        contactNo: "",
        quantity: 1
    }

    const addDocument = async (inputFields) => {

        try {


            console.log("inputFields in fun call", inputFields);
            // const docRef = await addDoc(collection(db, "artisGymProducts"), inputFields)
            const docRef = await setDoc(doc(db, "artisGymProducts", uuid()), inputFields);
            toast({
                position: "top-right",
                title: "Submited Successfully.",
                description: "You are successfully submited your product.",
                status: "success",
                duration: 4000,
                isClosable: true,
            })
            setInputFields(initialValues)
            history.push("/view-products")

        }
        catch (e) {
            console.log("error in addDocument", e);
        }

        // try {
        //     const collectionRef = doc(db, 'artisGymProducts');
        //     console.log("collectionRef", collectionRef);
        //     // console.log("docRef", docRef);
        //     // const docRef = addDoc(collectionRef, inputFields);
        // } catch (e) {
        //     console.error("Error adding document: ", e);
        // }

    }



    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validateSchema = Yup.object({
        // id: Yup.string().required(),
        name: Yup.string().required("Name is Required ").min(4),
        title: Yup.string().required("Ttitle is Required ").min(4),
        description: Yup.string().required("Description is Required").min(4),
        address: Yup.string().required("Description is Required "),
        contactNo: Yup.string()
            .required("Contact Number is Required")
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(10, "to short")
            .max(10, "to long"),
        quantity: Yup.number().required("Quantity is Required")
    })

    // const handleImageChange = (e) => {
    //     if (e.target.files[0]) {
    //         console.log(e.target.files[0]);
    //         setImage(e.target.files[0])
    //     }
    // }

    // const handleUploadImage = () => {

    // }


    const date = new Date()
    console.log(date.toLocaleString())
    console.log(date);

    console.log("inputFields", inputFields);
    // console.log("image", image);
    return (
        <Box w={["85%", "85%", "80%", "50%"]} m="auto">
            <Flex border="1px solid lightgray" height="20vh" alignItems="center" justifyContent="center" mt="10" mb="3">
                {/* <Box position="relative" w="7%" _hover={{ cursor: "pointer" }} >
                    <Icon as={BsFillCloudUploadFill} _hover={{ cursor: "pointer" }} position="absolute" top="0" fontSize="5xl" ></Icon>
                    <Input pl="12" opacity="0" type="file" onChange={handleImageChange} _hover={{ cursor: "pointer" }} w="80%"></Input>
                    <Button onClick={handleUploadImage}></Button>
                </Box> */}

                <ImageUpload />
            </Flex>
            <Formik
                initialValues={initialValues}
                validationSchema={validateSchema}
                onSubmit={(values) => {
                    // setTimeout(() => {
                    setIsSubmitting(true)
                    // alert(JSON.stringify({ id: uuid(), ...values }, null, 2));
                    setInputFields({ id: uuid(), createdAt: date, ...values })
                    // console.log("inputFields in submit", inputFields);
                    addDocument({ id: uuid(), createdAt: date, ...values })
                    setIsSubmitting(false)

                    // }, 400);
                }}
            >
                {({ resetForm }) => (

                    <Form >
                        <Text ml="1">Name <span style={{ color: "red" }} >*</span></Text>
                        {/* <Field name="name" type="text" />
                <ErrorMessage name="name" /> */}

                        <TextField placeholder="Name" name="name" type="text" />
                        <Text ml="1">Title <span style={{ color: "red" }} >*</span></Text>
                        {/* <Field name="title" type="text" />
                <ErrorMessage name="title" /> */}

                        <TextField placeholder="Title" name="title" type="text" />


                        <Text ml="1">Description <span style={{ color: "red" }} >*</span></Text>
                        {/* <Field name="description" type="text" />
                <ErrorMessage name="description" /> */}
                        <TextField placeholder="Description" name="description" type="text" />


                        <Text ml="1" ml="1" >Address <span style={{ color: "red" }} >*</span></Text>
                        {/* <Field name="address" type="text" />
                <ErrorMessage name="address" /> */}
                        <TextField placeholder="Address" name="address" type="text" />

                        <Flex>
                            <Box w="50%" mr="5">

                                <Text ml="1" >Contact No <span style={{ color: "red" }} >*</span></Text>

                                {/* <Field name="contactNo" type="number" />
                <ErrorMessage name="number" /> */}
                                <TextField placeholder="Contact Number" name="contactNo" type="number" />
                            </Box>
                            <Box w="50%">

                                <Text ml="1" >Quantity <span style={{ color: "red" }} >*</span></Text>
                                {/* <Field name="contactNo" type="number" />
                <ErrorMessage name="number" /> */}
                                <TextField placeholder="Quantity" name="quantity" type="number" />
                            </Box>
                        </Flex>

                        <Flex alignItems="center" justifyContent="center" mt="10">


                            <Button w="50%" colorScheme="blue" type="submit" isLoading={isSubmitting} >Submit</Button>
                            <Button type="reset" onClick={resetForm}>
                                Reset All
                            </Button>
                        </Flex>
                    </Form>
                )}

            </Formik>
        </Box>
    )
}

export default AddProductForm
