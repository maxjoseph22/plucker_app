import { useState } from "react";
import { uploadUserFile } from "../services/users";
import { recognizeBirdFile } from "../services/users";

const UploadImage = ({ token }) => {
  const [file, setFile] = useState(null);
  const [birdName, setBirdName] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle file selection and bird recognition
  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setBirdName(""); // Reset previous bird name
    setError(null);

    if (selectedFile) {
      setIsLoading(true);
      try {
        const result = await recognizeBirdFile("API_URL", selectedFile);
        setBirdName(result.birdName || "Unknown Bird");
      } catch {
        setError("Bird recognition failed.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Upload file with bird name and location
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select an image.");

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("birdName", birdName);
      formData.append("location", location);

      await uploadUserFile(token, formData);
      alert("File uploaded successfully!");
      setFile(null);
      setBirdName("");
      setLocation("");
    } catch {
      setError("Upload failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
      <label>Upload Bird Image:</label>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {isLoading && <p>Recognizing bird...</p>}

      <label>Bird Name:</label>
      <input
        type="text"
        value={birdName}
        onChange={(e) => setBirdName(e.target.value)}
        placeholder="Auto-filled or enter manually"
      />

      <label>Location:</label>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
      />

      <button type="submit" disabled={isLoading}>Upload</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default UploadImage;
