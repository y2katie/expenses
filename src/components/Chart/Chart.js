import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
        value={dataPoint.value}
        maxValue={null}
        label={dataPoint.label}
        key={dataPoint.label} />
      ))}
    </div>
  );
};

export default Chart;
