import React from "react";
import { Flex, Box, Text, Stack } from "@chakra-ui/react" ;
import ConnectionsCard from "../components/Connections_Card";

const Connections_Container = () => {
  return (
    <>
      <Stack
      mt="-0.5rem !important"
      w="100%"

      >
        <Text fontSize={28} pb={5} pt={{base: "8", lg: "0"}}>Connections</Text> 
        <ConnectionsCard/>
      </Stack>
    </>
  )
}

export default Connections_Container;