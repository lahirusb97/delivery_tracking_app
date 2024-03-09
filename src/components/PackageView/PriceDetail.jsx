import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Check } from "@mui/icons-material";

function createData(name, price) {
  return { name, price };
}

const rows = [
  createData("Delivery Fees", 159),
  createData("Package Price", 237),
  createData("Total Blance", 262),
];

export default function PriceDetail() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "black" }}>
            <TableCell sx={{ color: "white" }}>Description</TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              Price
            </TableCell>
            <TableCell sx={{ color: "white" }} width={"10%"} align="left">
              Progress
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="left">
                <Check />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
