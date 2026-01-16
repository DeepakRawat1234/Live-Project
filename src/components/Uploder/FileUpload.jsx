import React, { useState } from 'react'
import computer from "../../assets/Uploder/computer.png"
import file from '../../assets/Uploder/file.png'
import { useNavigate } from 'react-router-dom'

const FileUpload = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  // ✅ get userId (saved after login)
  const userId = localStorage.getItem("userId");

  // File selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Upload to backend
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file");
      return;
    }

    

    const formData = new FormData();
    formData.append("document", selectedFile);

    try {
      const res = await fetch(
        `http://localhost:5000/api/upload/${userId}`,
        {
          method: "POST",
          body: formData
        }
      );

      const data = await res.json();
      alert(data.message);

      navigate("/loginhome");
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
    <div className='file-box'>
      <div className='upload-box'>
        <div className='computer-box'>
          <img src={computer} alt="" className='computer-img'/>
        </div>

        <div>
          <h3 className='upload-h3'>Continue Uploading</h3>
          <h2 className='upload-h2'>
            Upload photo of your ID  (png, jpg, jepg Only)
          </h2>

          <div className='fileimg-box'>
            <img src={file} alt="" />

            <input
              type="file"
              className='photo-input'
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>

          <button className='finish-btn' onClick={handleUpload}>
            FINISH
          </button>
        </div>
      </div>
    </div>
  )
}

export default FileUpload;
