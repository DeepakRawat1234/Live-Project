import React from 'react'
import computer from "../../assets/Uploder/computer.png"
import file from '../../assets/Uploder/file.png'
const FileUpload = () => {
  return (
    <div className='file-box'>
        <div className='upload-box'>
            <div className='computer-box'><img src={computer} alt=""  className='computer-img'/></div>
            <div><h3 className='upload-h3'>Continue Uploading</h3>
            <h2 className='upload-h2'>Upload photo of your ID From this Device</h2>
            <div className='fileimg-box'><img src={file} alt="" /><button className='upload-btn'>UPLOAD PHOTO</button>
            <input type="file" className='photo-input' placeholder='UPLOAD PHOTO'/> 
            </div>
            <button className='finish-btn'>FINISH</button>
            </div>
        </div>
    </div>
  )
}

export default FileUpload