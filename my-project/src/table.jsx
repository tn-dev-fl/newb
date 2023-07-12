import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CountryFlag from 'react-country-flag';

export default function BasicTable() {
  const [proxies, setProxies] = useState([]);

  useEffect(() => {
    fetch('https://proxiesfree.cc/api/json')
      .then(response => response.json())
      .then(data => {
        setProxies(data.proxies);
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
              <TableCell className="table-header-cell">ip:port</TableCell>
              <TableCell align="right" className="table-header-cell">Ip</TableCell>
              <TableCell align="right" className="table-header-cell">Country</TableCell>
              <TableCell align="right" className="table-header-cell">Response</TableCell>
              <TableCell align="right" className="table-header-cell">Latency</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {proxies.map((proxy, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" className="table-cell">{proxy["ip:port"]}</TableCell>
                <TableCell align="right" className="table-cell">{proxy.ip}</TableCell>
                <TableCell align="right" className="table-cell">
                  <CountryFlag countryCode={proxy.country} svg style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                }}/>
                </TableCell>
                <TableCell align="right" className="table-cell">{proxy.response}</TableCell>
                <TableCell align="right" className="table-cell">{proxy.latency}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
