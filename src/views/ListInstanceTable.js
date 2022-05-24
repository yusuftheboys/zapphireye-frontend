import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function ListInstanceTable({ instances }) {
  console.log(instances);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>URI</TableCell>
            <TableCell>Attack</TableCell>
            <TableCell>Evidence</TableCell>
            <TableCell>Method</TableCell>
            <TableCell>Param</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {instances &&
            instances.map((row) => (
              <TableRow
                key={row.uri}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.uri}
                </TableCell>
                <TableCell>{row.attack}</TableCell>
                <TableCell>{row.evidence}</TableCell>
                <TableCell>{row.method}</TableCell>
                <TableCell>{row.param}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
