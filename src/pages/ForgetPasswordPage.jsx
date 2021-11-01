import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Text, Box, Button, Flex, useToast } from "@chakra-ui/react"
import { Form, Formik } from 'formik'
import * as yup from "yup"
import TextField from '../components/TextField/TextField'
import Navbar from '../components/Navbar/Navbar'


const ForgetPasswordPage = () => {

    const { forgetPassword } = useAuth()
    const toast = useToast()
    const [isLoading, setIsLoading] = useState(false)

    const validationSchema = yup.object({
        email: yup
            .string()
            .email("Provide valid email")
            .required("email is required")
            .test((value) => {
                const re =
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(value).toLowerCase());
            }),
    });
    return (
        <>
            <Box backgroundColor="black">
                <Navbar />

            </Box>
            <Flex alignItems="center" justifyContent="center" height="90.6vh" >
                <Box boxShadow="0px 1px 5px lightgray" color="gray" p="5" borderRadius="2xl" w={["90%", "90%", "80%", "40%"]} m="auto" >
                    <Text fontSize="2xl" fontWeight="bold">Forget Password</Text>

                    <Formik
                        initialValues={{ email: "" }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            const { email } = values
                            console.log("success", email);
                            setIsLoading(true)
                            forgetPassword(email).then(res => {
                                console.log("res in register", res);
                                toast({
                                    position: "top-right",
                                    title: "Message sent",
                                    description: `Meaasge at ${email} is successfully sent `,
                                    status: "success",
                                    duration: 4000,
                                    isClosable: true,
                                })
                                setIsLoading(false)
                            }).catch(err => {
                                setIsLoading(true)
                                toast({
                                    position: "top-right",
                                    title: "Some error occured",
                                    description: `${err.message}`,
                                    status: "error",
                                    duration: 6000,
                                    isClosable: true,
                                })
                                console.log("err in register", err);
                                setIsLoading(false)
                            })


                        }}
                    >
                        {formik => (
                            <Box>

                                {console.log(formik.values)}
                                <Form>
                                    <Text my="3" mt="8" >Your-email</Text>
                                    <TextField placeholder="abc@example.com" name="email" type="email" />
                                    <Button colorScheme="messenger" mt="5" w="100%" isLoading={isLoading} type="submit">Submit</Button>
                                </Form>
                            </Box>
                        )}
                    </Formik>

                </Box >
            </Flex >
        </>
    )
}

export default ForgetPasswordPage
