import { useState } from "react";
import { uploadBirdSighting } from "../services/recipes"; 
// const BACKEND_URL = import.meta.env.BACKEND_URL; - hardcoded in and needs looking at
import { recognizeBirdFile } from "../services/users";

export function UploadImage() {
  const [file, setFile] = useState(null);
  const [birdName, setBirdName] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]); 
  const current_user_string = localStorage.getItem("currentUser")
  const current_user = JSON.parse(current_user_string)
  const token = localStorage.getItem("token")

  // Handle file selection and bird recognition
  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setBirdName(""); // Reset previous bird name
    setError(null);

  //  API STUFF THAT DOESN'T WORK
  // 
  //   if (selectedFile) {
  //     setIsLoading(true);
  //     try {
  //       const result = await recognizeBirdFile("API_URL", selectedFile);
  //       setBirdName(result.birdName || "Unknown Bird");
  //     } catch {
  //       setError("Bird recognition failed.");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  };

  // Upload file with bird name and location
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select an image.");

    try {
      const formData = new FormData();
      formData.append("file", file);

// API RELATED CODE vv

//       formData.append("birdName", birdName);
//       formData.append("location", location);
//       await uploadUserFile(token, formData);
//       alert("File uploaded successfully!");

      formData.append("user_id", current_user.id)

// THIS CODE CAN POSSIBLY GO WHEN THE API WORKS v

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
      setBirdName("");
      setLocation("");
    } catch {
      setError("Upload failed. Please try again.");
    }
  };

  return (
    <div className='button-container'>
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
    </div>
    )
    }

//       <div className="gallery">
//         {uploadedImages.map((url, index) => (
//           <img
//             key={index}
//             src={`http://localhost:8000/bird_uploads/${url}`}
//             alt={`Uploaded ${index + 1}`}
//             style={{ width: "150px", margin: "10px", borderRadius: "8px" }}
//           />
//         ))}
//       </div>
// );