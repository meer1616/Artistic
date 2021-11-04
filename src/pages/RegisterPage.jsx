import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Text, Box, Button, Flex, useToast } from "@chakra-ui/react"
import { Form, Formik } from 'formik'
import * as yup from "yup"
import { FaGoogle } from 'react-icons/fa'
import TextField from '../components/TextField/TextField'
// import Navbar from '../components/Navbar/Navbar'
import { Link, useHistory } from 'react-router-dom'
const RegisterPage = () => {
    const history = useHistory()
    const { register, signupWithGoogle } = useAuth()
    const toast = useToast()
    const [isLoading, setIsLoading] = useState(false)
    const [signupUser, setSignupUser] = useState({})

    const mounted = useRef(false)

    useEffect(() => {
        mounted.current = true
        return () => {
            mounted.current = false
        }
    }, [])

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
        password: yup
            .string()
            .required("password is required")
            .min(6, "password must be atleast 6 character"),
        // confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Password must match").
        // required("Confirm password is required")
    });

    localStorage.setItem("currentUser", JSON.stringify(signupUser))

    console.log("signupUser", signupUser);

    return (
        <>
            {/* <Navbar /> */}
            <Flex alignItems="center" justifyContent="center" height="100vh">
                <Box className="loginContainer" color="gray" p="10" borderRadius="2xl" w={["95%", "95%", "40%", "35%"]} m="auto" >
                    <Text fontSize="2xl" fontWeight="bold" textAlign="center">Sign Up</Text>
                    <Text w="80%" mt="3">
                        {/* Register yourself to have the best taste of Gymnastics In India */}
                    </Text>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            const { email, password } = values
                            setIsLoading(true)
                            register(email, password).then(res => {
                                console.log("res in register", res);
                                toast({
                                    position: "top-right",
                                    title: "Signup Successfully",
                                    description: "You are registered Successfully",
                                    status: "success",
                                    duration: 4000,
                                    isClosable: true,
                                })
                                setIsLoading(false)
                                history.push("/")

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
                            }).finally(() => {
                                mounted.current && setIsLoading(false)
                            })


                        }}
                    >
                        {formik => (
                            <Box>

                                {console.log(formik.values)}
                                <Form>
                                    <Text my="3" mt="8" >Your-email</Text>
                                    <TextField placeholder="abc@example.com" name="email" type="email" />
                                    <Text my="3">Password</Text>
                                    <TextField placeholder="atleast 6 character" name="password" type="password" />
                                    <Button colorScheme="messenger" mt="5" w="100%" isLoading={isLoading} type="submit">Submit</Button>
                                </Form>
                            </Box>
                        )}
                    </Formik>
                    <Text textAlign="center" mt="3">OR</Text>
                    <Button variant='outline'
                        my="3"
                        isFullWidth
                        colorScheme='red'
                        leftIcon={<FaGoogle />} onClick={() => {
                            signupWithGoogle().then(res => {
                                setSignupUser(res)
                                console.log("signupwithgoogle", res)
                                history.push('/')
                            }).catch(err => console.log(err))
                        }}>Sign in with Google</Button>
                    <Flex my="3">Already a Member ? <Text color="blue" mx="2"> <Link to="/login" login>Sign in</Link></Text> </Flex>

                </Box >
            </Flex >
        </>
    )
}

export default RegisterPage
