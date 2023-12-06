import React from "react";
import NVD3Chart from "react-nvd3";

function getDatum() {
  var sin = [],
    sin2 = [],
    cos = [];
  for (var i = 0; i < 100; i++) {
    sin.push({
      x: i,
      y: Math.sin(i / 10),
    });
    sin2.push({
      x: i,
      y: Math.sin(i / 10) * 0.25 + 0.5,
    });
    cos.push({
      x: i,
      y: 0.5 * Math.cos(i / 10),
    });
  }
  return [
    {
      values: cos,
      key: "",
      color: "#000000",
    },
  ];
}

class LineChart extends React.Component {
  render() {
    const data = getDatum();
    return (
      <div>
        {React.createElement(NVD3Chart, {
          xAxis: {
            tickFormat: function (d) {
              return d;
            },
            axisLabel: "Time (ms)",
          },
          yAxis: {
            axisLabel: "Amount",
            tickFormat: function (d) {
              return parseFloat(d).toFixed(2);
            },
          },
          type: "lineChart",
          datum: data,
          x: "x",
          y: "y",
          height: 300,
          renderEnd: function () {
            console.log("renderEnd");
          },
        })}
      </div>
    );
  }
}

export default LineChart;