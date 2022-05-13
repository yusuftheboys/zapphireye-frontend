import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function BusinessImpactForm() {
  return (
    <React.Fragment>
      <Typography variant="h5" align="center" marginBottom={2}>
        Impact Factors
      </Typography>
      <Typography variant="h6" gutterBottom>
        Business Impact Factors
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Financial Damage
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="financialDamage"
            >
              <MenuItem value={0}>Not Applicable</MenuItem>
              <MenuItem value={1}>
                Damage Costs Less Than to Fix The Issue
              </MenuItem>
              <MenuItem value={3}>Minor Effect on Annual Profit</MenuItem>
              <MenuItem value={7}>Significant Effect on Annual Profit</MenuItem>
              <MenuItem value={9}>Bankcruptcy</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Reputation Damage
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="reputationDamage"
            >
              <MenuItem value={0}>Not Applicable</MenuItem>
              <MenuItem value={1}>Minimal damage</MenuItem>
              <MenuItem value={4}>Loss of Major Accounts</MenuItem>
              <MenuItem value={5}>Loss of Goodwill</MenuItem>
              <MenuItem value={9}>Brand Damage</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Non-Compliance
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="nonCompliance"
            >
              <MenuItem value={0}>Not Applicable</MenuItem>
              <MenuItem value={2}>Minor Violation</MenuItem>
              <MenuItem value={5}>Clear Violation</MenuItem>
              <MenuItem value={7}>High Profile Violation</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Privacy Violation
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="privacyViolation"
            >
              <MenuItem value={0}>Not Applicable</MenuItem>
              <MenuItem value={3}>One Individual</MenuItem>
              <MenuItem value={5}>Hundreds of People</MenuItem>
              <MenuItem value={7}>Thousands of People</MenuItem>
              <MenuItem value={9}>Millions of People</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAgree" value="yes" />
            }
            label="(Agree Statement)"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
