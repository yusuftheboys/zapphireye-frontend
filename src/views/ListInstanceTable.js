import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";

export default function ListInstanceTable([instances]) {
  console.log(instances);

  return (
    <Grid>
      <Grid>
        <ul>
          {instances.map((element) => {
            <li>{element.uri}</li>;
          })}
        </ul>
      </Grid>
    </Grid>
  );
}
