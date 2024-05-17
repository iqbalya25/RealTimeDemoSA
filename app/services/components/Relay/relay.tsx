// RelayControl.jsx
"use client";
import { useState } from "react";
import { Box, Button, Card, Heading, Text } from "@chakra-ui/react";
import axios from "axios";

const RelayControl = () => {
  const [isRelayOn, setIsRelayOn] = useState(false);

  const turnOnRelay = async () => {
    try {
      await axios.post("http://raspberrypi:3010/relay/on");
      setIsRelayOn(true);
    } catch (error) {
      console.error("Failed to turn on relay:", error);
    }
  };

  const turnOffRelay = async () => {
    try {
      await axios.post("http://raspberrypi:3010/relay/off");
      setIsRelayOn(false);
    } catch (error) {
      console.error("Failed to turn off relay:", error);
    }
  };

  return (
    <Box p="4" maxW="1000" mx="auto" className="bg-slate-200 mt-10 p-10">
      <Card>
        <Box
          p="4"
          className="flex flex-col justify-center items-center text-center gap-4"
        >
          <Heading
            size="md"
            mb="4"
            fontSize="6xl"
            fontWeight="bold"
            className="text-4xl"
          >
            Relay Control
          </Heading>
          <Text fontSize="2xl" fontWeight="semibold" className="text-2xl">
            Status Relay: {isRelayOn ? "On" : "Off"}
          </Text>
          <Button
            colorScheme="teal"
            onClick={turnOffRelay}
            className="bg-slate-500 p-3 rounded-xl text-white text-4xl"
            disabled={isRelayOn}
          >
            Turn On
          </Button>
          <Button
            colorScheme="teal"
            onClick={turnOnRelay}
            className="bg-slate-500 p-3 rounded-xl text-white text-4xl"
            disabled={!isRelayOn}
          >
            Turn Off
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default RelayControl;
