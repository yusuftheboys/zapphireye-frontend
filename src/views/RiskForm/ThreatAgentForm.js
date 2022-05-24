import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { actions } from "../../redux/slices/threatAgent";
import { useDispatch, useSelector } from "react-redux";

export default function ThreatAgentForm() {
  const selector = useSelector((state) => state.threatAgent);
  const dispatch = useDispatch();
  console.log(selector);
  return (
    <React.Fragment>
      <Typography variant="h5" align="center" marginBottom={2}>
        Likelihood Factors
      </Typography>
      <Typography variant="h6" gutterBottom>
        Threat Agent Factors
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Skills required
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="skillRequired"
              value={selector.skill}
              onChange={(e) => dispatch(actions.setSkill(e.target.value))}
            >
              <MenuItem value={0}>Not Applicable</MenuItem>
              <MenuItem value={1}>No Technical Skills</MenuItem>
              <MenuItem value={3}>Some Technical Skills</MenuItem>
              <MenuItem value={5}>Advanced Computer User</MenuItem>
              <MenuItem value={6}>Network and Programming Skills</MenuItem>
              <MenuItem value={9}>Security Penetration Skills</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Motive</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="motive"
              value={selector.motive}
              onChange={(e) => dispatch(actions.setMotive(e.target.value))}
            >
              <MenuItem value={0}>Not Applicable</MenuItem>
              <MenuItem value={1}>Low or No Reward</MenuItem>
              <MenuItem value={4}>Possible Reward</MenuItem>
              <MenuItem value={9}>High Reward</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Opportunity</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="opportunity"
              value={selector.opportunity}
              onChange={(e) => dispatch(actions.setOpportunity(e.target.value))}
            >
              <MenuItem value={0}>
                Full Access or Expensive Resources Required
              </MenuItem>
              <MenuItem value={4}>
                Special Access or Resources Required
              </MenuItem>
              <MenuItem value={7}>Some Access or Resources Required</MenuItem>
              <MenuItem value={9}>No Access or Resources Required</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Population Size
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="populationSize"
              value={selector.population}
              onChange={(e) => dispatch(actions.setPopulation(e.target.value))}
            >
              <MenuItem value={0}>Not Applicable</MenuItem>
              <MenuItem value={2}>System Administrators</MenuItem>
              <MenuItem value={4}>Intranet Users</MenuItem>
              <MenuItem value={5}>Partners</MenuItem>
              <MenuItem value={6}>Authenticated Users</MenuItem>
              <MenuItem value={9}>Anonymous Internet Users</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
