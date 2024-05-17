"use client";
import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import Chart from "chart.js/auto";

const DemoSection = () => {
  const [temperatures, setTemperatures] = useState<number[]>([]);
  const [humidities, setHumidities] = useState<number[]>([]);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [chartInstance, setChartInstance] = useState<any>(null);

  useEffect(() => {
    const fetchSensorData = () => {
      fetch("http://raspberrypi:3010/data")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const newTemperature = Number(data.temperature);
          const newHumidity = Number(data.humidity);

          // Menambahkan data baru ke awal array
          const updatedTemperatures = [newTemperature, ...temperatures];
          const updatedHumidities = [newHumidity, ...humidities];

          // Memotong array jika jumlah data melebihi 10
          if (updatedTemperatures.length > 10) {
            updatedTemperatures.splice(10);
          }
          if (updatedHumidities.length > 10) {
            updatedHumidities.splice(10);
          }

          setTemperatures(updatedTemperatures);
          setHumidities(updatedHumidities);
          setTemperature(data.temperature);
          setHumidity(data.humidity);

          if (chartInstance) {
            updateChart(chartInstance, updatedTemperatures, updatedHumidities);
          } else {
            createChart(updatedTemperatures, updatedHumidities);
          }
        })
        .catch((error) => {
          console.error(
            "There was a problem with your fetch operation:",
            error
          );
        });
    };

    const interval = setInterval(fetchSensorData, 1000);

    return () => clearInterval(interval);
  }, [temperatures, humidities, chartInstance]);

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

export default DemoSection;
