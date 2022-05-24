import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Card } from "@mui/material";
import { getUrlData } from "../service/url";

const columns = [
  { field: "name", headerName: "Name", width: 180 },
  { field: "url", headerName: "URL", width: 180 },
  { field: "operator", headerName: "Operator", width: 130 },
  { field: "period", headerName: "Scan Period", width: 130 },
  { field: "desc", headerName: "Web Description", width: 250 },
  { field: "riskNumber", headerName: "Risk Rate", type: "number", width: 90 },
  { field: "riskDesc", headerName: "Risk Level", width: 90 },
];

export default function WebListTable() {
  const [data, setData] = React.useState({});

  React.useEffect(async () => {
    const response = await getUrlData();
    setData(response);
  }, []);
  console.log(data);

  return (
    <Card>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </Card>
  );
}
