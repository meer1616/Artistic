import { Box, Text } from "@chakra-ui/react";

const ContactDeveloper = () => {
    return <Box>
        <Text>Scan to contact Developer</Text>
        <img src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example " alt="google" />
    </Box>;
};

export default ContactDeveloper;
