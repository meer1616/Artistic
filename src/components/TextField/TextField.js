import React from "react";
import { ErrorMessage, useField } from "formik";
import { Input, Box } from "@chakra-ui/react";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Box>
      {/* <Box border="1px" borderRadius="xl"> */}
      <Input
        autoComplete={field.name}
        {...field}
        {...props}
        border="1px"
      ></Input>
      {meta.touched && meta.error ? (
        <Box color="red" mx="2">
          <ErrorMessage name={field.name}></ErrorMessage>
        </Box>
      ) : (
        ""
      )}
      {/* </Box> */}
    </Box>
  );
};

export default TextField;
