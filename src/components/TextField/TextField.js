import React from "react";
import { ErrorMessage, useField } from "formik";
import { Input, Box } from "@chakra-ui/react";

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <Box>
            <Input autoComplete={field.name} {...field} {...props}></Input>
            {meta.touched && meta.error ? <Box color="red" mx="2"><ErrorMessage name={field.name}></ErrorMessage></Box> : ""}

        </Box>
    );
};

export default TextField;
