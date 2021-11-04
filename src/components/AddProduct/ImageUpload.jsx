import { Box, Button, Icon, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsFillCloudUploadFill } from "react-icons/bs"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase/firebaseInit';
const ImageUpload = () => {
    const [image, setImage] = useState({})
    const types = ['image/jpeg', 'image/png']

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            // console.log(e.target.files[0]);
            let selected = e.target.files[0];

            if (selected && types.includes(selected.type)) {
                // setFile(selected)
                setImage(e.target.files[0])
            }
            else {
                setImage(null)
                alert("Insert Images properly")
            }
        }
    }

    const handleUploadImage = () => {

        const metadata = {
            contentType: 'image/jpeg' || 'image/png'
        };

        const storageRef = ref(storage, 'images/' + image.name);
        const uploadTask = uploadBytesResumable(storageRef, image, metadata);

        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
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
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                });
            }
        );


    }
    console.log("image at end", image);

    return (
        <Box position="relative" w="7%" _hover={{ cursor: "pointer" }} >
            <Icon as={BsFillCloudUploadFill} _hover={{ cursor: "pointer" }} position="absolute" top="0" fontSize="5xl" ></Icon>
            {/* <BsFillCloudUploadFill position="absolute" top="0" /> */}
            <Input pl="12" opacity="0" type="file" onChange={handleImageChange} _hover={{ cursor: "pointer" }} w="80%"></Input>
            <Button onClick={handleUploadImage}>Upload</Button>
        </Box>
    )
}

export default ImageUpload
