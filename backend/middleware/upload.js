import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(), // 👈 store in RAM
  limits: { fileSize: 2 * 1024 * 1024 } // 2MB
});

export default upload;
