import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Image,
  Badge,
  Icon,
  chakra,
  Input,
  InputLeftElement,
  InputGroup,
  Text,
  Stack
} from '@chakra-ui/react';

import { BiSearch } from 'react-icons/bi';
import { IoIosChatbubbles } from 'react-icons/io';
import ConnectionsMessage from './Connections_Message';
import { useSelector, useDispatch } from 'react-redux';


function ConnectionsCard() {
  const { connections, user_id, connectionFiltered } = useSelector(state => state.user);
  // const [isLoading, setIsLoading] = useState(false);

  // Array that holds who the user is connected to (either the mentor or mentee)
  let filteredConnections = [];

  // Holds what information to be rendered (parses the filteredConnections array and assigns values to props)
  let connectionsArr = [];

  if (connections) {
    for (let x = 0; x < connections.length; x++) {
      let mentor = {
        pairing: connections[x].recordid,
        id: connections[x].mentor_user,
        name: connections[x].mentor_full_name[0],
        photo: connections[x].mentor_photo[0],
        about: connections[x].mentor_about[0],
        job: connections[x].mentor_job[0],
      }
      let mentee = {
        pairing: connections[x].recordid,
        id: connections[x].mentee_user,
        name: connections[x].mentee_full_name[0],
        photo: connections[x].mentee_photo[0],
        about: connections[x].mentee_about[0],
        job: connections[x].mentee_job[0],
      }

      if (mentor.id === user_id) {
        filteredConnections.push(mentee);

      }
      else {
        filteredConnections.push(mentor);
      }
    }

    for (let x = 0; x < filteredConnections.length; x++) {
      connectionsArr.push(<ConnectionsMessage key={x} name={filteredConnections[x].name} id={filteredConnections[x].id} photo={filteredConnections[x].photo} about={filteredConnections[x].about} job={filteredConnections[x].job} pairing={filteredConnections[x].pairing} />)
    }
  }


  return (
    <>
      <Flex p={0} w="100%" h="100%" alignItems="flex-start" justifyContent="flex-start">
        <Flex
          direction="column"
          bg="white"
          maxW="100%"
          w="100%"
          shadow="0px 1px 1px rgba(0, 0, 0, 0.02)"
          position="relative"
          px="3%"
          borderRadius="15px"
          pb="3%"
          h="100%"
        >
          <Flex
            direction='row'
            alignItems="center"
            mt="15px"
            gap="10%"
            pb="20px"
          >
            <Icon as={IoIosChatbubbles}
              color="white"
              bg="linear-gradient(135deg, #37D67D 0%, #73DFE3 100%)"
              fontSize="6xl"
              borderRadius={15}
              p={15}
            />
            <Text fontWeight={600}>Share an Update</Text>

          </Flex>

          {/* <InputGroup pb="10px">
        <InputLeftElement
          pointerEvents='none'
          children={<BiSearch color="#2D3748"/>}
        />
        <Input
        bg="#F8FAFB" 
        placeholder='Search'
        border="0.5px solid #E2E8F0"
        borderRadius="15px"
        />
      </InputGroup> */}
          <Stack spacing={{ base: '20px', md: '5px' }}>
            {connectionsArr}
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}

export default ConnectionsCard;