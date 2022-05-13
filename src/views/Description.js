import * as React from "react";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Paper, Grid, Container } from "@mui/material";
import { getDescById } from "../service/scan";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ListInstanceTable from "./ListInstanceTable";

function UnsafeComponent({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Description = () => {
  let query = useQuery();

  const [obj, setObj] = React.useState({});
  const instance = obj.instances;

  React.useEffect(async () => {
    const response = await getDescById(query.get("id"), query.get("pluginid"));
    console.log(response);
    setObj(response);
  }, []);

  const { state } = useLocation();
  console.log(state);
  return (
    <Box sx={{ display: "flex" }}>
      <Grid>
        <Grid spacing={2}>
          <Card sx={12}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Description
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {<UnsafeComponent html={obj.desc} />}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid spacing={2}>
          <Card sx={12}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Solution
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {/* {console.log(obj.solution)} */}
                  {<UnsafeComponent html={obj.solution} />}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Description;
