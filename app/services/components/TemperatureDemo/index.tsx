"use client";
import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import Chart from "chart.js/auto";

const TemperatureDemo = () => {
  const [temperatures, setTemperatures] = useState<number[]>([]);
  const [humidities, setHumidities] = useState<number[]>([]);
  const [temperature, setTemperature] = useState(25);
  const [humidity, setHumidity] = useState(40);
  const [chartInstance, setChartInstance] = useState<any>(null);

  useEffect(() => {
    const updateDummyData = () => {
      setTemperature((prevTemp) => (prevTemp >= 32 ? 25 : prevTemp + 1));
      setHumidity((prevHum) => (prevHum >= 42 ? 35 : prevHum + 1));

      const newTemperature = temperature >= 27 ? 25 : temperature + 1;
      const newHumidity = humidity >= 42 ? 40 : humidity + 1;

      const updatedTemperatures = [newTemperature, ...temperatures];
      const updatedHumidities = [newHumidity, ...humidities];

      if (updatedTemperatures.length > 10) {
        updatedTemperatures.splice(10);
      }
      if (updatedHumidities.length > 10) {
        updatedHumidities.splice(10);
      }

      setTemperatures(updatedTemperatures);
      setHumidities(updatedHumidities);

      if (chartInstance) {
        updateChart(chartInstance, updatedTemperatures, updatedHumidities);
      } else {
        createChart(updatedTemperatures, updatedHumidities);
      }
    };

    const interval = setInterval(updateDummyData, 2000);

    return () => clearInterval(interval);
  }, [temperature, humidity, temperatures, humidities, chartInstance]);

  const createChart = (temperatureData: number[], humidityData: number[]) => {
    const ctx = document.getElementById("myChart") as HTMLCanvasElement;
    if (ctx) {
      const newChartInstance = new Chart(ctx, {
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

      setChartInstance(newChartInstance);
    }
  };

  const updateChart = (
    chart: any,
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

  return (
    <Box maxW="1000px" mx="auto" p="4">
      <Text fontSize="2xl" fontWeight="bold" mb="4" className="text-4xl py-10">
        Demo Section
      </Text>

      <Box
        p="4"
        borderRadius="md"
        boxShadow="lg"
        bg="gray.200"
        textAlign="center"
        className="bg-slate-200"
      >
        <Text fontSize="xl" fontWeight="bold" mb="2">
          Temperature: {temperature}°C
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          Humidity: {humidity}%
        </Text>
        <canvas id="myChart" width="400" height="400"></canvas>
      </Box>
    </Box>
  );
};

export default TemperatureDemo;
