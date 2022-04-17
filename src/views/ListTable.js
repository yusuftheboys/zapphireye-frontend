import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getScan } from '../service/scan';

const columns = [
  { field: 'date', headerName: 'Date', width: 230 },
  { field: 'domain', headerName: 'Domain', width: 130 },
  { field: 'host', headerName: 'Host', width: 130 },
  {
    field: 'port',
    headerName: 'Port',
    width: 90,
  },
  { field: 'ssl', headerName: 'SSL', width: 130 },

];

function get(rows){
    let data = [] 

    rows.forEach(row => {
        data.push({
            date: row.date,
            id: row.id,
            domain: row.site.domain,
            host: row.site.host,
            port: row.site.port,
            ssl: row.site.ssl
        })
    });

    return data
}

export default function ListTable() {
  
    const [obj, setObj] = React.useState([])
    
    React.useEffect(async() => {
        const response = await getScan();
        setObj(get(response));
    }, [])
    

    return (
    <div style={{ height: 400, width: '100%' }}>
      {obj.length != 0 && 
      <DataGrid
        rows={obj}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />}
      
    </div>
  );
}
