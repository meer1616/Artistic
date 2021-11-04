import { Box, Button, Flex, Icon, Image, Input, Text, useToast } from '@chakra-ui/react'
import { Formik, Form } from 'formik';
import React, { useState } from 'react'
import TextField from '../TextField/TextField'
import { BsFillCloudUploadFill } from "react-icons/bs"
import { v4 as uuid } from "uuid"
import { setDoc, doc } from "firebase/firestore"
import * as Yup from "yup"
import { db } from '../../firebase/firebaseInit';
import { useHistory } from 'react-router-dom';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase/firebaseInit';
import { useDropzone } from "react-dropzone";



const AddProductForm = () => {
    const toast = useToast()
    const history = useHistory()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [inputFields, setInputFields] = useState({})
    const [image, setImage] = useState(undefined)
    const [downloadUrl, setDownloadUrl] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    const [preview, setPreview] = useState("")
    const [previewTest, setPreviewTest] = useState(false)
    const [fileRej, setFileRej] = useState(false)

    const typesImage = ['image/jpeg', 'image/png']

    // const handleImageChange = (e) => {
    //     if (e.target.files[0]) {
    //         console.log("sds", e.target.files[0]);
    //         let selected = e.target.files[0];

    //         if (selected && types.includes(selected.type)) {
    //             // setFile(selected)
    //             setImage(e.target.files[0])
    //         }
    //         else {
    //             setImage(null)
    //             alert("Insert Images properly")
    //         }
    //     }
    // }

    const { getRootProps, getInputProps, fileRejections } = useDropzone({
        accept: 'image/jpeg, image/png',
        onDrop: (acceptedFiles) => {
            setImage(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
    });




    const initialValues = {
        name: "",
        title: "",
        description: "",
        address: "",
        contactNo: "",
        quantity: 1
    }

    const addDocument = (inputFields) => {

        try {
            console.log("inputFields in fun call", inputFields);
            // const docRef = await addDoc(collection(db, "artisGymProducts"), inputFields)
            setDoc(doc(db, "artisGymProducts", uuid()), inputFields);
            toast({
                position: "top-right",
                title: "Submited Successfully.",
                description: "You are successfully submited your product.",
                status: "success",
                duration: 4000,
                isClosable: true,
            })
            setInputFields(initialValues)
        }
        catch (e) {
            console.log("error in addDocument", e);
        }
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validateSchema = Yup.object({
        // id: Yup.string().required(),
        name: Yup.string().required("Name is Required ").min(4),
        title: Yup.string().required("Ttitle is Required ").min(4),
        description: Yup.string().required("Description is Required").min(4),
        address: Yup.string().required("Description is Required "),
        contactNo: Yup.string()
            .required("Contact Number is Required")
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(10, "to short")
            .max(10, "to long"),
        quantity: Yup.number().required("Quantity is Required"),
        // imageUrl: Yup.string().required("imageUrl is Required ")

    })



    const handleUploadImage = (values) => {
        if (image) {
            console.log("going Well");
            const metadata = {
                contentType: 'image/jpeg' || 'image/png'
            };

            const storageRef = ref(storage, 'images/' + image[0].name);
            const uploadTask = uploadBytesResumable(storageRef, image[0], metadata);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    switch (error.code) {
                        case 'storage/unauthorized':
                            break;
                        case 'storage/canceled':
                            break;
                        case 'storage/unknown':
                            break;

                    }
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                        console.log('File available at', downloadURL);
                        setImageUrl(downloadURL)
                        // url = downloadURL
                        setDownloadUrl(true)
                        setInputFields({ id: uuid(), createdAt: date, ...values })
                        // console.log("inputFields in submit", inputFields);
                        console.log("in formik submit ", imageUrl);
                        console.log("downloadUrl", downloadUrl);
                        // alert(JSON.stringify({ id: uuid(), createdAt: date, imgName: image.name, imgUrl: downloadURL, ...values }))
                        addDocument({ id: uuid(), createdAt: date, imgName: image[0].name, imgUrl: downloadURL, ...values })
                        setIsSubmitting(false)
                        history.push("/view-products")


                    });

                }
            );

        }
        else {
            alert("please upload image")
            setIsSubmitting(false)
            console.log("not going well");
        }


    }


    const date = new Date()
    // setPreview(image[0].preview)
    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <Box key={file.path}>
            {/* {file.path} - {file.size} bytes */}
            {errors.map(e => (
                <Text key={e.code}>{e.message}</Text>
            ))}
        </Box>
    ));
    console.log("image", image);

    if (image === undefined) {
    } else {
        console.log("image[0]", image[0]);

    }
    console.log("filerejection", fileRejectionItems.length)
    // if (fileRejectionItems.length === 1) {
    //     console.log("inLog", fileRejectionItems);
    //     setFileRej(true)
    //     // alert("please enter valid image")

    // }
    // console.log("image", image[0].preview || "");
    console.log("getRootProps", getRootProps());
    console.log("getInputProps", getInputProps());
    return (
        <Box w={["85%", "85%", "80%", "50%"]} m="auto">
            <Flex flexDir={["column-reverse", "column-reverse", "row", "row"]} border="1px solid lightgray" borderStyle="dashed" justifyContent="space-evenly" mt="5" position="relative" py="5">
                <Flex flexDir="column" alignItems="center" justifyContent="center" my="5" {...getRootProps()} _hover={{ cursor: "pointer" }} >
                    <Flex alignItems="center" justifyContent="center">
                        <Icon as={BsFillCloudUploadFill} _hover={{ cursor: "pointer" }} top="0" fontSize="5xl" ></Icon>

                    </Flex>
                    <Box>

                        <Input {...getInputProps()} pl="12" opacity="0" type="file" _hover={{ cursor: "pointer" }} w="80%"></Input>
                    </Box>
                    {/* <BsFillCloudUploadFill position="absolute" top="0" /> */}
                    {/* <Button onClick={handleUploadImage}>Upload</Button> */}
                    {/* <div>{imagesDisp}</div> */}

                    <Text mt="5">Drag and drop or Browse to choose a file</Text>
                </Flex>
                <Flex alignItems="center" justifyContent="center" w={["100%", "100%", "35%", "35%"]} py="2" border={["", "", "1px solid lightgray", "1px solid lightgray"]} borderStyle="dashed">

                    {image === undefined || image.length === 0 ? "" : <Image src={image[0].preview} alt="image" height="150px" width="250px" ></Image>}
                </Flex>

                {/* <ImageUpload /> */}

            </Flex>
            <Text fontSize="sm" color="blue.500" >{image === undefined || image.length === 0 ? "" : image[0].name}</Text>
            <Text textAlign="center" color="red"> {fileRejectionItems}</Text>

            <Formik

                initialValues={initialValues}
                validationSchema={validateSchema}
                onSubmit={(values) => {
                    setIsSubmitting(true)
                    handleUploadImage(values)
                }}
            >
                {({ resetForm }) => (

                    <Form  >
                        <Text mt="1" ml="1">Name <span style={{ color: "red" }} >*</span></Text>

                        <TextField placeholder="Name" name="name" type="text" />
                        <Text ml="1">Title <span style={{ color: "red" }} >*</span></Text>

                        <TextField placeholder="Title" name="title" type="text" />


                        <Text ml="1">Description <span style={{ color: "red" }} >*</span></Text>
                        <TextField placeholder="Description" name="description" type="text" />


                        <Text ml="1" ml="1" >Address <span style={{ color: "red" }} >*</span></Text>
                        <TextField placeholder="Address" name="address" type="text" />

                        <Flex flexDir={["column", "column", "row", "row"]}>
                            <Box w={["100%", "100%", "50%", "50%"]} mr="5" >

                                <Text ml="1" >Contact No <span style={{ color: "red" }} >*</span></Text>

                                <TextField placeholder="Contact Number" name="contactNo" type="number" />
                            </Box>
                            <Box w={["100%", "100%", "50%", "50%"]}>

                                <Text ml="1" >Quantity <span style={{ color: "red" }} >*</span></Text>
                                <TextField placeholder="Quantity" name="quantity" type="number" />
                            </Box>
                        </Flex>
                        <Text _hover={{ cursor: "pointer" }} mt="2" color="blue.500" textAlign="right" type="reset" onClick={resetForm}>
                            Reset all
                        </Text>

                        <Flex alignItems="center" justifyContent="center" my="2">


                            <Button colorScheme="blue" w={["100%", "100%", "60%", "60%"]} type="submit" isLoading={isSubmitting}  >Submit</Button>

                        </Flex>
                    </Form>
                )}

            </Formik>
        </Box>
    )
}

export default AddProductForm
