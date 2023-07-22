import { useEffect,useRef,useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HCaptcha from 'react-hcaptcha';
import { HTTP,Socks4,Socks5, Webcaptcha } from "./hcaptcha";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "0px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
export default function Lines() {

    const [lineCount, setLineCount] = useState(0);
  
    useEffect(() => {
      // Make API call to get the number of lines
      fetch('https://proxiesfree.cc/api/proxies_lines')
        .then(response => response.json())
        .then(data => {
          // Update the component state with the number of lines
          setLineCount(data.http);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, []);
  
    return (
      <div>
        <p>Number of lines: {lineCount}</p>
      </div>
    );
  }
function Lines_Web() {

    const [lineCount, setLineCount] = useState(0);
  
    useEffect(() => {
      // Make API call to get the number of lines
      fetch('http://localhost:3000/api/web/lines')
        .then(response => response.json())
        .then(data => {
          // Update the component state with the number of lines
          setLineCount(data.total);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, []);
  
    return (
      <div>
        <p>Number of lines: {lineCount}</p>
      </div>
    );
  }

export function BasicCardweb() {
  const [dates, setdates] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/date')
      .then(response => response.json())
      .then(data => {
        setdates(data.date);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <Card sx={{ width: 400, height: 400 }}>
  <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Free weblist file  
        </Typography>
        <Lines_Web/>
        <Typography variant="h5" component="div">
        <p>Laste date checked: {dates}</p>
        </Typography>
        <Typography variant="body2">
          <br />
        </Typography>
      </CardContent>
      <CardActions>
      <Webcaptcha/>
      </CardActions>
    </Card>
  );
   
}
export function BasicCard() {
  const [dates, setdates] = useState([]);

  useEffect(() => {
    fetch('https://proxiesfree.cc/api/date')
      .then(response => response.json())
      .then(data => {
        setdates(data.date);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <Card sx={{ width: 400, height: 400 }}>
  <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Proxies free HTTP 
        </Typography>
        <Lines/>
        <Typography variant="h5" component="div">
        <p>Laste date checked: {dates}</p>
        </Typography>
        <Typography variant="body2">
          <br />
        </Typography>
      </CardContent>
      <CardActions>
      <HTTP/>
      </CardActions>
    </Card>
  );
   
}