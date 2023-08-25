# Indian-ID-OCR-Script
The "id_ocr" project is a Node.js script that uses Optical Character Recognition (OCR) technology to extract details from government-issued identification cards such as Aadhar Card. The script uses the Tesseract OCR engine and the node-tesseract-ocr package to extract text from the image.

# Installation
Clone or download the repository from GitHub.
Install Node.js on your computer if you haven't already done so.
Run npm install to install the required dependencies.
# Usage
Save an image of the ID you want to extract details from in the images directory.
Open the index.js file and update the imageFile variable to point to the image you just saved.
Run node index.js to execute the script.
The script will output the extracted details in JSON format.
# Supported Government IDs
Aadhar Card
# Dependencies
node-tesseract-ocr - A Node.js package for using the Tesseract OCR engine.
# Examples
Here is an example of the JSON output from the script:

json
Copy code
{
  "idType": "AdharCard",
  "idNumber": "1234 5678 9101",
  "info": {
    "name": "John Doe",
    "gender": "MALE",
    "dob": "01/01/1990"
  }
}
# Contributing
If you want to contribute to this project, please create a pull request or open an issue on the GitHub repository.

# License
ISC License.
