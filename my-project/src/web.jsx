import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CountryFlag from 'react-country-flag';

export default function BasicTableweb() {
  const [Url, setUrl] = useState([]);

  useEffect(() => {
    fetch('https://proxiesfree.cc/api/web/json')
      .then(response => response.json())
      .then(data => {
        setUrl(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='conta'>
      <TableContainer component={Paper}>
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell className="table-header-cell">Url</TableCell>
              <TableCell align="right" className="table-header-cell">CMS</TableCell>
              <TableCell align="right" className="table-header-cell">Cloudflare</TableCell>
              <TableCell align="right" className="table-header-cell">Port</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Url.map((url, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" className="table-cell">{url.website}</TableCell>
                <TableCell align="right" className="table-cell">{url.cms}</TableCell>
                <TableCell align="right" className="table-cell">{url.cloudflare}</TableCell>
                <TableCell align="right" className="table-cell">{url.port}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

function About() {
  return <h1>About Page</h1>;

}
