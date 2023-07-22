import React, { useRef,useState } from 'react';
import HCaptcha from 'react-hcaptcha';
import axios from 'axios';
export function Webcaptcha(){
  
  const [token, settoken] = useState("");
  function handleVerificationSuccess(token,ekey){
  settoken(token);        
      }
      function handleClick() {
          // Perform action with the token value
          console.log(token);
          axios.post('http://localhost:3000/api/web/file', { test: token }, { responseType: 'blob' })
          .then(response => {
            // Extract the filename from the response headers
            const contentDisposition = response.headers['content-disposition'];
            const filename = contentDisposition
              ? contentDisposition.split('filename=')[1]
              : 'web.txt';
    
            // Create a blob URL for the file
            const url = window.URL.createObjectURL(new Blob([response.data]));
    
            // Create a temporary link and initiate the download
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
              })
              .catch(error => {
                // Handle any errors
                console.error('Error:', error);
              });
        }
        
  const captchaRef = useRef();

  
  

  return (
      <div>
      <HCaptcha
              ref={captchaRef}

        sitekey="29124554-1025-4a02-8fd2-d3c112b50c6a"
        onVerify={(token, ekey) => handleVerificationSuccess(token, ekey)}
      />
      <button onClick={() => handleClick()}>Donwload Web list</button>
    </div>
    
  );
}
export function HTTP() {
    const [token, settoken] = useState("");
    function handleVerificationSuccess(token,ekey){
    settoken(token);        
        }
        function handleClick() {
            // Perform action with the token value
            console.log(token);
            axios.post('https://proxiesfree.cc/api/http', { test: token }, { responseType: 'blob' })
            .then(response => {
              // Extract the filename from the response headers
              const contentDisposition = response.headers['content-disposition'];
              const filename = contentDisposition
                ? contentDisposition.split('filename=')[1]
                : 'http.txt';
      
              // Create a blob URL for the file
              const url = window.URL.createObjectURL(new Blob([response.data]));
      
              // Create a temporary link and initiate the download
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', filename);
              link.style.display = 'none';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
                })
                .catch(error => {
                  // Handle any errors
                  console.error('Error:', error);
                });
          }
          
    const captchaRef = useRef();
  
    
    
  
    return (
        <div>
        <HCaptcha
                ref={captchaRef}

          sitekey="29124554-1025-4a02-8fd2-d3c112b50c6a"
          onVerify={(token, ekey) => handleVerificationSuccess(token, ekey)}
        />
        <button onClick={() => handleClick()}>Donwload Proxies</button>
      </div>
      
    );
  }
export function Socks4() {
    const [token, settoken] = useState("");
    function handleVerificationSuccess(token,ekey){
    settoken(token);        
        }
        function handleClick() {
            // Perform action with the token value
            console.log(token);
            axios.post('https://proxiesfree.cc/socks4', { test: token }, { responseType: 'blob' })
            .then(response => {
              // Extract the filename from the response headers
              const contentDisposition = response.headers['content-disposition'];
              const filename = contentDisposition
                ? contentDisposition.split('filename=')[1]
                : 'http.txt';
      
              // Create a blob URL for the file
              const url = window.URL.createObjectURL(new Blob([response.data]));
      
              // Create a temporary link and initiate the download
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', filename);
              link.style.display = 'none';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
                })
                .catch(error => {
                  // Handle any errors
                  console.error('Error:', error);
                });
          }
          
    const captchaRef = useRef();
  
    
    
  
    return (
        <div>
        <HCaptcha
                ref={captchaRef}
              
          sitekey="29124554-1025-4a02-8fd2-d3c112b50c6a"
          onVerify={(token, ekey) => handleVerificationSuccess(token, ekey)}
        />
        <button onClick={() => handleClick()}>Donwload Proxies</button>
      </div>
      
    );
  }
export function Socks5() {
    const [token, settoken] = useState("");
    function handleVerificationSuccess(token,ekey){
    settoken(token);        
        }
        function handleClick() {
            // Perform action with the token value
            console.log(token);
            axios.post('https://proxiesfree.cc/socks5', { test: token }, { responseType: 'blob' })
            .then(response => {
              // Extract the filename from the response headers
              const contentDisposition = response.headers['content-disposition'];
              const filename = contentDisposition
                ? contentDisposition.split('filename=')[1]
                : 'http.txt';
      
              // Create a blob URL for the file
              const url = window.URL.createObjectURL(new Blob([response.data]));
      
              // Create a temporary link and initiate the download
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', filename);
              link.style.display = 'none';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
                })
                .catch(error => {
                  // Handle any errors
                  console.error('Error:', error);
                });
          }
          
    const captchaRef = useRef();
  
    
    
  
    return (
        <div>
        <HCaptcha
                ref={captchaRef}

          sitekey="29124554-1025-4a02-8fd2-d3c112b50c6a"
          onVerify={(token, ekey) => handleVerificationSuccess(token, ekey)}
        />
        <button onClick={() => handleClick()}>Donwload Proxies</button>
      </div>
      
    );
  }