import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function ProductGallery({ image, setImage }) {
  const [previewUrls, setPreviewUrls] = useState([]);
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file));

    setPreviewUrls((prevUrls) => [...prevUrls, ...newPreviewUrls]);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);

    if (setImage) {
      setImage([...files, ...newFiles]);
    }
  };

  const handleRemoveImage = (index) => {
    const updatedPreviewUrls = previewUrls.filter((_, i) => i !== index);
    const updatedFiles = files.filter((_, i) => i !== index);

    previewUrls.forEach((url) => URL.revokeObjectURL(url));

    setPreviewUrls(updatedPreviewUrls);
    setFiles(updatedFiles);

    if (setImage) {
      setImage(updatedFiles);
    }
  };

  return (
    <div className="lg:col-span-2 flex flex-col gap-9 lg:w-[45rem] border-l-2 border-l-[#ECF3F3] pl-5">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#ECF3F3]"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            multiple
            onChange={handleFileChange}
          />
        </label>
      </div>

      <div className="flex flex-wrap gap-4 mt-4 border p-3">
        {previewUrls.length === 0 ? (
          <p className="text-gray-500">
            This is a preview area. Choose images to upload.
          </p>
        ) : (
          previewUrls.map((url, index) => (
            <div key={index} className="relative">
              <img
                src={url}
                alt={`Preview ${index}`}
                className="w-40 h-40 object-cover rounded"
              />
              <button
                onClick={() => handleRemoveImage(index)}
                className="absolute top-1 right-1 bg-white rounded-full p-1 text-gray-700 hover:bg-gray-300"
              >
                <AiOutlineClose className="w-5 h-5" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductGallery;
