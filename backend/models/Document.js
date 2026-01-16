import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
 
  filename: String,
  filetype: String,
  image: Buffer,        // 👈 ACTUAL IMAGE
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Document", documentSchema);
