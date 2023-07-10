const express = require('express');
const { exec } = require('child_process');
const app = express();
const {verify} = require('hcaptcha');
const secret = '0x2b2A72F48D139388c7ec16FA948771abFc9CC3f2';
const bodyParser = require("body-parser");
const cors = require('cors');
app.use(cors());
const path = require('path'); // Require the 'path' module
const fs = require('fs');
const http =require('http'); // Require the 'fs' module
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
})
app.get("/http_lines", async (req, res) => {
  try {
    console.log('here');
    const f1 = await countLines('public/files/http.txt');
    const f2 = await countLines('public/files/socks4.txt');
    const f3 = await countLines('public/files/socks5.txt');

    const jsonResponse = JSON.stringify({ http: f1,socks4:f2,socks5:f3 });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(jsonResponse);
  } catch (error) {
    console.log('error:', error);
  }
});


function countLines(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.split('\n').length;
        resolve(lines);
      }
    });
  
  });
}

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
