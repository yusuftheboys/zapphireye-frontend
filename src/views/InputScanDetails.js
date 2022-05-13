import {
  Card,
  CardContent,
  TextField,
  Box,
  Typography,
  Button,
  Grid,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Container,
} from "@mui/material";
import React from "react";
import { startScan } from "../service/scan";

const InputScanDetails = () => {
  const [name, setName] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [operator, setOperator] = React.useState("");
  const [period, setPeriod] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleChange = (event) => {
    setPeriod(event.target.value);
  };

  const handleSubmit = async (e) => {
    console.log(name);
    console.log(url);
    console.log(operator);
  };

  return (
    <Card>
      <CardContent>
        <Typography>
          Input the Required Information below to Start Scan
        </Typography>
        <Container maxWidth="xl">
          <Grid item lg={12}>
            <Box>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  required
                  autoComplete="off"
                  margin="normal"
                  label="Name"
                  onChange={(e) => setName(e.target.value)}
                  variant="outlined"
                />
              </Grid>
              <Grid>
                <TextField
                  id="outlined-basic"
                  required
                  autoComplete="off"
                  margin="normal"
                  label="Url"
                  name="url"
                  onChange={(e) => setUrl(e.target.value)}
                  variant="outlined"
                />
              </Grid>
              <Grid>
                <TextField
                  id="outlined-basic"
                  required
                  autoComplete="off"
                  margin="normal"
                  label="Operator"
                  name="operator"
                  onChange={(e) => setOperator(e.target.value)}
                  variant="outlined"
                />
              </Grid>
              <Grid>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Period</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={period}
                    label="Period"
                    onChange={handleChange}
                  >
                    <MenuItem value={"3Minutes"}>3 Minutes</MenuItem>
                    <MenuItem value={"Weekly"}>Weekly</MenuItem>
                    <MenuItem value={"2Weeks"}>2 Weeks</MenuItem>
                    <MenuItem value={"3Weeks"}>3 Weeks</MenuItem>
                    <MenuItem value={"Monthly"}>Monthly</MenuItem>
                    <MenuItem value={"3Months"}>3 Months</MenuItem>
                    <MenuItem value={"Yearly"}>Yearly</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid>
                <TextField
                  id="outlined-basic"
                  required
                  autoComplete="off"
                  margin="normal"
                  label="Description"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  variant="outlined"
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                sx={{ mt: 3, mb: 2 }}
              >
                Scan
              </Button>
            </Box>
          </Grid>
        </Container>
      </CardContent>
    </Card>
  );
};

export default InputScanDetails;
