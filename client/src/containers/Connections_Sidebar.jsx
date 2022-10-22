import React from "react";
import { VStack, StackDivider, Box, Center, useColorModeValue, Text, Input } from '@chakra-ui/react'

import {useState} from 'react';
import Connections_ProfileCard from "../components/Connections_ProfileCard";
import Connections_BucketList from "../components/Connections_BucketList";
const Sidebar = (context) => {
    return (
      <>
        <VStack
            bg={useColorModeValue('white', 'gray.800')}
            h = {'100vh'}
            // divider={<StackDivider borderColor='gray.200' />}
            spacing={2}
            align='stretch'
            >
            <Connections_ProfileCard context={context}/>
            <Connections_BucketList pairing={context.pairing}/>
            <Center pb={4}>
              <Box
                w={'90%'}
                h={'100px'}
                bg={useColorModeValue('white', 'gray.800')}
                border={'1px'}
                borderColor={'gray.200'}
                rounded={'md'}
                pt={2}
                pl={4}
                mb={0}
                textAlign={'left'}>
                  <Text fontSize={'15px'}>Timeline</Text>
              </Box>
            </Center>  
        </VStack>
      </>
    )
  }
  
export default Sidebar;