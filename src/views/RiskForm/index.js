import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ThreatAgentForm from "./ThreatAgentForm";
import VulnerabilityForm from "./VulnerabilityForm";
import TechnicalImpactForm from "./TechnicalImpactForm";
import BusinessImpactForm from "./BusinessImpactForm";
import { useSelector } from "react-redux";
import { postUrlList } from "../../service/url";
import { store } from "../../redux/store";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/">
        Zapphireye Security
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = [
  "Threat Agent Factors",
  "Vulnerability Factors",
  "Technical Impact Factors",
  "Business Impact Factors",
];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ThreatAgentForm />;
    case 1:
      return <VulnerabilityForm />;
    case 2:
      return <TechnicalImpactForm />;
    case 3:
      return <BusinessImpactForm />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const selector = useSelector((state) => state);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = async () => {
    const state = store.getState();
    const response = await postUrlList(
      state.url.name,
      state.url.url,
      state.url.operator,
      state.url.period,
      state.url.description,
      state.threatAgent.skill,
      state.threatAgent.motive,
      state.threatAgent.opportunity,
      state.threatAgent.population,
      state.vulnerability.discovery,
      state.vulnerability.exploit,
      state.vulnerability.awareness,
      state.vulnerability.intrusion,
      state.technical.confidentality,
      state.technical.integrity,
      state.technical.availability,
      state.technical.accountability,
      state.business.financial,
      state.business.reputation,
      state.business.compliance,
      state.business.privacy
    );

    console.log(response);
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          Risk Assessment
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Your Assessment has been Logged
              </Typography>
              <Typography variant="subtitle1">
                Your Web would be Tested in a few minutes, Please Wait.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                {activeStep === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Submit
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Next
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
      <Copyright />
    </Container>
  );
}
