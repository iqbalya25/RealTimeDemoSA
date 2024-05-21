"use client";
import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import TemperatureChart from "./TemperatureChart";

const TemperatureDemo = () => {
  const [temperatures, setTemperatures] = useState<number[]>([]);
  const [humidities, setHumidities] = useState<number[]>([]);
  const [temperature, setTemperature] = useState(25);
  const [humidity, setHumidity] = useState(40);

  useEffect(() => {
    const updateDummyData = () => {
      const newTemperature = temperature >= 29 ? 25 : temperature + 1;
      const newHumidity = humidity >= 43 ? 36 : humidity + 2;

      setTemperature(newTemperature);
      setHumidity(newHumidity);

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
    };

    const interval = setInterval(updateDummyData, 2000);

    return () => clearInterval(interval);
  }, [temperature, humidity, temperatures, humidities]);

  return (
    <Box maxW="1000px" mx="auto" p="4">
      <Text
        fontSize="2xl"
        fontWeight="bold"
        mb="4"
        className="py-10 text-center"
      >
        <h1 className="text-4xl pb-10">Demo Section</h1>
        <p className="text-2xl">Web Based Real Time Monitoring Temperature</p>
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
        <TemperatureChart temperatures={temperatures} humidities={humidities} />
      </Box>
    </Box>
  );
};

export default TemperatureDemo;
