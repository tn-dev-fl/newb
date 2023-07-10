import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <div className='conta'>
    <TableContainer component={Paper}>
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell className="table-header-cell">Dessert (100g serving)</TableCell>
            <TableCell align="right" className="table-header-cell">Calories</TableCell>
            <TableCell align="right" className="table-header-cell">Fat&nbsp;(g)</TableCell>
            <TableCell align="right" className="table-header-cell">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right" className="table-header-cell">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" className="table-cell">{row.name}</TableCell>
              <TableCell align="right" className="table-cell">{row.calories}</TableCell>
              <TableCell align="right" className="table-cell">{row.fat}</TableCell>
              <TableCell align="right" className="table-cell">{row.carbs}</TableCell>
              <TableCell align="right" className="table-cell">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
    </div>
  );
}