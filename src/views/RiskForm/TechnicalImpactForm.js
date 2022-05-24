import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { actions } from "../../redux/slices/technical";
import { useDispatch, useSelector } from "react-redux";

export default function TechnicalImpactForm() {
  const selector = useSelector((state) => state.technical);
  const dispatch = useDispatch();
  console.log(selector);
  return (
    <React.Fragment>
      <Typography variant="h5" align="center" marginBottom={2}>
        Impact Factors
      </Typography>
      <Typography variant="h6" gutterBottom>
        Technical Impact Factors
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Loss of Confidentiality
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="lossOfConfidentiality"
              value={selector.confidentality}
              onChange={(e) =>
                dispatch(actions.setConfidentality(e.target.value))
              }
            >
              <MenuItem value={0}>Not Applicable</MenuItem>
              <MenuItem value={2}>
                Minimal non-sensitive data disclosed
              </MenuItem>
              <MenuItem value={6}>
                Extensive non-sensitive data disclosed
              </MenuItem>
              <MenuItem value={7}>Extensive Critical Data Disclosed</MenuItem>
              <MenuItem value={9}>All Data Disclosed</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Loss of Integrity
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="lossOfIntegrity"
              value={selector.integrity}
              onChange={(e) => dispatch(actions.setIntegrity(e.target.value))}
            >
              <MenuItem value={0}>Not Applicable</MenuItem>
              <MenuItem value={1}>Minimal Slightly Corrupt Data</MenuItem>
              <MenuItem value={3}>Minimal Seriously Corrupt Data</MenuItem>
              <MenuItem value={5}>Extensive Slightly Corrupt Data</MenuItem>
              <MenuItem value={7}>Extensive Seriously Corrupt Data</MenuItem>
              <MenuItem value={9}>All Data Totally Corrupt</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Loss of Availability
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="lossOfAvailability"
              value={selector.availability}
              onChange={(e) =>
                dispatch(actions.setAvailability(e.target.value))
              }
            >
              <MenuItem value={0}>Not Applicable</MenuItem>
              <MenuItem value={1}>
                Minimal Secondary Services Interrupted
              </MenuItem>
              <MenuItem value={5}>
                Minimal Primary Services Interrupted
              </MenuItem>
              <MenuItem value={7}>
                Extensive Primary Services Interrupted
              </MenuItem>
              <MenuItem value={9}>All Services Completely Lost</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Loss of Accountability
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="lossOfAccountability"
              value={selector.accountability}
              onChange={(e) =>
                dispatch(actions.setAccountability(e.target.value))
              }
            >
              <MenuItem value={0}>Not Applicable</MenuItem>
              <MenuItem value={1}>
                Attack fully traceable to individual
              </MenuItem>
              <MenuItem value={7}>
                Attack possibly traceable to individual
              </MenuItem>
              <MenuItem value={9}>Attack Completely Anonymous</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
