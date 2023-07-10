const express = require('express');
const { exec } = require('child_process');
const app = express();
const {verify} = require('hcaptcha');
const secret = '0x2b2A72F48D139388c7ec16FA948771abFc9CC3f2';
const bodyParser = require("body-parser");
const cors = require('cors');
app.use(cors());
const path = require('path'); // Require the 'path' module
const fs = require('fs'); // Require the 'fs' module
app.use(bodyParser.json());
app.post('/http', (req, res) => {
  const test = req.body['test'];
  verify(secret, test)
    .then((data) => {
      
      if (data.success === true) {
        console.log("here")
       res.download("public/files/http.txt")
      } else {
        console.log('verification failed');
      }
    })
    .catch(console.error);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
