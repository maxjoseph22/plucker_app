import { useState } from "react";
import { uploadBirdSighting } from "../services/recipes"; 
// const BACKEND_URL = import.meta.env.BACKEND_URL; - hardcoded in and needs looking at

export const UploadImage = ({ token }) => {
  const [file, setFile] = useState(null); 
  const [uploadedImages, setUploadedImages] = useState([]); 
  const [error, setError] = useState(null); 
  const [birdName, setBirdName] = useState('');
  const [location, setLocation] = useState('');
  const current_user_string = localStorage.getItem("currentUser")
  const current_user = JSON.parse(current_user_string)

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
      formData.append("user_id", current_user.id)

      if (birdName) {
        formData.append("birdName", birdName); // Append bird name if provided
      }

      if (location) {
        formData.append("location", location); // Append location if provided
      }

      const result = await uploadBirdSighting(token, formData);
      console.log("Upload successful:", result);

      setUploadedImages((prevImages) => [...prevImages, result.image]);

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
            src={`http://localhost:8000/bird_uploads/${url}`}
            alt={`Uploaded ${index + 1}`}
            style={{ width: "150px", margin: "10px", borderRadius: "8px" }}
          />
        ))}
      </div>
    </div>
  );
};

// export default UploadImage;
