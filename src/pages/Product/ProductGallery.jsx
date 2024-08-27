import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function ProductGallery({ setImage }) {
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prevUrls) => [...prevUrls, ...newPreviewUrls]);
    console.log(newFiles);
    setImage((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemoveImage = (index) => {
    const newPreviewUrls = [...previewUrls];
    const newFiles = [...setImage];

    newPreviewUrls.splice(index, 1);
    newFiles.splice(index, 1);

    setPreviewUrls(newPreviewUrls);
    setImage(newFiles);
  };

  return (
    <div className="lg:col-span-2 flex flex-col gap-9 border-l-2 border-l-[#ECF3F3] pl-5">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#ECF3F3]"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
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
            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
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
