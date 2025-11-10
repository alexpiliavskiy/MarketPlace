import React, {useState} from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const FileUploadWithPreview = ({ images, onImagesChange }) => {
    const [imagesToDelete, setImagesToDelete] = useState([]);


    const handleFileChange = (event) => {
        const newFiles = Array.from(event.target.files);


        // Добавляем новые файлы в массив `images`
        onImagesChange([...images, ...newFiles], imagesToDelete);
    };

    const handleRemoveImage = (imageToRemove) => {
        if (!(imageToRemove instanceof File)) {
            setImagesToDelete(prev => {
                return [...prev, imageToRemove.id];
            })
        }
        // Удаляем файл или путь из массива `images`
        const updatedImages = images.filter((image) => image !== imageToRemove);
        onImagesChange(updatedImages, !(imageToRemove instanceof File) ? [...imagesToDelete, imageToRemove.id] : imagesToDelete);
    };

    return (
        <Box>
            <Button variant="contained" component="label">
                Upload Files
                <input type="file" hidden multiple onChange={handleFileChange} accept="image/*" />
            </Button>

            <Box mt={2}>
                {images && images.length > 0 && (
                    <Typography variant="h6">Uploaded and Selected Images:</Typography>
                )}
                {images && images.map((image, index) => (
                    <Box
                        key={index}
                        display="flex"
                        alignItems="center"
                        mt={1}
                        p={1}
                        border="1px solid #ccc"
                        borderRadius="4px"
                    >
                        <img
                            src={
                                image instanceof File
                                    ? URL.createObjectURL(image) // Для новых файлов
                                    : `${process.env.NEXT_PUBLIC_SERVER_API}/${image.path}` // Для существующих путей
                            }
                            alt={`Uploaded ${index}`}
                            style={{ width: 50, height: 50, objectFit: "cover", marginRight: 16 }}
                        />
                        <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {image instanceof File ? image.name : image.path}
                        </Typography>
                        <IconButton
                            onClick={() => handleRemoveImage(image)}
                            color="error"
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default FileUploadWithPreview;
