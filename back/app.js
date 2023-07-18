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
const log=require('./log');
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
app.get("/proxies_lines", async (req, res) => {
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
function getFirstFiveLines(filePath) {
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(filePath, { encoding: 'utf8' });
    let lines = [];

    stream.on('data', (data) => {
      lines = data.split('\n').slice(0, 5);
      stream.close();
    });

    stream.on('close', () => {
      resolve(lines.map(JSON.parse));
    });

    stream.on('error', (error) => {
      reject(error);
    });
  });
}


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

app.get('/json', (req, res) => {
  log.info("hellow")
  const filePath = 'public/files/json.txt'; // Replace with your file path

  getFirstFiveLines(filePath)
    .then(lines => {
      res.json({ proxies:lines });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});
app.get('/date',(req,res)=>{
  let ts = Date.now();
  let date_time = new Date(ts);
let date = date_time.getDate();
let month = date_time.getMonth() + 1;
let year = date_time.getFullYear();
  res.json({date:year+'-'+month+'-'+date});
})

app.listen(3000, '0.0.0.0',() => {
  console.log('Server started on port 3000');
});
