import { Box, Button, Flex, Icon, Input, Text } from '@chakra-ui/react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react'
import TextField from '../TextField/TextField'
import { BsFillCloudUploadFill } from "react-icons/bs"
import { v4 as uuid } from "uuid"
import * as Yup from "yup"


const AddProductForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const initialValues = {
        // id: uuid(),
        name: "",
        title: "",
        description: "",
        address: "",
        contactNo: ""
    }
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validateSchema = Yup.object({
        // id: Yup.string().required(),
        name: Yup.string().required("Name is Required field").min(4),
        title: Yup.string().required("Ttitle is Required field").min(4),
        description: Yup.string().required("Description is Required field").min(4),
        address: Yup.string().required("Description is Required field"),
        contactNo: Yup.string()
            .required("required")
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(10, "to short")
            .max(10, "to long"),
    })

    const handleImageUpload = () => {
        console.log("working");
    }


    return (
        <Box w={["85%", "85%", "80%", "50%"]} m="auto">
            <Flex border="1px solid lightgray" height="20vh" alignItems="center" justifyContent="center" mt="10" mb="3">
                <Box position="relative" w="7%" _hover={{ cursor: "pointer" }} >
                    <Icon as={BsFillCloudUploadFill} _hover={{ cursor: "pointer" }} position="absolute" top="0" fontSize="5xl" ></Icon>
                    {/* <BsFillCloudUploadFill position="absolute" top="0" /> */}
                    <Input pl="12" opacity="0" type="file" _hover={{ cursor: "pointer" }} w="80%"></Input>

                </Box>
            </Flex>
            <Formik
                initialValues={initialValues}
                validationSchema={validateSchema}
                onSubmit={(values) => {
                    setTimeout(() => {
                        setIsSubmitting(true)
                        alert(JSON.stringify({ id: uuid(), ...values }, null, 2));
                        setIsSubmitting(false)

                    }, 400);
                }}
            >
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


                    <Text ml="1" >Contact No <span style={{ color: "red" }} >*</span></Text>
                    {/* <Field name="contactNo" type="number" />
                <ErrorMessage name="number" /> */}
                    <TextField placeholder="Contact Number" name="contactNo" type="number" />

                    <Flex alignItems="center" justifyContent="center" mt="10">


                        <Button w="50%" colorScheme="blue" type="submit" isLoading={isSubmitting} onClick={handleImageUpload}>Submit</Button>
                    </Flex>
                </Form>
            </Formik>
        </Box>
    )
}

export default AddProductForm
