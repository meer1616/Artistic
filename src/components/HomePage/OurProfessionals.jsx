import { Box, Image, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const OurProfessionals = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <Box mb={["10", "12", "16", "20"]} >
            <Text textAlign="center" fontSize={["2xl", "2xl", "3xl", "4xl"]} fontWeight="semibold" color="blackAlpha.800">Our Professionals</Text>
            {/* <Text fontSize="3xl" fontWeight="bold" my="5" color="crimson" textAlign="center">Our Professionals</Text> */}

            <Carousel

                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                removeArrowOnDeviceType="desktop"
                autoPlay={true}
                // customButtonGroup={<CustomButtonGroupAsArrows />}
                renderButtonGroupOutside={true}
                arrows={false}
                dotListClass="customDot"
                itemClass="itemClassDot"
            >
                {/* {ProfessionalsData.map((item) => {
                return (

                    <Box border="1px">
                        <Text >{item.name} </Text>
                        <Text >{item.Experience} </Text>
                        <Text >{item.description} </Text>

                    </Box>

                )


            })} */}
                <Box border="1px" mx={["10", "10", "16", "16"]} my="10" p={["8", "8", "10", "10"]} borderRadius="2xl" backgroundColor="black" color="white">
                    <Flex alignItems="center" justifyContent="center">

                        <Image src="./w6.jpg" alt="img" ></Image>
                    </Flex>

                    <Text>Mistry Manthan</Text>
                    <Text>Experience of 10 Years</Text>
                    <Text>Manthan Mistry is a National Judge as well as top 8 player of India .He is a State Champion and also a good human</Text>
                </Box>
                <Box border="1px" mx={["10", "10", "16", "16"]} my="10" p={["8", "8", "10", "10"]} borderRadius="2xl" backgroundColor="black" color="white">
                    <Flex alignItems="center" justifyContent="center">

                        <Image src="./w6.jpg" alt="img" ></Image>
                    </Flex>

                    <Text>Patel Kaushal</Text>
                    <Text>Experience of 14 Years</Text>
                    <Text>Manthan Mistry is a National Judge as well as top 8 player of India .He is a State Champion and also a good human</Text>
                </Box>
                <Box border="1px" mx={["10", "10", "16", "16"]} my="10" p={["8", "8", "10", "10"]} borderRadius="2xl" backgroundColor="black" color="white">
                    <Flex alignItems="center" justifyContent="center">

                        <Image src="./w6.jpg" alt="img" ></Image>
                    </Flex>

                    <Text> Patel Meer</Text>
                    <Text>Experience of 12 Years</Text>
                    <Text>Manthan Mistry is a National Judge as well as top 8 player of India .He is a State Champion and also a good human</Text>
                </Box>
                <Box border="1px" mx={["10", "10", "16", "16"]} my="10" p={["8", "8", "10", "10"]} borderRadius="2xl" backgroundColor="black" color="white">
                    <Flex alignItems="center" justifyContent="center">

                        <Image src="./w6.jpg" alt="img"></Image>
                    </Flex>

                    <Text> Kohei Uchimura</Text>
                    <Text>Experience of 100 Years</Text>
                    <Text>Manthan Mistry is a National Judge as well as top 8 player of India .He is a State Champion and also a good human</Text>
                </Box>
                <Box border="1px" mx={["10", "10", "16", "16"]} my="10" p={["8", "8", "10", "10"]} borderRadius="2xl" backgroundColor="black" color="white">
                    <Flex alignItems="center" justifyContent="center">

                        <Image src="./w6.jpg" alt="img" ></Image>
                    </Flex>
                    <Text> Sam Mikulak</Text>
                    <Text>Experience of 50 Years</Text>
                    <Text>Manthan Mistry is a National Judge as well as top 8 player of India .He is a State Champion and also a good human</Text>
                </Box>
            </Carousel>
        </Box>
    )
}

export default OurProfessionals
