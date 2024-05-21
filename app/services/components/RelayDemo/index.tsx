"use client";
import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

const RelayDemo = () => {
  const [relayOn, setRelayOn] = useState(false);

  const toggleRelay = () => {
    setRelayOn((prevRelayOn) => !prevRelayOn);
  };

  return (
    <Box textAlign="center" mt="4" className="pt-5">
      <h1 className="text-2xl font-bold">Web Based Control System</h1>
      <Button
        onClick={toggleRelay}
        mt="10"
        mb="10"
        className="p-3 bg-slate-500 rounded-2xl"
      >
        <p className="text-white font-semibold">Toggle Lamp</p>
      </Button>
      <div
        style={{
          marginTop: "16px",
          padding: "10px",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: relayOn ? "yellow" : "darkgray",
          margin: "auto",
        }}
      />
    </Box>
  );
};

export default RelayDemo;
