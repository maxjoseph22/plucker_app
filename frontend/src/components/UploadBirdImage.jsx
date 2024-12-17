import { useState } from "react";
import { uploadUserFile } from "../services/users"; 

export const UploadImage = ({ token }) => {
  const [file, setFile] = useState(null); 
  const [uploadedImages, setUploadedImages] = useState([]); 
  const [error, setError] = useState(null); 
  const [birdName, setBirdName] = useState('');
  const [location, setLocation] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    setError(null);
    try {
      const formData = new FormData();
      formData.append("file", file);

      if (birdName) {
        formData.append("birdName", birdName); // Append bird name if provided
      }

      if (location) {
        formData.append("location", location); // Append location if provided
      }

      const result = await uploadUserFile(token, formData);
      console.log("Upload successful:", result);

      setUploadedImages((prevImages) => [...prevImages, result.fileUrl]);

      setFile(null);
      setBirdName('');
      setLocation('');
      event.target.reset(); 
    } catch (error) {
      console.error("Error uploading file:", error.message);
      setError("Failed to upload the file. Please try again.");
    }
  };

  return (
    <div className="upload-image-container">
      {/* Upload Form */}
      <form onSubmit={handleSubmit} className="upload-form">
        <label htmlFor="file-upload">Upload an image:</label>
        <input
          id="file-upload"
          type="file"
          accept="image/*" // Allow only image files
          onChange={handleFileChange}
        />
        <label htmlFor="bird-name">Bird Name (optional):</label>
        <input
          id="bird-name"
          type="text"
          value={birdName}
          onChange={(e) => setBirdName(e.target.value)}
          placeholder="Enter bird name (optional)"
        />
        <label htmlFor="location">Location (optional):</label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location (optional)"
        />
        <button type="submit">Upload</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      {/* Gallery Display */}
      <div className="gallery">
        {uploadedImages.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Uploaded ${index + 1}`}
            style={{ width: "150px", margin: "10px", borderRadius: "8px" }}
          />
        ))}
      </div>
    </div>
  );
};

// export default UploadImage;
