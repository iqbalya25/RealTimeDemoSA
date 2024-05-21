"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface TemperatureChartProps {
  temperatures: number[];
  humidities: number[];
}

const TemperatureChart: React.FC<TemperatureChartProps> = ({
  temperatures,
  humidities,
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        updateChart(chartInstanceRef.current, temperatures, humidities);
      } else {
        chartInstanceRef.current = createChart(
          chartRef.current,
          temperatures,
          humidities
        );
      }
    }
  }, [temperatures, humidities]);

  const createChart = (
    ctx: HTMLCanvasElement,
    temperatureData: number[],
    humidityData: number[]
  ) => {
    return new Chart(ctx, {
      type: "line",
      data: {
        labels: Array.from({ length: temperatureData.length }, (_, i) =>
          i.toString()
        ),
        datasets: [
          {
            label: "Temperature",
            data: temperatureData,
            borderColor: "rgba(255, 99, 132, 1)",
            fill: false,
          },
          {
            label: "Humidity",
            data: humidityData,
            borderColor: "rgba(54, 162, 235, 1)",
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: true,
            reverse: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  const updateChart = (
    chart: Chart,
    temperatureData: number[],
    humidityData: number[]
  ) => {
    chart.data.labels = Array.from({ length: temperatureData.length }, (_, i) =>
      i.toString()
    );
    chart.data.datasets[0].data = temperatureData;
    chart.data.datasets[1].data = humidityData;
    chart.update();
  };

  return <canvas ref={chartRef} id="myChart" width="400" height="400"></canvas>;
};

export default TemperatureChart;
