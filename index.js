const fs = require('fs');
const Tesseract = require('node-tesseract-ocr');


const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}

//------------Load the image file---------------------------------------------

const imageFile = './images/adhar.jpg';
const imageBuffer = fs.readFileSync(imageFile);



//------Tesseract to recognize text from Image---------------------------------- 
  Tesseract
      .recognize(imageBuffer, "eng", { tessjs_create_pdf: '1' })
      .then((text) => {
        const extractedText = text;
        const idType = 'AdharCard';
        const idNumber = getIdNumber(extractedText);
        const name = getName(extractedText);
        const gender = getGender(extractedText);
        const dob = getDOB(extractedText);
  
        const output = {
          idType,
          idNumber,
          info: {
            name,
            gender,
            dob
          }
        };
        
        console.log(output);
      })
      .catch((error) => {
        console.log(error.message);
        throw error;
      });


//----------------------Functions to get Details--------------------------------------------

  function getIdNumber(text) {
    const idNumberRegex = /\n+\d{4}\s+\d{4}\s+\d{4}\s/; // Aadhaar number regex pattern
    const match = text.match(idNumberRegex);
    if (match) {
      return match[0].replace(/\s/g, '');
    }
    return null;
  }
  
  function getName(text) {
    const nameRegex = /(^(\n[A-Z]{1}\w+\s)\w+\s\w+)/m; // Name regex pattern
    const match = text.match(nameRegex);
    if (match) {
      return match[0].trim();
    }
    return null;
  }
  
  function getGender(text) {
    const genderRegex = /MALE|FEMALE|TRANSGENDER|Male|Female/; // Gender regex pattern
    const match = text.match(genderRegex);
    if (match) {
      return match[0];
    }
    return null;
  }
  
  function getDOB(text) {
    const dobRegex = /\s+(\d{2}\/\d{2}\/\d{4})/; // Date of birth regex pattern
    const match = text.match(dobRegex);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  }
