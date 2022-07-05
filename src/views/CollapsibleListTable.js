import * as React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { getScan } from "../service/scan";
import { Button } from "@mui/material";

const exportPDF = () => {};

function UnsafeComponent({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

function Row(props) {
  const { row } = props;
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.date}
        </TableCell>
        <TableCell align="right">{row.domain}</TableCell>
        <TableCell align="right">{row.host}</TableCell>
        <TableCell align="right">{row.port}</TableCell>
        <TableCell align="right">{row.ssl}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Alert
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Plugin ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Risk Level</TableCell>
                    <TableCell>Count</TableCell>
                    <TableCell>CWE ID</TableCell>
                    <TableCell>WASC ID</TableCell>
                    <TableCell align="center">Reference</TableCell>
                    <TableCell align="center">Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.alert.map((alertRow) => (
                    <TableRow key={alertRow.pluginid}>
                      <TableCell component="th" scope="row">
                        {alertRow.pluginid}
                      </TableCell>
                      <TableCell>{alertRow.name}</TableCell>
                      <TableCell>{alertRow.risk}</TableCell>
                      <TableCell>{alertRow.count}</TableCell>
                      <TableCell>{alertRow.cweid}</TableCell>
                      <TableCell>{alertRow.wascid}</TableCell>
                      <TableCell align="center">
                        {<UnsafeComponent html={alertRow.reference} />}
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          onClick={() =>
                            navigate(
                              `/desc?id=${row.id}&pluginid=${alertRow.pluginid}`,
                              { state: alertRow }
                            )
                          }
                        >
                          Description
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function getAlerts(alerts) {
  let alert = [];

  alerts.forEach((alt) => {
    alert.push({
      pluginid: alt.pluginid,
      name: alt.name,
      risk: alt.riskdesc,
      count: alt.count,
      cweid: alt.cweid,
      wascid: alt.wascid,
      desc: alt.desc,
      solution: alt.solution,
      reference: alt.reference,
      instance: alt.instances,
    });
  });

  return alert;
}

function get(rows) {
  let data = [];

  rows.forEach((row) => {
    data.push({
      date: row.date,
      id: row.id,
      domain: row.site.domain,
      host: row.site.host,
      port: row.site.port,
      ssl: row.site.ssl,
      alert: getAlerts(row.site.alerts),
    });
  });
  console.log(data);
  return data;
}

export default function CollapsibleTable() {
  const [obj, setObj] = React.useState([]);

  React.useEffect(async () => {
    const response = await getScan();
    setObj(get(response));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Date</TableCell>
            <TableCell align="right">Domain</TableCell>
            <TableCell align="right">Host</TableCell>
            <TableCell align="right">Port</TableCell>
            <TableCell align="right">SSL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {obj.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
