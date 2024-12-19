import {useState} from "react";
const BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:8000";

export const ImageForm = () => {
  const [file, setFile] = useState();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  const token = localStorage.getItem("token")

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("user_id", currentUser.id)
    formData.append("file", file);
    await fetch(`${BACKEND_URL}/files/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(formData),
    });
    // window.location.reload();
    console.log("PFP CHANGED:", JSON.stringify(formData))
  };
  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};
