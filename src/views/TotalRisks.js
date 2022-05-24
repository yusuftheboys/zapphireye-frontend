import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import Chart from "react-apexcharts";

const TotalRisks = () => {
  var series = [12];
  var chartOptionsLow = {
    chart: {
      height: 100,
      type: "radialBar",
    },
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#333",
          startAngle: -90,
          endAngle: 90,
        },
        dataLabels: {
          value: {
            fontSize: "20px",
            show: true,
            formatter: function (val) {
              return val;
            },
          },
          name: {
            fontSize: "20px",
            show: true,
          },
        },
      },
    },
    labels: ["Low"],
  };
  var chartOptionsMedium = {
    chart: {
      height: 100,
      type: "radialBar",
    },
    colors: ["#F8CB2E"],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#333",
          startAngle: -90,
          endAngle: 90,
        },
        dataLabels: {
          value: {
            fontSize: "20px",
            show: true,
            formatter: function (val) {
              return val;
            },
          },
          name: {
            fontSize: "20px",
            show: true,
          },
        },
      },
    },
    labels: ["Medium"],
  };
  var chartOptionsHigh = {
    chart: {
      height: 100,
      type: "radialBar",
    },
    colors: ["#B22727"],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#333",
          startAngle: -90,
          endAngle: 90,
        },
        dataLabels: {
          value: {
            fontSize: "20px",
            show: true,
            formatter: function (val) {
              return val;
            },
          },
          name: {
            fontSize: "20px",
            show: true,
          },
        },
      },
    },
    labels: ["High"],
  };

  return (
    <Card sx={{ minWidth: 275, mb: 1 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Total Web Risks
        </Typography>
        <Grid container maxWidth={"xl"}>
          <Grid item lg={4}>
            <div className="app">
              <div className="mixed-chart">
                <Chart
                  options={chartOptionsLow}
                  series={series}
                  type="radialBar"
                  width="250"
                />
              </div>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="app">
              <div className="mixed-chart">
                <Chart
                  options={chartOptionsMedium}
                  series={series}
                  type="radialBar"
                  width="250"
                />
              </div>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="app">
              <div className="mixed-chart">
                <Chart
                  options={chartOptionsHigh}
                  series={series}
                  type="radialBar"
                  width="250"
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TotalRisks;
