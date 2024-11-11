import { useState } from "react";

const FileUpload = ({ onImageChange }) => {
  const [fileName, setFileName] = useState("No file chosen");
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setError(""); // Clear any previous errors

    if (file) {
      // Basic file size validation (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setError("File size must be less than 5MB");
        setFileName("No file chosen");
        event.target.value = ""; // Reset input
        onImageChange(null);
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        onImageChange(base64String);
      };
      reader.readAsDataURL(file);
      setFileName(file.name);
    } else {
      setFileName("No file chosen");
      onImageChange(null);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFileName("No file chosen");
    setError("");
    onImageChange(null);
    // Reset the file input
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = "";
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-sm p-4">
      {/* Main upload button */}
      <label
        className={`
        flex flex-col items-center w-full
        cursor-pointer rounded-lg border-2 border-dashed p-
        ${
          error
            ? "border-red-300 bg-red-50"
            : fileName !== "No file chosen"
            ? "border-green-300 bg-green-50"
            : "border-gray-300 bg-gray-100"
        }
        hover:bg-gray-200 transition-colors
      `}
      >
        {/* File name display */}
        <span className="text-sm font-medium mb-2">
          {fileName !== "No file chosen" ? "Selected file:" : "Choose a file"}
        </span>
        <span
          className={`text-sm ${
            fileName !== "No file chosen" ? "text-green-600" : "text-gray-500"
          }`}
        >
          {fileName}
        </span>

        {/* Hidden file input */}
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          aria-label="Upload file"
        />
      </label>

      {/* Error message */}
      {error && (
        <div className="text-red-500 text-sm" role="alert">
          {error}
        </div>
      )}

      {/* Reset button - only show when a file is selected */}
      {fileName !== "No file chosen" && (
        <button
          onClick={handleReset}
          className="text-sm text-gray-500 hover:text-gray-700"
          aria-label="Clear selection"
        >
          Clear selection
        </button>
      )}

      {/* File size limit info */}
      <span className="text-xs text-gray-400">Maximum file size: 5MB</span>
    </div>
  );
};

export default FileUpload;
