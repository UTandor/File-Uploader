const axios = require('axios');
const fs = require('fs');

// Replace 'usman' with the actual username
const username = 'usman';

// Replace 'path/to/your/file.txt' with the path to your text file
const filePath = './haha.txt';

// Read the content of the file
const fileContent = fs.readFileSync(filePath, 'utf-8');

// Create a FormData object and append the file with the correct field name
const formData = new FormData();
formData.append('file', new Blob([fileContent], { type: 'text/plain' }), 'file.txt');

// Make a POST request to upload the file for the user
axios.post(`http://localhost:5000/files/${username}`, formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})
  .then(response => {
    console.log('File uploaded successfully. File ID:', response.data.fileId);
  })
  .catch(error => {
    console.error('Error uploading file:', error.message);
  });