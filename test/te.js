const axios = require("axios");
const fs = require("fs");

const username = "Overly";

const filePath = "./haha.txt";

const fileContent = fs.readFileSync(filePath, "utf-8");

const formData = new FormData();
formData.append(
  "file",
  new Blob([fileContent], { type: "text/plain" }),
  "file.txt"
);

axios
  .post(`http://localhost:5000/files/${username}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  .then((response) => {
    console.log("File uploaded successfully. File ID:", response.data.fileId);
  })
  .catch((error) => {
    console.error("Error uploading file:", error.message);
  });
