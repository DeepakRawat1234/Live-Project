import express from "express";
import upload from "../middleware/upload.js";
import Document from "../models/Document.js";

const router = express.Router();

router.post("/:userId", upload.single("document"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const newDoc = new Document({
  filename: req.file.originalname,
  filetype: req.file.mimetype,
  image: req.file.buffer
});


    await newDoc.save();
    res.json({ message: "Image stored directly in database" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Upload failed" });
  }
});

export default router;
