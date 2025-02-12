import { useState } from "react";
import { FaFileImage, FaFileVideo, FaLink, FaFileAlt, FaLock } from "react-icons/fa";
import { useDropzone } from "react-dropzone";

const Upload = () => {
    const [selectedType, setSelectedType] = useState(null);
    // const [fileLink] = useState("");
    const [setFileLink] = useState("");

    const fileTypes = {
        image: ["image/jpeg", "image/png", "image/webp"],
        video: ["video/mp4"],
        document: ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/csv", "application/vnd.ms-excel"],
    };

    const handleDrop = (acceptedFiles) => {
        if (selectedType && fileTypes[selectedType].includes(acceptedFiles[0].type)) {
            alert(`Uploaded: ${acceptedFiles[0].name}`);
        } else {
            alert("Invalid file type!");
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleDrop,
        accept: selectedType ? fileTypes[selectedType] : undefined,
    });

    return (
        <div className="flex flex-col items-center">
            {/* Upload Box */}
            <div {...getRootProps()} className="border-dashed border-2 border-blue-500 p-6 w-64 text-center rounded-lg bg-gray-100 cursor-pointer">
                <input {...getInputProps()} />
                <FaFileAlt className="text-blue-500 text-4xl mx-auto" />
                <p className="text-gray-600 mt-2">Drag & Drop or Click to Upload</p>
                <p className="text-gray-500 text-sm mt-2 flex items-center justify-center">
                    <FaLock className="mr-2" /> Privacy guaranteed
                </p>
            </div>

            {/* Upload Options */}
            <div className="flex mt-4 gap-4">
                <button onClick={() => setSelectedType("image")} className="p-3 bg-blue-500 text-white rounded-full">
                    <FaFileImage className="text-2xl" />
                </button>
                <button onClick={() => setSelectedType("video")} className="p-3 bg-blue-500 text-white rounded-full">
                    <FaFileVideo className="text-2xl" />
                </button>
                <button onClick={() => {
                    const link = prompt("Enter file link:");
                    if (link) setFileLink(link);
                }} className="p-3 bg-blue-500 text-white rounded-full">
                    <FaLink className="text-2xl" />
                </button>
                <button onClick={() => setSelectedType("document")} className="p-3 bg-blue-500 text-white rounded-full">
                    <FaFileAlt className="text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default Upload;