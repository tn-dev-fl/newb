import { useEffect,useRef,useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HCaptcha from 'react-hcaptcha';
import { HTTP,Socks4,Socks5 } from "./hcaptcha";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "0px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);


export function BasicCard() {
  return (
    <Card sx={{ width: 300, height: 400 }} className="">
  <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Proxies free HTTP
        </Typography>
        <Typography variant="h5" component="div">
          Date checked 
        </Typography>
        <Typography variant="body2">
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <HTTP/>
      </CardActions>
    </Card>
  );
   
}
export function BasicCardsocks4() {
  return (
    <Card sx={{ width: 300, height: 400 }} className="">
  <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Proxies free HTTP
        </Typography>
        <Typography variant="h5" component="div">
          Date checked 
        </Typography>
        <Typography variant="body2">
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Socks4/>
      </CardActions>
    </Card>
  );
}
export function BasicCardsocks5() {
  return (
    <Card sx={{ width: 300, height: 400 }} className="">
  <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Proxies free HTTP
        </Typography>
        <Typography variant="h5" component="div">
          Date checked 
        </Typography>
        <Typography variant="body2">
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Socks5/>
      </CardActions>
    </Card>
  );
}