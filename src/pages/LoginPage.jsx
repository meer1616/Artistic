import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Text, Box, Button, Flex, useToast, Image } from "@chakra-ui/react"
import { Form, Formik } from 'formik'
import * as yup from "yup"
import TextField from '../components/TextField/TextField'
// import Navbar from "../components/Navbar/Navbar"
import { Link, useHistory, useLocation } from 'react-router-dom'
import useMounted from '../hooks/useMounted'
const LoginPage = () => {
    const { login } = useAuth()
    // const [show, setShow] = React.useState(false)
    // const handleClick = () => setShow(!show)
    const toast = useToast()
    const location = useLocation()
    console.log(location);
    const [isLoading, setIsLoading] = useState(false)
    const mounted = useMounted()
    const history = useHistory()
    // const user = JSON.parse(localStorage.getItem('currentUser'))
    // console.log("user in login page ", user);

    const validationSchema = yup.object({
        email: yup
            .string()
            .email("Provide valid email")
            .required("Email is required")
            .test((value) => {
                const re =
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(value).toLowerCase());
            }),
        password: yup
            .string()
            .required("Password is required")
            .min(6, "password must be atleast 6 character"),
        // confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Password must match").
        // required("Confirm password is required")
    });
    // console.log("im in login");
    return (
        <>
            {/* <Navbar /> */}

            <Flex alignItems="center" justifyContent="center" height="100vh" className="loginOuterBox" w={["90%", "90%", "100%", "100%"]} m="auto" >
                {/* border="1px solid gray" color="gray" p="5" borderRadius="2xl" w="40%" m="auto" */}
                <Box className="loginContainer" p="10" borderRadius="2xl" m="auto">
                    <Box> <Image src="./Logo7.png" alt="logo" height="100px" width="100px" position="absolute" top="-16" left="40%" display={["none", "none", "block", "block"]} ></Image></Box>
                    <Text fontSize="2xl" fontWeight="bold" mt="5">Log in</Text>
                    <Text w={["100%", "100%", "80%", "80%"]} mt="3">
                        Login with your data that you have entered during registration
                    </Text>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            const { email, password } = values
                            setIsLoading(true)
                            login(email, password).then(res => {
                                console.log("res in register", res);
                                toast({
                                    position: "top-right",
                                    title: "Login successfull.",
                                    description: "You are successfully logged in.",
                                    status: "success",
                                    duration: 4000,
                                    isClosable: true,
                                })
                                setIsLoading(false)
                                history.push(location.state?.from ?? "/")
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
                                // setTimeout(() => {
                                //   mounted.current && setIsSubmitting(false)
                                //   console.log(mounted.current)
                                // }, 1000)
                                mounted.current && setIsLoading(false)
                            })


                        }}
                    >
                        {formik => (
                            <Box>
                                <Form>
                                    <Text my="3" mt="8" >Your-email</Text>
                                    <TextField placeholder="abc@example.com" name="email" type="email" />
                                    <Text my="3">Password</Text>
                                    {/* <TextField placeholder="atleast 6 character" name="password" type="password" /> */}
                                    <TextField placeholder="atleast 6 character" name="password" type="password" />
                                    {/* <TextField
                                        pr="4.5rem"
                                        type={show ? "text" : "password"}
                                        placeholder="Enter password"
                                    /> */}
                                    <Button colorScheme="messenger" mt="5" w="100%" isLoading={isLoading} type="submit">Log in</Button>
                                </Form>
                            </Box>
                        )}
                    </Formik>
                    <Text textAlign="center" mt="5">Don't have an account? <Link to="/signup" style={{ color: "rgb(37, 102, 224)" }}> Sign up</Link></Text>
                    <Text textAlign="center" mt="2" color="rgb(37, 102, 224)"><Link to="/forget-password">Forget password?</Link></Text>
                </Box >
            </Flex >
        </>
    )
}

export default LoginPage
