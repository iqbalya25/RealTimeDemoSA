"use client";
import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

const RelayDemo = () => {
  const [relayOn, setRelayOn] = useState(false);

  const toggleRelay = () => {
    setRelayOn((prevRelayOn) => !prevRelayOn);
  };

  return (
    <Box textAlign="center" mt="4">
      <Button onClick={toggleRelay} mt="4">
        Toggle Lamp
      </Button>
      <div
        style={{
          marginTop: "16px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: relayOn ? "yellow" : "darkgray",
          margin: "auto",
        }}
      />
    </Box>
  );
};

export default RelayDemo;
