import Fade from "react-reveal/Fade";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";

const About = () => {
    const history = useHistory();

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const handleJoinNow = () => {
        if (currentUser) {
            // alert("You are already logged In ")
            history.push("/enroll-now");
        } else {
            history.push("/login");
        }
    };

    return (
        <Flex
            height={["", "", "", "100vh"]}
            className="roboto"
            alignItems="center"
            w={["95%", "95%", "90%", "80%"]}
            m="auto"
            justifyContent="space-between"
            flexDir={["column-reverse", "column-reverse", "row", "row"]}
        >
            <Box w={["90%", "90%", "40%", "40%"]}>
                <Fade>
                    <Text
                        fontSize={["2xl", "2xl", "xl", "3xl"]}
                        fontWeight="bold"
                        my="5"
                        color="crimson"
                    >
                        About.
                    </Text>
                </Fade>
                <Fade delay={100}>
                    <Text
                        fontSize={["xl", "2xl", "2xl", "4xl"]}
                        className="boldFont"
                        opacity="0.8"
                        color="black"
                    >
                        Number of Benefits of Gymnastics{" "}
                    </Text>
                </Fade>
                <Fade delay={100}>
                    <Text
                        border="2px solid black"
                        w="7%"
                        backgroundColor="black"
                        my="2"
                    ></Text>
                </Fade>
                <Fade delay={200}>
                    <Text my="5" color="gray">
                        Gymnastics creates major benefits for both your body and mind. It’s
                        a great practice to stay fit, build mental focus, and even fight off
                        a wide range of diseases. Increases Your Flexibility, Improves Bone
                        Health, Builds Strength, Helps To Prevent Disease, Builds Personal
                        Discipline, Develops Greater Coordination, Encourages Focus.
                    </Text>
                </Fade>
                <Button
                    onClick={handleJoinNow}
                    borderRadius="20"
                    px="7"
                    boxShadow="lg"
                    _hover={{ color: "white", backgroundColor: "gray" }}
                    backgroundColor="crimson"
                    color="white"
                    mb={["8", "8", "", ""]}
                >
                    Join Now
                </Button>
            </Box>
            <Box w={["100%", "100%", "50%", "50%"]}>
                <Fade>
                    <Flex
                        position="relative"
                        justifyContent="center"
                        alignItems="center"
                        mt={["16", "16", "", ""]}
                    >
                        <Box zIndex="-1">
                            {" "}
                            <Image
                                src="./crimsonsq3.png"
                                position="absolute"
                                top={["-7", "-9", "-10", "-12"]}
                                w="40%"
                                left="2"
                            ></Image>{" "}
                        </Box>
                        <Box zIndex="-1">
                            {" "}
                            <Image
                                src="./crimsonsq3.png"
                                position="absolute"
                                bottom={["-7", "-9", "-10", "-12"]}
                                w="40%"
                                right="2"
                            ></Image>{" "}
                        </Box>

                        <Image
                            boxShadow="0 0 15px gray"
                            src="./w3.jpg"
                            alt="image"
                            w="80%"
                        ></Image>
                    </Flex>
                </Fade>
            </Box>
        </Flex>
    );
};

export default About;
