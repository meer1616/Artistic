import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Text, Box, Button, Flex, useToast } from "@chakra-ui/react"
import { Form, Formik } from 'formik'
import * as yup from "yup"
import TextField from '../components/TextField/TextField'
import { useHistory, useLocation } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
const ResetPassword = () => {
    const history = useHistory()

    function useQuery() {
        const location = useLocation()
        return new URLSearchParams(location.search)

    }
    const query = useQuery()
    console.log("query", query.get('mode'));
    console.log("query", query.get('oobCode'));
    console.log("query", query.get('continueUrl'));

    const { resetPassword } = useAuth()
    const toast = useToast()
    const [isLoading, setIsLoading] = useState(false)

    const validationSchema = yup.object({
        // email: yup
        //     .string()
        //     .email("Provide valid email")
        //     .required("email is required")
        //     .test((value) => {
        //         const re =
        //             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //         return re.test(String(value).toLowerCase());
        //     }),
        password: yup
            .string()
            .required("password is required")
            .min(6, "password must be atleast 6 character"),
        // confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Password must match").
        // required("Confirm password is required")
    });

    return (
        <>
            <Navbar />
            <Flex alignItems="center" justifyContent="center" height="100vh">
                <Box border="1px solid gray" color="gray" p="5" borderRadius="2xl" w="40%" m="auto" >
                    <Text fontSize="2xl" fontWeight="bold">Reset Password</Text>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            const { password } = values
                            console.log("password submited");
                            console.log(password);

                            resetPassword(query.get('oobCode'), password).then(res => {
                                console.log("res", res)
                                toast({
                                    position: "top-right",
                                    title: "password changed.",
                                    description: "Password has been changed successfully.",
                                    status: "success",
                                    duration: 4000,
                                    isClosable: true,
                                })
                                history.push("/login")
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
                                console.log("err in password", err);
                                setIsLoading(false)
                            })
                        }}
                    >
                        {formik => (
                            <Box>

                                {/* {console.log(formik.values)} */}
                                <Form>
                                    <Text my="3">Password</Text>
                                    <TextField placeholder="atleast 6 character" name="password" type="password" />
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

export default ResetPassword
