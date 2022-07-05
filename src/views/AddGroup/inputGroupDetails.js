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
  Modal,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const InputGroupDetails = () => {
  const [open, setOpen] = React.useState(false);
  //   const selector = useSelector((state) => state.url);
  //   const dispatch = useDispatch();
  //   console.log(selector);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = async (e) => {
    handleOpen();
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography component="h1" variant="h5">
            Web List
          </Typography>
          <Container maxWidth="lg">
            <Grid item>
              <Box>
                <Grid item>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    required
                    autoComplete="off"
                    margin="normal"
                    label="Name"
                    // value={selector.name}
                    // onChange={(e) => dispatch(actions.setName(e.target.value))}
                    variant="outlined"
                  />
                </Grid>
                <Grid>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    required
                    autoComplete="off"
                    margin="normal"
                    label="Url"
                    // value={selector.url}
                    // onChange={(e) => dispatch(actions.setUrl(e.target.value))}
                    variant="outlined"
                  />
                </Grid>
                <Grid>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    required
                    autoComplete="off"
                    margin="normal"
                    label="Operator"
                    // value={selector.operator}
                    // onChange={(e) =>
                    //   dispatch(actions.setOperator(e.target.value))
                    // }
                    variant="outlined"
                  />
                </Grid>
                <Grid>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Period
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Period"
                      //   value={selector.period}
                      //   onChange={(e) =>
                      //     dispatch(actions.setPeriod(e.target.value))
                      //   }
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
                    fullWidth
                    multiline
                    id="outlined-basic"
                    required
                    autoComplete="off"
                    margin="normal"
                    label="Description"
                    name="description"
                    // value={selector.description}
                    // onChange={(e) =>
                    //   dispatch(actions.setDescription(e.target.value))
                    // }
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
                  Risk Assessment
                </Button>
              </Box>
            </Grid>
          </Container>
        </CardContent>
      </Card>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <RiskForm />
      </Modal> */}
    </React.Fragment>
  );
};

export default InputGroupDetails;
